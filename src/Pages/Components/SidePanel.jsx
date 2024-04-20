import React from "react";
import { useNavigate } from "react-router-dom";
function SidePanel(){
    const navigate = useNavigate()

    return(
        <div className="flex flex-col items-center hover:text-pink  -400 justify-around text-4xl  w-[6%]">
                <div><span className=" border-blue-400 border-b-2 cursor-pointer hover:text-blue-400" onClick={()=>{navigate("/")}}><ion-icon name="person-circle-outline"></ion-icon></span></div>
                <div><span className=" border-blue-400 border-b-2 cursor-pointer hover:text-blue-400" onClick={()=>{navigate("/")}}><ion-icon name="bag-outline"></ion-icon></span></div>
                <div><span className=" border-blue-400 border-b-2 cursor-pointer hover:text-blue-400" onClick={()=>{navigate("/")}}><ion-icon name="library-outline"></ion-icon></span></div>
                <div><span className=" border-blue-400 border-b-2 cursor-pointer hover:text-blue-400" onClick={()=>{navigate("/")}}><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span></div>
                <div><span className=" border-blue-400 border-b-2 cursor-pointer hover:text-blue-400" onClick={()=>{navigate("/")}}><ion-icon name="settings-outline"></ion-icon></span></div>  
            </div>
    )
}

export default SidePanel