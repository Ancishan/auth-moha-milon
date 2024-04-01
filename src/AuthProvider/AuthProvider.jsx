import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {  createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

// 1st authcontext make
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // thrid
    const[user, setUser] = useState(null);


    // fourth process
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // same log in 
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // second process
    const authInfo = { user ,createUser, signInUser }

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