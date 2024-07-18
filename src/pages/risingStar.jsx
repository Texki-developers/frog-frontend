import React from 'react';
import { useNavigate } from 'react-router';
import {AuthApiService} from '../services/api-services'

export default function RisingStar() {
    const navigate= useNavigate()

    const createUser = async ()=>{
      await AuthApiService.postApi<any, any>('user/init', apiBody);
    }
  return (
    <div className='flex flex-col items-center p-4 h-svh w-full'>
        <div className='w-full h-full flex flex-col gap-16'>

  
      <div className='w-full '>
      
        <div className='flex justify-center pt-4'>
          <div className='w-1/2 h-1 bg-blue-500'></div>
          <div className='w-1/2 h-1 bg-gray-200'></div>
        </div>
        <div className='flex flex-col items-center pt-10 h-full'>
            <div className='flex flex-col gap-4 items-center'>
            <h2 className='text-2xl font-semibold'>Rising star!</h2>
          <p className='text-gray-500'>You have joined Telegram</p>
            </div>

        </div>
      
      </div>

      <div className='flex flex-col items-center h-full '>
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-[3rem]'>3</h1>
            <h2 className='text-[2rem]'>Year ago</h2>
        </div>
          <div className='flex mt-8 space-x-2'>
            <span role="img" aria-label="star" className='text-yellow-400 text-4xl'>⭐</span>
            <span role="img" aria-label="star" className='text-yellow-400 text-4xl'>⭐</span>
            <span role="img" aria-label="star" className='text-yellow-400 text-4xl'>⭐</span>
            <span role="img" aria-label="star" className='text-yellow-400 text-4xl'>⭐</span>
            <span role="img" aria-label="star" className='text-yellow-400 text-4xl'>⭐</span>
            <span role="img" aria-label="star" className='text-yellow-400 text-4xl'>⭐</span>
          </div>
          </div>
          </div>
      <button onClick={()=>{navigate('/amazing')}} className="btn-common btn-solid w-full">Wow, Let's go</button>
    </div>
  );
}
