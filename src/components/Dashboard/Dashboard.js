import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';

const Dashboard=function(props){
    return(
        <div className='dashboard'>
            <Header/>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;