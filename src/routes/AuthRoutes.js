import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoutes = ({ comp:Component, child: Children, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => !auth.isLoggedin ?
                (<Component {...props} >
                    <Children />
                </Component>) :
                (<Redirect to={{ pathname:'/' }} />)
            }
        />
    );
}

export default AuthRoutes;
