import React, { Component } from 'react';
import './App.css';
import CreateEventComponent from "./components/CreateEventComponent/CreateEventComponent.js";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent.js";



class App extends Component {
  render() {
    return (
    	
    <div>
	      <CreateEventComponent />

	      <CreateUserComponent />
     </div>

    );
  }
}

export default App;
