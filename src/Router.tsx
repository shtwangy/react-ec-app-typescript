import React from 'react';
import {Route, Switch} from 'react-router'
import {Home, SignIn} from './templates'
import {SignInContainer} from "./containers";

const Router =  () => {
    return (
        <Switch>
            <Route exact path={'/sign-in'} component={SignInContainer} />
            /* <Route exact path={'/sign-in'} component={SignIn} /> */
            <Route exact path={'(/)?'} component={Home} />
        </Switch>
    );
};

export default Router;
