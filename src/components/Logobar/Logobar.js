import React from 'react';
import logo from "../Assets/wtu1logo.png";
import './Logobar.css';

const Logobar = () => {
    return (
        <div className="logoBar">
         <img className="startLogo" src={logo} alt="logo"/>
        </div>
    )
}

export default Logobar