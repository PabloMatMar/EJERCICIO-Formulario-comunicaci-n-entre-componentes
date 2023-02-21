import React, { Component } from "react";
import { userContext } from '../../../context/userContext';

class Card extends Component {
  render() {
    return <div>
      <h4>Datos Usuario logeado:</h4>

      <userContext.Consumer>
        {({ user }) => user.username ? 
        <span>
          <p>Edad:{user.username}</p>
          <p>Email:{user.email}</p>
          <img src={user.url}></img>
          <p>Edad:{user.age}</p>
          </span>
          : <p>No hay usuario logeado.</p>
        }
      </userContext.Consumer>
    </div>;
  }
}

export default Card;
