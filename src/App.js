import React from 'react'
import Header from './Header/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Overview from './Overview/Overview'
import Visit from './Visit/Visit'
import Halls from './Halls/Halls'
import Programs from './Programs/Programs'
import Virtual from './VirtualTour/Virtual'
import SignUp from './SignUp/SignUp'
import Book from './BookTicket/Book'
// import New_Header from './Header/New_Header'



function App() {
  return (
    <>
        <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/home' element={<Home/>}  />
            <Route path='/overview' element={<Overview />} />
            <Route path='/visit' element={<Visit />} />
            <Route path='/halls' element={<Halls />} />
            <Route path='/programs_and_events' element={<Programs />} />
            <Route path='/virtual_tour_guide' element={<Virtual />} />
            <Route path='/sign_in' element={<SignUp />} />
            <Route path='/book_ticket' element={<Book />} />
          </Routes>
        </Router>
    </>
  )
}

export default App