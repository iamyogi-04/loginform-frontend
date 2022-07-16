import React from 'react'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import UserState from './components/context/UserState'

const App = () => {
  
  return (
    <>
    
      <BrowserRouter>
        
        <UserState>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            

          </Routes>
        </UserState>
      </BrowserRouter>
    </>
  )
}

export default App