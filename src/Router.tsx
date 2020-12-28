import React from 'react';
import {Route, Switch} from 'react-router'
import {Home, SignIn, SignUp} from './templates'

const Router =  () => {
    return (
        <Switch>
            <Route exact path={'/sign-in'} component={SignIn} />
            <Route exact path={'/sign-up'} component={SignUp} />
            <Route exact path={'(/)?'} component={Home} />
        </Switch>
    );
};

export default Router;
