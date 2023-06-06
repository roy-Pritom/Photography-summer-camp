import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const authContext=createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
           setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }

    },[])


    // signUp
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }

    // googleLogin
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)

    }

    // logOut
    const logOut=()=>{
        return signOut(auth)

    }

    const authInfo = {
        user,
        createUser,
        logIn,
        loading,
        logOut,
        googleLogin



    }
    return (
        <authContext.Provider value={authInfo}>
              {children}
        </authContext.Provider>
    );
};

export default AuthProvider;