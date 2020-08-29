import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Newmain from './components/Newmain/Newmain';
import Newother from './components/Newother/Newother';
import Singlepost from './components/Singlepost/Singlepost';
import Myprofile from './components/Myprofile/Myprofile';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search'


export default (
    <Switch> 
        <Route exact path = '/' component = {Auth} />;
        <Route path = '/register' component = {Register} />;
        <Route path = '/dashboard' component = {Dashboard} />;
        <Route path = '/newmain' component = {Newmain} />;
        <Route path = '/newother' component = {Newother} />;
        <Route path = '/singlepost' component = {Singlepost} />;
        <Route path = '/myprofile' component = {Myprofile} />;
        <Route path = '/profile' component = {Profile} />;
        <Route path = '/search' component = {Search} />;
    </Switch>
);