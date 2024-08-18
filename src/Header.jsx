import React from 'react'
import "./movie.css"
const Header = () => {
  return (
    <div className='flex text ' >
        <h2 className='text-white'>Anonime</h2>
        <p>Home</p>
        <p>List anime</p>
        <input className='bg-none' type="text" placeholder='Search anime or movie' />
    </div>
  )
}

export default Header