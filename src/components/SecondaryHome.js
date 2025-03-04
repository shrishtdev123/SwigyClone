import React from 'react'
import RestHeader from './RestHeader'
import { Outlet } from 'react-router'

const SecondaryHome = () => {
  return (
    <div>
       <RestHeader/>
       <Outlet/>
    </div>
  )
}

export default SecondaryHome