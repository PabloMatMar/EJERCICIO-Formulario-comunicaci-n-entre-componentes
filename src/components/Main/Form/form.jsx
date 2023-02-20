import React, { Component } from "react";
import { userContext } from '../../../context/userContext';

class Form extends Component {

  static contextType = userContext; 

  constructor(props) {
    super(props)
    this.username = React.createRef();
    this.email = React.createRef();
    this.url = React.createRef();
    this.age = React.createRef();

    this.state = {
      user: {
        user: "",
        email: "",
        url: "",
        age: 0
      }
    }
  }

  sendName = () => {
    // Consume contexto desde JS
    const { login } = this.context;
    // enviar objeto por contexto
    login(this.state.user);

    alert("send data!");

    //Vaciar inputs + state
    this.username.current.value = "";
    this.email.current.value = "";
    this.url.current.value = "";
    this.age.current.value = "";
    this.setState({ user: { user: "", email: "", url: "", age: "" } });
  }

  handleChange = () => {
    //Leer campos por referencias
    const username = this.username.current.value;
    const email = this.email.current.value;
    const url = this.url.current.value;
    const age = this.age.current.value;
    this.setState({ user: { username: username, email: email, url: url, age: age } });
  }



  render() {
    return <div>
      <form>
        <label htmlFor="name">Nombre:</label><br />
        <input type="text" ref={this.username} placeholder="Name user" /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="text" name="email" ref={this.email} placeholder="Email" /><br />

        <label htmlFor="url">URL image:</label><br />
        <input type="url" name="url" ref={this.url} placeholder="url imagen" /><br />

        <label htmlFor="age">Age:</label><br />
        <input type="number" name="age" ref={this.age} placeholder="your age whit numbers" onChange={this.handleChange} /><br />

        {this.state.user.username ? <button type="submit" onClick={this.sendName}>Login</button> : ""}
      </form>
    </div>;
  }
}

export default Form;
