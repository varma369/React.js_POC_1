import React, { Component } from 'react';
import Input from '../InputBox/Input';
import classes from './Login.css';
import Button from '../Button/Button';
import Aux from '../../hoc/Auxilary';
import Header from '../Header/Header';
//To connect and get data from store
import { connect } from 'react-redux';

class Login extends Component {
    //For default values and input types in Login
    state = {
        isDashboard: false,
        isUserProfile: false,
        LoginIsValid: false,
        loginElements: {
            userName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'UserName'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                label: 'User Name:'
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                validation: {
                    required: true
                },
                valid: false,
                value: '',
                label: 'Password:'
            }
        }
    }


    //go through burgerbuilder.js
    navigateToDashboard = () => {
        this.props.onLogin(this.state.loginElements.userName.value);
        console.log('submitted')
        this.props.history.push('/Dashboard');
        //When Sending Query Parameters
        // this.props.history.push({
        //     pathname: '/Dashboard',
        //   search: '?' + this.state.loginElements.userName.value
        //  });
    }


    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginElements = {
            ...this.state.loginElements
        };
        const updatedFLoginElement = {
            ...updatedLoginElements[inputIdentifier]
        };
        updatedFLoginElement.value = event.target.value;
        updatedFLoginElement.valid=this.checkValidity(updatedFLoginElement.value, updatedFLoginElement.validation);
        updatedLoginElements[inputIdentifier] = updatedFLoginElement;
        let loginIsValid = true;
        for (let inputIdentifier in updatedLoginElements) {
            loginIsValid = updatedLoginElements[inputIdentifier].valid && loginIsValid;
            console.log("loginIsValid="+loginIsValid)
        }
        this.setState({ loginElements: updatedLoginElements,LoginIsValid:loginIsValid});
    }


    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        return isValid;
    }
    
    render() {
        const ElementsArray = [];
        for (let key in this.state.loginElements) {
            console.log(key)
            ElementsArray.push({
                id: key,
                config: this.state.loginElements[key]
            }
            )
        }

        let login = (
            ElementsArray.map(logelm =>
                (
                    <Input
                        key={logelm.id}
                        elementType={logelm.config.elementType}
                        elementConfig={logelm.config.elementConfig}
                        value={logelm.config.value}
                        invalid={!logelm.config.valid}
                        shouldValidate={logelm.config.validation}
                        label={logelm.config.label}
                        changed={(event) => this.inputChangedHandler(event, logelm.id)} />
                ))
        );
        return (
            <Aux>
                <Header isDashboard={this.state.isDashboard} isUserProfile={this.state.isUserProfile} />
                <div className={classes.Login}>
                    <h4>Login</h4>
                    {login}
                    <Button name={'Login'} disabled={!this.state.LoginIsValid} clicked={this.navigateToDashboard} />
                </div>
            </Aux>
        );
    }
}

const mapStateToProps=state=>{
    console.log("central===="+state.userName);
    return{
        cenStateUserName:state.userName
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onLogin:(loginuserName)=>dispatch({type:'LOGIN',loginName:loginuserName})
    };
}



export default connect(mapStateToProps,mapDispatchToProps)(Login);