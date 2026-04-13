import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import MainPage from "./FirstPage/MainPage.jsx"
import RetroPage from "./SecondPage/RetroPage.jsx"
import './App.css'
import Contact from './components/Contact.jsx'
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Contact/>
    </>
  )
}
 
export default App