import React from "react";
import { useAuth, useAuthUpdate } from "../contexts/AuthContext";

export default function Profile() {
  const { darkTheme, user, logout } = useAuth()
  const toggleTheme = useAuthUpdate()

  return (<>
    <h2>{user?.username} is logged in</h2>
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  </>)
}

