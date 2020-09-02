import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Mainview from './Views/Mainview';
import Otherview from './Views/Otherview';

const Dashboard=function(props){
   


    return(
        <div className='dashboard'>
            <Header/>
            <h1>RECENT POSTS</h1>
            <section className="mainDisplayed">
                <Mainview/>
            </section>
            <section className="otherDisplayed">
                <Otherview/>
            </section>
        </div>
    );
};

export default Dashboard;