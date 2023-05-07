import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/allComponents.scss'

export const Nav = () => {
  return (
    <div className='nav'>
        <Link className='link' to='/sorted-data'>sort</Link>
        <Link className='link' to='/pagination-data'>pagination</Link>

    </div>
  )
}
