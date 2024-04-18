import React from 'react'
import { useNavigate } from 'react-router-dom';
function Explore(){
    const  navigate = useNavigate()
    return(
    <>  
    <div className='bg-[#141111f5] h-full w-full'>
        <div className='flex flex-row justify-between'>
        <div>
        <h1 className='text-4xl font-semibold flex items-center px-[12px] py-[8px]'><span onClick={()=>{navigate("/")}} className='text-transparent cursor-pointer bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text'>GCUBE</span>
        </h1>
        </div>
        <div className='flex items-center text-white'>
            <span onClick={()=>{navigate('/')}} className='text-2xl hover:text-blue-600 mr-[15px] cursor-pointer flex items-center'><ion-icon name="home-outline"></ion-icon>Home</span>
            <span className='text-2xl text-pink-500 mr-[15px] flex items-center'><ion-icon name="compass-outline"></ion-icon>Explore</span>
            <span onClick={()=>{navigate('/login')}} className='text-2xl hover:text-blue-600 mr-[25px] cursor-pointer flex items-center'><ion-icon name="log-in-outline"></ion-icon>Login</span>
        </div>
        </div>
    </div>
    </>
    );
}
export default Explore