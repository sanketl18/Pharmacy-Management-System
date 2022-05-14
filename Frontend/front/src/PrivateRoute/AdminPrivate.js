import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminAuthService from '../Services/adminAuthService';

const PrivateRoute=({ children }) =>{
   const user =AdminAuthService.getCurrentUser();
    return user?children:<Navigate to="/unauthorize" />;
   };

export default PrivateRoute;