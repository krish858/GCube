import React from "react"
import { Routes,Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Explore from "./Pages/Explore"
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App