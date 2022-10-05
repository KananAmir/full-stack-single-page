import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/about-page'
import AddUser from '../pages/add-user'
import HomePage from '../pages/home'
import UsersPage from '../pages/users-page'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/users' element={<UsersPage />}/>
            <Route path='/add-user' element={<AddUser />}/>
        </Routes>
    </div>
  )
}

export default Routing