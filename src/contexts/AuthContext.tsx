import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Resources/Firebase";

const UserContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState<any>();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const setUserProfileInformation = (name, photoURL) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, setUserProfileInformation }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
