import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addUser } from "../../redux/Reducers/AuthReducer";
import "./Auth.css";
import Logobar from "../Logobar/Logobar"

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profile_pic: "",
      phone_number:"",
      email:""
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        const {username, profile_pic, phone_number, email} = res.data
        this.props.addUser(username, profile_pic, phone_number, email);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Incorrect Username or Password");
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="loginPage">
        <Logobar/>
        <section className="loginBox">
          <h1>Please login.</h1>
          <br/>
          <h3>If you don't already have an account please register.</h3>
          <br/>
          <p>Username:</p>
          <input
            onChange={(e) => this.changeHandler(e)}
            name="username"
            type="text"
            value={username}
          />
          <br/>
          <p>Password:</p>
          <input
            onChange={(e) => this.changeHandler(e)}
            name="password"
            type="password"
            value={password}
          />
        </section>
        <section className="authButtons">
          <button className="buttonShared" onClick={this.login}>Login</button>
          <button className="buttonShared" onClick={(e) => {this.props.history.push('/register')}}>Register</button>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { addUser })(Auth);
