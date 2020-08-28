import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';

export default (
    <Switch> 
        <Route exact path = '/' component = {Auth} />;
        <Route path = '/register' component = {Register} />
        <Route path = '/dashboard' component = {Dashboard} />
    </Switch>
);