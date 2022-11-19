import React from "react";
import { useAuth, useAuthUpdate } from "../contexts/AuthContext";
import Login from "./Login"
import Profile from "./Profile"

export default function Test() {
  const { darkTheme, user } = useAuth()
  const toggleTheme = useAuthUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (<>
    <div style={themeStyles}>
      <h1>Kansha Game</h1>
      {user ? <Profile /> : <Login />}
      <br />
      <br />
      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  </>
  );
}

