import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import RegisterUser from './components/register/RegisterUser';
import RegisterMerchant from './components/register/RegisterMerchant';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={RegisterUser}/>
        <Route exact path="/merchant/register" component={RegisterMerchant}/>
    </Switch>
);
