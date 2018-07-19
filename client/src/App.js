import React, { Component } from 'react';
import './App.css';
import bg from "./images/concrete_wall_2.png";
import CreateEventComponent from "./components/CreateEventComponent/CreateEventComponent.js";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent.js";
import EventContainerComponent from "./components/EventContainerComponent/EventContainerComponent.js";
import LoginComponent from "./components/LoginComponent/LoginComponent.js";

import UserProfileComponent from "./components/UserProfileComponent/UserProfileComponent.js";
import Navigation from "./components/NavComponent/Navigation.js";


import { Navbar, Button } from 'react-bootstrap';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

import { 
  BrowserRouter as Router,
  Route,
  //Link,
  Switch
 // Redirect
} from 'react-router-dom';
const auth = new Auth();



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
    const { isAuthenticated } = this.props.auth;

    return (
      


      <div className="App">
      
      <div>
        <Navbar fluid>
          <Navbar.Header>
            
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'login')}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
            
          </Navbar.Header>
        </Navbar>
        </div>
        
      

      </div>
      
      

    );
  }
}

export default App;
