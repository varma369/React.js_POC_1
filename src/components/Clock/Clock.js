import React, { Component } from 'react';
import Button from '../Button/Button';
class Clock extends Component {
   
    state = {
        curTime: ''
    }
    componentWillMount() {
        if(this.props.isUserProfile){
        setInterval(function () {
            this.setState({
                curTime: new Date().toLocaleTimeString()
            })
        }.bind(this), 1000);
    }
    }
    render() {
        let logout=null;
        if(this.props.isUserProfile||this.props.isDashboard)
        {
            logout=<Button name={'Logout'}/>;
        }
        return (
            <p>
                 {logout}
                 {this.state.curTime}
            </p>
        );
    }
}
export default Clock;