import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoutes = ({ comp:Component, child: Children, setAuth, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => !auth ?
                (<Component {...props} setAuth={ setAuth } >
                    <Children setAuth={ setAuth } />
                </Component>) :
                (<Redirect to={{ pathname:'/' }} />)
            }
        />
    );
}

export default AuthRoutes;
