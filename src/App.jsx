import { useState } from 'react'
import './App.css'
import Header from './header'
import Explore from './Explore'
import ComponentMain from './Component/ComponentMain'

function App() {

  return (
    <>
    <div className='bg-black '>
    <Header/>
    <Explore/>
    <ComponentMain />
    </div>
    </>
  )
}

export default App
