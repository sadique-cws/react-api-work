import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from './components/SignUp'
import Login from './components/Login'
import HomePage from './components/HomePage'
import ManageSubjects from './components/ManageSubjects'
import ManageSkills from './components/ManageSkills'
import SearchPinCode from './components/SearchPinCode'

const App = () => {
  return (

    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/subject' element={<ManageSubjects />} />
      <Route path='/skills' element={<ManageSkills />} />
      <Route path='/pincode' element={<SearchPinCode />} />
    </Routes>

  )
}

export default App