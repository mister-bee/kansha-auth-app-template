import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { signInWithGoogle } from "../contexts/Firebase";

export default function Login() {
  const { checkLoginCredentials } = useAuth()
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

      <br />

      <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
}

