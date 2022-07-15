import React, { createContext, useState, useContext } from "react";

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



