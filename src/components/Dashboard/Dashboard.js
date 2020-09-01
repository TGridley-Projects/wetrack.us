import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Mainview from './Views/Mainview';
// import Otherdisplay from './Displays/Otherdisplay';

const Dashboard=function(props){
   


    return(
        <div className='dashboard'>
            <Header/>
            <h1>Dashboard</h1>
            <section className="mainDisplayed">
                <Mainview/>
            </section>
            <section className="otherDisplayed">
                {/* <Otherdisplay/> */}
            </section>
        </div>
    );
};

export default Dashboard;