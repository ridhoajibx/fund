import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ comp:Component, child: Children, setAuth, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => auth ?
                (<Component {...props} setAuth={ setAuth } >
                    <Children />
                </Component>) :
                (<Redirect to={{ pathname:'/' }} />)
            }
        />
    );
}

export default PrivateRoutes;
