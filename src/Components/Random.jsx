import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from './Spinner';
import useGif from './useGif';

function Random() {

    const {gif,loading,fetchData} = useGif();
    
  return (
    <div className='w-1/2 mx-auto bg-green-500 flex flex-col gap-4 justify-center items-center p-5'>

        <h1 className='text-xl text-black font-semibold'> A Random Gif's </h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="Random Gif img" />)
        }
        <button className='w-[300px] h-8 p-2 bg-blue-400 hover:bg-blue-600 text-white text-center flex items-center justify-center' onClick={() => fetchData()}> Generated </button>

    </div>
  )
} 

export default Random

