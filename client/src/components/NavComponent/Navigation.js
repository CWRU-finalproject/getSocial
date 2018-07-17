import React from 'react';
import "./Navigation.css";

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}


class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" id="navBG">
        <a className="navbar-brand" href="#"><h1 id="title"> getSocial </h1></a>


        <div>
          <ul className="navbar-nav navbar-right" id="navLinks">
            <NavItem className="navbar-right" path="#" name="Log-In" />
            <NavItem className="navbar-right" path="#" name="Log-Out" />

          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;