import React from 'react'
import Header from './Header/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Overview from './Overview/Overview'
import Visit from './Visit/Visit'
import Halls from './Halls/Halls'
import Programs from './Programs/Programs'
import Virtual from './VirtualTour/Virtual'
import Login from './SignUp/Login.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import ScrollToTop from './Components/ScrollToTop.jsx'

function App() {
  return (
    <>
        <Router>
        <Header/>
        <ScrollToTop/>
          <Routes>
            <Route index path='/' element={<Home/>}  />
            <Route path='/home' element={<Home/>}  />
            <Route path='/overview' element={<Overview />} />
            <Route path='/visit' element={<Visit />} />
            <Route path='/halls' element={<Halls />} />
            <Route path='/programs_and_events' element={<Programs />} />
            <Route path='/virtual_tour_guide' element={<Virtual />} />
            <Route path='/register' element={< Login />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </Router>
    </>
  )
}

export default App