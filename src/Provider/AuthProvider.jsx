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
import useAxios from "../Hooks/useAxios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { axiosSecure } = useAxios();

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

      if (currentUser) {
        axiosSecure.post("/jwt", {email : currentUser.email}).then(res => {
          if (res.data) {
            localStorage.setItem("token", res.data);
          }
        });
      } else {
        localStorage.removeItem("token");
      }

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
