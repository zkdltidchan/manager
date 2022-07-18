import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthState } from '../context';

const PrivateRoute = ({ children }) => {
    const userState = useAuthState();
    return userState.token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
