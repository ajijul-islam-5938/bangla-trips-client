import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState([]);

    const googleLogin = ()=>{
        return signInWithPopup(Auth,googleProvider)
    }
    const logout = ()=>{
        return signOut(Auth)
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(Auth,(currentUser)=>{
            setUser(currentUser);
        })
        return unSubscribe
    },[])
  const authInfo = {
    googleLogin,
    user,
    logout

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
