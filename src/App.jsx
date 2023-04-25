// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Login from './components/Login';
import Profile from "./components/Profile"
import ModeButton from './components/Mode';

function App() {

  return (
    <>
      <Profile/>
      <Login />
      <ModeButton/>
    </>
  )
}

export default App;
