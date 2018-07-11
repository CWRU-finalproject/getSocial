import React, { Component } from 'react';
import './App.css';
import CreateEventComponent from "./components/CreateEventComponent/CreateEventComponent.js";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent.js";
import EventContainerComponent from "./components/EventContainerComponent/EventContainerComponent.js";
import LoginComponent from "./components/LoginComponent/LoginComponent.js";

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
    	
      <div className="App">
      <Router>

        <div className="container">

          <h1> get Social </h1>
          
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
