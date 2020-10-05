import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Proptypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

        localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route {...rest}
            component={ (props) => (
                isAuthenticated
                ? <Component { ...props} />
                : <Redirect to='/login' />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired
}
