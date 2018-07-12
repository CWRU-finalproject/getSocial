import React, { Component } from 'react';
import './App.css';
import CreateEventComponent from "./components/CreateEventComponent/CreateEventComponent.js";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent.js";
import EventContainerComponent from "./components/EventContainerComponent/EventContainerComponent.js";
import LoginComponent from "./components/LoginComponent/LoginComponent.js";
import { Navbar, Button } from 'react-bootstrap';

import { 
  BrowserRouter as Router,
  Route,
  //Link,
  Switch
 // Redirect
} from 'react-router-dom';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    

    return (
    	
      <div className="App">
      
      <Router>

        <div className="container">

          <h1 id="title"> getSocial </h1>
          
          <hr /> 
          <br />

          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/dashboard/createevent" component={CreateEventComponent} />
            <Route path="/dashboard" component={EventContainerComponent}/>
            <Route path="/newuser" component={CreateUserComponent}/>
          </Switch>  

        </div>

      </Router>
      </div>
      

    );
  }
}

export default App;
