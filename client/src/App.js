import React, { Component } from 'react';
import './App.css';
import CreateEventComponent from "./components/CreateEventComponent/CreateEventComponent.js";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent.js";
import EventContainerComponent from "./components/EventContainerComponent/EventContainerComponent.js";
import LoginComponent from "./components/LoginComponent/LoginComponent.js";
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

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

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
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
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
                    onClick={this.login.bind(this)}
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
      {/* <Router>

        <div className="container">

          <h1 id="title"> getSocial </h1>
          
          <hr /> 
          <br />

          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/dashboard/createevent" component={CreateEventComponent} />
            <Route path="/dashboard" component={EventContainerComponent}/>
            <Route path="/newuser" component={CreateUserComponent}/>
            <Route path="/callback" render={(props) => {
              debugger
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          </Switch>  

        </div>

      </Router> */}
      </div>
      

    );
  }
}

export default App;
