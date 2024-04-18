import React from "react";

import { useNavigate } from "react-router-dom";

function LogIn(){
    const navigate = useNavigate();
    return(
        <div className='bg-[#141111f5] h-full w-full'>
            <div className='flex flex-row justify-between'>
            <div>
            <h1 className='text-4xl font-semibold flex items-center px-[12px] py-[8px]'><span className='text-transparent bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text'>GCUBE</span>
            </h1>
            </div>
        </div>
            <div className="flex justify-center items-start pt-7">
                <form className="border-solid border-[2px] p-4">
                    <h1 className="text-5xl text-white text-center">LOGIN</h1>
                    
                    <span>dont have an account </span><span onClick={()=>{navigate('/signup')}}>Signup</span>
                </form>
                
            </div>
            
        </div>
    );
}

export default LogIn