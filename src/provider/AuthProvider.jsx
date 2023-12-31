import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitHubPovider = new GithubAuthProvider();


const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading, setLoading] = useState(true)
    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const LoginInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGitHub =()=>{
        return signInWithPopup(auth, gitHubPovider);
    }

    const updateUserProfile =(user,name, photoUrl)=>{
        return updateProfile(user,{
            displayName:name,
            photoURL:photoUrl

        })
    }

    const logOutUser = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        registerUser,
        logInUser,
        logOutUser,
        LoginInWithGoogle,
        loginWithGitHub,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;