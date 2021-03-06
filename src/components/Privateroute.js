import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({children} ) => {
    const auth = localStorage.getItem("token")
    return auth ? children : <Navigate to="/login" />;
  };

export default PrivateRoute;