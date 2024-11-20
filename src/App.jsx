import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import About from './Pages/About'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'
import CreateListing from './Pages/CreateListing'
import UpdateListing from './Pages/UpdateListing'
import Listing from './Pages/Listing'
import Search from './Pages/Search'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
        
          
          <Route path='/listing/:listingId' element={<Listing />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/create-listing" element={<CreateListing />}></Route>
            <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
            
          </Route>
          



        </Routes>

      </BrowserRouter>
    </>
  )
}



