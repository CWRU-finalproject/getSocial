import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import CreateEventComponent from "./components/CreateEventComponent/CreateEventComponent.js";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent.js";
import EventContainerComponent from "./components/EventContainerComponent/EventContainerComponent.js";
import LoginComponent from "./components/LoginComponent/LoginComponent.js";
import Login from './components/LoginComponent/LoginComponent.js';
import bg from "./images/architecture-building-campus-356086.jpg";
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className="bg">

      <Router history={history}>
        <div className = 'container'>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/login" render={(props) => <Login auth={auth} {...props} />} />
          <Route path="/dashboard/createevent" render={(props) => <CreateEventComponent auth={auth} {...props} />} />
          <Route exact path="/dashboard" render={(props) => <EventContainerComponent auth={auth} {...props} />}/>
          <Route path="/signup" render={(props) => <CreateUserComponent auth={auth} {...props} />}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
      </div>
  );
}
