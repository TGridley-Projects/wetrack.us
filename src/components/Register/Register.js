import React, { Component } from 'react';
import Axios from 'axios';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';
import { addUser } from '../../redux/Reducers/AuthReducer';
import './Register.css';
import Logobar from "../Logobar/Logobar"

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            profile_pic: '',
            phone_number: '',
            email: '',
            pictures: [],
        }

        this.onDrop = this.onDrop.bind(this);
        this.uploadImages = this.uploadImages.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    uploadImages(){
        const uploadPromises = this.state.pictures.map(image => {
            const data = new FormData();
            data.append('image', image, image.name);
            return Axios.post('/auth/uploadImage', data)
        })
        Axios.all(uploadPromises)
        .then(res => {this.setState({profile_pic: res[0].data}); alert("Picture upload successful")})
        .catch( err => console.log(err))
    }
    
    register = () => {
        const { username, password, profile_pic,  phone_number, email } = this.state;
        Axios.post('/auth/register', { username, password, profile_pic, phone_number, email })
        .then((res) => {
            const {username, profile_pic, phone_number, email} = res.data
        this.props.addUser(username, profile_pic, phone_number, email);
        this.props.history.push("/dashboard");
        })
        .catch((err) => {
            console.log(err);
            alert('Registration Failed');
        });
    };

    render(){
        const { username, password, phone_number, email } = this.state
    return(
        <div className='register'>
             <Logobar/>
             <section className="registrationBox">
            <h1>Registration</h1>
            <p>Username</p>
            <input onChange={(e) => this.handleChange(e)} name='username' type='text' value={username} required/>
            <p>Password</p>
            <input onChange={(e) => this.handleChange(e)} name='password' type='password' value={password} required/>
            <p>Profile Picture</p>
            <ImageUploader
                withIcon={false}
                withPreview={true}
                singleImage={true}
                buttonText='Select image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png', '.gif', '.jpeg']}
                maxFileSize={5242880}
            />

            <button onClick={this.uploadImages}>Upload Image</button>
            <p>Phone Number</p>
            <input onChange={(e) => this.handleChange(e)} name='phone_number' type='integer' value={phone_number}/>
            <p>Email</p>
            <input onChange={(e) => this.handleChange(e)} name='email' type='email' value={email}/>
            <section className="registrationButtons">
            <button onClick={(e) => {this.register(e)}}>Register</button>
            <button onClick={(e) => {this.props.history.push('/')}}>Login</button>
            </section>
            </section>
        </div>
    );
};
}

export default connect(null, { addUser })(Register);