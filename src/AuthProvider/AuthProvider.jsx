
import {  createContext } from "react";
import PropTypes from 'prop-types';

// 1st authcontext make

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    // second process
    const authInfo = {name: 'shanto'}

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes ={
    children: PropTypes.node
}
/**
 * 1.create context it and export it
 * 2.set provider with value
 * 3.use the auth provider in the main.jsx file
 * 4.access children in the AuthProvider component as children and use it in the middle of the provider
 * 5.react prop types install and import  
 * */ 