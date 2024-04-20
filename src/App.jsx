import React from "react"
import { Routes,Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Explore from "./Pages/Explore"
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"
import Dashboard from "./Pages/Dasdboard"
import ErrorPage from "./Pages/ErrorPage"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        <Route path="/store" element/>
        <Route path="/direct/inbox" element/>
      </Routes>
    </>
  )
}

export default App