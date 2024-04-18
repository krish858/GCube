import React from "react";
import Fields from "./Components/Fields";
import { useNavigate } from "react-router-dom";

function LogIn(){
    const navigate = useNavigate();
    return(
        <div className='bg-[#141111f5] h-full w-full'>
            <div className='flex flex-row justify-between'>
            <div>
            <h1 className='text-4xl font-semibold flex items-center px-[12px] py-[8px]'><span onClick={()=>{navigate("/")}} className='text-transparent cursor-pointer bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text'>GCUBE</span>
            </h1>
            </div>
        </div>
            <div className="flex justify-center text-white items-center pt-7 ">
                <form className="flex flex-col justify-center items-center p-14 rounded-lg  shadow-blue-400 shadow-lg translate-y-14 -translate-x-0">
                    <h1 className="text-5xl mb-10 pl-16 pr-16  pb-0 text-white text-center">LOGIN</h1>
                    <Fields is='Login'/>
                    <div><span>Don't have an account, </span><span onClick={()=>{navigate('/signup')}} className=" cursor-pointer">SignUp</span></div>
                </form>
                
            </div>
            
        </div>
    );
}

export default LogIn