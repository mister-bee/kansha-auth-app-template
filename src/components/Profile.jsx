import React, { useContext } from 'react'
// import { LoginContext } from '../contexts/LoginContext'
import { ThemeContext } from "../contexts/ThemeContext";


function Profile() {
  const { userName } = useContext(ThemeContext)
  return (<>
    <h1>----Profile----</h1>
    <h2>Username: {userName}</h2>
  </>)
}

export default Profile
