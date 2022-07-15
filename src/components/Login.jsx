import React, { useState } from "react";
import { useAuth, useAuthUpdate } from "../contexts/AuthContext";

export default function Login() {
  const { darkTheme, user, checkLoginCredentials } = useAuth()
  const toggleTheme = useAuthUpdate()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const submitCredentials = () => {
    console.log("usernameInput===>", username)
    console.log("passwordInput===>", password)
    checkLoginCredentials({ username, password })
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => { setUsername(event.target.value) }}
      />

      <input
        type="text"
        placeholder="Password..."
        onChange={(event) => { setPassword(event.target.value) }}
      />

      <div>
        <button onClick={submitCredentials}>Submit</button>
      </div>
    </div>
  );
}

