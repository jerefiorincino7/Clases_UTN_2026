import React from 'react'
import "./Components/Css/Global.css"
import PostsList from './Components/PostsList/PostsList'
import Counter from './Components/Counter/Counter'
import LoginForm from './Components/LoginForm/LoginForm'
import { Route, Routes } from 'react-router'
import HomseScreen from './Screens/HomseScreen/HomseScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomseScreen/>}/>
        <Route path='/login' element={<LoginScreen/>} />
      </Routes>
    </div>
  )
}

