import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';


const PrivateRoute = ({ component: Component, ...rest }) => {

  const checkAuthenticated = useSelector((state) => state.signin.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
