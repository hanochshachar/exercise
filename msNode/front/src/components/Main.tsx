import React from 'react'
import { Nav } from './Nav'
import { Outlet } from 'react-router-dom';
import '../styles/allComponents.scss'

export const Main = () => {
  return (
    <div>
        <h1 className='title' >node challenge</h1>
        <Nav/>
        <Outlet/>
    </div>
  )
}
