import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Header from '../../components/Header/Header';
//Toget axios third party library npm install --save axios
//It is used to connect server or get json data from local library
import axios from 'axios';
import classes from './Dashboard.css';
import { connect } from 'react-redux';
class Dashboard extends Component {
    state = {
        loadedData: null,
        Details: null,
        userDetails: null,
        userProducts: [],
        name: ''
    }
    componentDidMount() {
        //Used for retrieving Query parameters
        // const query = new URLSearchParams(this.props.location.search);
        // for (let param of query.entries()) {
        //     console.log(param[0])
        //     this.setState({ name: param[0] });
        // }
        this.loadData();
    }
    loadData() {
        axios.get('./UserData.json')
            .then(response => {
                console.log(response.data)
                // this.setState({ Details: response.data });
                let userInfo=null;
                let products=[];

                if (response.data !== null)
                {
                    //console.log(this.state.Details)
                    const loadDetails = response.data;
                    const userDetail = loadDetails.UserDetails;
                    const userProduct = loadDetails.ProductDetails;
                    console.log(userProduct)

                     userDetail.map(id => {
                        if (id.Name === this.props.cenStateUserName) {
                            userInfo={
                                Name: id.Name,
                                Age: id.Age,
                                Address: id.Address,
                                Contact: id.Contact
                            }
                        }

                    })

                    userProduct.map(id => 
                    {
                        if (id.Name === this.props.cenStateUserName) 
                        {
                            console.log("start" + id.Name);
                            products.push ({
                                Name: id.Name,
                                ProductName: id.ProductName,
                                ProductN0: id.ProductN0,
                                ExpiryDate: id.ExpiryDate
                            })
                        }
                        else{
                            return null;
                        }
                    })
                }
                this.setState({userProducts: products});
                this.setState({userDetails: userInfo});
            })
    }

render() {
    console.log("render" + this.state.userProducts)
    console.log("render" + this.state.userDetails)

    const prd=this.state.userProducts.map(id=>(
        <p  key={id+id.ProductName}>{id.ProductName}</p>));
    return (
        <Aux>
            <Header isDashboard='true' isUserProfile='true' />
            <div className={classes.Dashboard}>
                <p>Into the Dashboard </p>
                 {prd}
            </div>
        </Aux>)
}
}

const mapStateToProps=state=>{
    return{
        cenStateUserName:state.userName
    };
}

export default connect(mapStateToProps)(Dashboard);