import React from 'react'
import Random from './Components/Random'
import Tag from './Components/Tag'
import './App.css'

function App() {
  return (
    <div className='w-[100vw] h-[150vh] background relative'>
      <h1 className='w-11/12 left-16 text-center absolute text-xl font-semibold text-black bg-white  mt-4 p-1'>Random Gif</h1>
      <div className='relative flex flex-col gap-9 py-[110px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App