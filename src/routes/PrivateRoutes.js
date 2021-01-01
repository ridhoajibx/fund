import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ comp:Component, child: Children, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => auth.isLoggedin ?
                (<Component {...props} auth={auth} >
                    <Children />
                </Component>) :
                (<Redirect to={{ pathname:'/' }} />)
            }
        />
    );
}

export default PrivateRoutes;
