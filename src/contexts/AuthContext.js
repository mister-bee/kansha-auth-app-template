import React, { createContext, useState, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const AuthContext = createContext();
const AuthUpdateContext = createContext();

export function useAuth() { return useContext(AuthContext) }
export function useAuthUpdate() { return useContext(AuthUpdateContext) }

export function AuthProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)
  const [user, setUser] = useState(null)

  const toggleTheme = () => { setDarkTheme(prevDarkTheme => !prevDarkTheme) }

  const checkLoginCredentials = ({ username, password }) => {
    // check firebase
    if (true) setUser({ username, password })
  }


  const logout = () => { setUser(null) }





  return (
    <AuthContext.Provider value={{ darkTheme, user, checkLoginCredentials, logout }}>
      <AuthUpdateContext.Provider value={toggleTheme}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
};


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_APP_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


// -- SATURDAY: DEAL with the MERGE!!

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {

      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const { user } = result;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("user", user);// add this to provider
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutWithGoogle = () => {
  signOut(auth).then(() => {
    localStorage.clear()
    console.log("Signout successfull")

  }).catch((error) => {
    console.log("Signout error", error)
  });
}


    // Sign-out successful.
    // localStorage.setItem("name", "");
    // localStorage.setItem("email", "");
    // localStorage.setItem("profilePic", "");
    // localStorage.setItem("user", "");