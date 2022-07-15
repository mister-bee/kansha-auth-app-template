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
