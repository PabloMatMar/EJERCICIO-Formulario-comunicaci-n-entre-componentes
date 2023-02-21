import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../../context/userContext';

class Nav extends Component {
  render() {
    return <div><nav>
      <Link to="/">Home</Link>
      <Link to="/DataForm">Data</Link>
      <Link to="/Form">Form</Link>
    </nav>
    <userContext.Consumer>
        {({ logout, user }) => user.username ?
          <span>Hello, {user.username}!
          <button variant="contained" size="small" onClick={logout}>Logout</button></span>
          : ""
        }
      </userContext.Consumer>
    </div>;
  }
}

export default Nav;
