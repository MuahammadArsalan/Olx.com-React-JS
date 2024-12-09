import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'

const Layout = () => {
  return (
<>
<Navbar></Navbar>
<Outlet/>

</>  )
}

export default Layout