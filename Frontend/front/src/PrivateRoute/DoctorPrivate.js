import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminAuthService from '../Services/adminAuthService';
import DoctorAuthServiec from '../Services/DoctorAuthServiec';

const DPrivateRoute=({ children }) =>{
   const user =DoctorAuthServiec.getCurrentUser();
    return user?children:<Navigate to="/unauthorize" />;
   };

export default DPrivateRoute;