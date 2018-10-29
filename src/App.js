import React, { Component } from 'react';
//Switch is used for only one route at a time
import {Route,Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/Dashboard"  component={Dashboard}/> 
          <Route path="/" exact component={Login}/> 
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

