import React from 'react';
import {Route, Switch} from 'react-router'
import Auth from './Auth'
import {Home, PasswordReset, SignIn, SignUp} from './templates'

const Router =  () => {
    return (
        <Switch>
            <Route exact path={'/sign-in'} component={SignIn} />
            <Route exact path={'/sign-in/reset'} component={PasswordReset} />
            <Route exact path={'/sign-up'} component={SignUp} />
            <Auth>
                <Route exact path={'(/)?'} component={Home} />
            </Auth>
        </Switch>
    );
};

export default Router;
