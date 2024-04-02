import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

// 1st authcontext make
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    // thrid
    const[user, setUser] = useState(null);
    const[loading,  setLoading] = useState(true)


    // fourth process
    const createUser = (email, password) =>{
       setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // same log in  1st step
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signIN with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    } 


    // sign out
     const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
     }

    // observe auth state change
    useEffect(() =>{

      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observing current user inside ', currentUser)
            setLoading(false);
        });
        return () =>{
            unSubscribe()
        }

    },[])

    // second process
    const authInfo = { user ,
        loading,
        createUser,
         signInUser,
         signInWithGoogle,
         LogOut }

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