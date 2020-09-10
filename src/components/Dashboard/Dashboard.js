import React from 'react';
import './Dashboard.css';
import Mainview from './Views/Mainview';
import Otherview from './Views/Otherview';
import { useSelector } from 'react-redux'; 

const Dashboard=function(props){

    const currentUser = useSelector(state => state.authReducer)

    return(
        <div className='dashboard'>
            <h1>welcome {currentUser.username}</h1>
            {console.log(currentUser)}
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