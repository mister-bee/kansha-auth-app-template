import React, { useContext } from "react";
import { LoginContext } from '../contexts/LoginContext'

function Login() {
  const { setUsername, setPassword, setShowProfile } = useContext(LoginContext)
  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(event) => {
          setUsername(event.target.value);
        }
        }
      />
      <input
        type="text"
        placeholder="Password..."
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div>
        <button onClick={() => setShowProfile(true)}>Submit</button>
      </div>
    </div>
  );
}

export default Login;