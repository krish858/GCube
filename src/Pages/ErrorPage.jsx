import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#141111f5] h-full w-full'>
        <div> 
        <h1 className='text-4xl font-semibold flex items-center px-[12px] py-[8px]'><span onClick={()=>{navigate("/")}} className='text-transparent cursor-pointer bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text'>GCUBE</span></h1> 
        </div>
        <div className='flex flex-col justify-center items-center pt-[130px]'>
        <div><h1 className='text-8xl font-semibold flex items-center px-[12px] py-[8px]'><span className='text-transparent bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text'>Error 404</span></h1></div>
        <div><h1 className='text-4xl font-semibold flex items-center px-[12px] py-[8px]'><span className='text-transparent bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text'>Not Found</span></h1></div>
        </div>
    </div>
  );
}

export default ErrorPage




