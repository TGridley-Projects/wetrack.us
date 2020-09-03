import React from 'react';
import './Dashboard.css';
import Mainview from './Views/Mainview';
import Otherview from './Views/Otherview';

const Dashboard=function(props){

    return(
        <div className='dashboard'>
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