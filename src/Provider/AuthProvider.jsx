import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUserWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(Auth, googleProvider);
  };

  const updateUser = (name, photoUrl) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const logout = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return unSubscribe;
  }, []);
  const authInfo = {
    googleLogin,
    createUserWithEmailPassword,
    signInWithEmailPassword,
    user,
    logout,
    loading,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
