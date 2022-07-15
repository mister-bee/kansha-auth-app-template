import React from 'react'
import './App.css';
import { AuthProvider } from "./contexts/AuthContext";
import Main from "./components/Main"


export default function App() {

  return (<>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </>
  );
}





//     // <div className="App">
//     //   <LoginContext.Provider value={{ username, setUsername, setPassword, setShowProfile }}>
//     //     {showProfile ? <Profile /> : <Login />}
//     //   </LoginContext.Provider>
//     // </div>


//import Profile from "./components/Profile"
{/* <Profile /> */ }
{/* <button onClick={toggleTheme}>Push Me</button> */ }



// import { useState } from 'react'
// import './App.css';
// import { ThemeContext } from "./contexts/ThemeContext";
// import ChildComponent from "./components/ChildComponent"

// // import { LoginContext } from "./contexts/LoginContext";
// // import Login from "./components/Login"
// // import Profile from "./components/Profile"


// function App() {
//   // const [showProfile, setShowProfile] = useState(false)
//   // const [username, setUsername] = useState("")
//   // const [password, setPassword] = useState("")
//   const [darkTheme, setDarkTheme] = useState(true)

//   function toggleTheme() {
//     setDarkTheme(prevDarkTheme => !prevDarkTheme)
//   }


//   return (
//     // <div className="App">
//     //   <LoginContext.Provider value={{ username, setUsername, setPassword, setShowProfile }}>
//     //     {showProfile ? <Profile /> : <Login />}
//     //   </LoginContext.Provider>
//     // </div>


//     <ThemeContext.Provider value={darkTheme}>
//       <button onClick={toggleTheme}>Push Me</button>
//       <ChildComponent />
//     </ThemeContext.Provider>
//   );
// }