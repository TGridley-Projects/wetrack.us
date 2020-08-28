import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { addUser } from '../../redux/Reducers/AuthReducer';
import './Register.css';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            profile_pic: '',
            phone_number: 5300000000,
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    
    register = () => {
        const { username, password, profile_pic, phone_number, email } = this.state;
        Axios.post('/auth/register', { username, password, profile_pic, phone_number, email })
        .then((res) => {
            this.props.addUser(res.data);
            this.props.history.push('/dashboard')
        })
        .catch((err) => {
            console.log(err);
            alert('Registration Failed');
        });
    };

    render(){
        const { username, password, profile_pic, phone_number, email } = this.state
    return(
        <div className='register'>
            <h1>Registration</h1>
            <p>Username</p>
            <input onChange={(e) => this.handleChange(e)} name='username' type='text' value={username}/>
            <p>Password</p>
            <input onChange={(e) => this.handleChange(e)} name='password' type='password' value={password}/>
            <p>Profile Picture</p>
            <input onChange={(e) => this.handleChange(e)} name='profile_pic' type='text' value={profile_pic}/>
            <p>Phone Number</p>
            <input onChange={(e) => this.handleChange(e)} name='phone_number' type='integer' value={phone_number}/>
            <p>Email</p>
            <input onChange={(e) => this.handleChange(e)} name='email' type='text' value={email}/>
            <button onClick={(e) => {this.register(e)}}>Register</button>
            <button onClick={(e) => {this.props.history.push('/')}}>Login</button>
        </div>
    );
};
}

export default connect(null, { addUser })(Register);