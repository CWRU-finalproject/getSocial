import React, { Component } from 'react';
import './App.css';
import bg from "./images/architecture-building-campus-356086.jpg";
import CreateEventComponent from "./components/CreateEventComponent/CreateEventComponent.js";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent.js";
import EventContainerComponent from "./components/EventContainerComponent/EventContainerComponent.js";
import LoginComponent from "./components/LoginComponent/LoginComponent.js";
import UserProfileComponent from "./components/UserProfileComponent/UserProfileComponent.js";
import Navigation from "./components/NavComponent/Navigation.js";

import { 
  BrowserRouter as Router,
  Route,
  //Link,
  Switch
 // Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <div style={{backgroundImage: `url(${bg})`}} className="bg">

      <div className="App">
      <Router>

        <div className="container">
        <Navigation />
          
          <br />

          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/dashboard/createevent" component={CreateEventComponent} />
            <Route path="/dashboard" component={EventContainerComponent}/>
            <Route path="/userprofile" component={UserProfileComponent} />
            <Route path="/newuser" component={CreateUserComponent}/>
          </Switch> 

        
        </div>

      </Router>
      </div>
      </div>

    );
  }
}

export default App;
