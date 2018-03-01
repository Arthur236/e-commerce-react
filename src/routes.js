import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Authenticate from './components/common/Authenticate';
import Navigation from "./components/common/Navigation";
import Home from './components/home/Home';
import RegisterUser from './components/register/RegisterUser';
import RegisterMerchant from './components/register/RegisterMerchant';
import Login from "./components/login/Login";

export default (
    <div>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={RegisterUser}/>
            <Route exact path="/merchant/register" component={RegisterMerchant}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </div>
);
