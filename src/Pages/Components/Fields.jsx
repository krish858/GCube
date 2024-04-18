import React from "react";
import { useState } from "react";

function Fields(props){
    const [vis,Setvis] = useState("Password");
    const [isvis,Setisvis] = useState(false);
    const [state,Setstate] = useState(<ion-icon name="eye-outline"></ion-icon>);
    function changevis(){
        if(isvis==false){
            Setvis("text");
            Setisvis(true);
            Setstate(<ion-icon name="eye-off-outline"></ion-icon>);
            return 0;
        }
        if(isvis==true){
            Setvis("Password");
            Setisvis(false);
            Setstate(<ion-icon name="eye-outline"></ion-icon>);
            return 0;
        }
    }        
    return(
        <div className="text-white mt-3 m-4">
            <div className="flex flex-col ">
            <div className="w-[100%] pb-0 border-b-2 mb-[18px]"><input type="text" className="outline-none bg-[#14111100] pl-2 " placeholder="Username"/></div>
            <div className="w-[100%] pb-0 border-b-2"><input type={vis} className="outline-none bg-[#14111100] pl-2" placeholder="Password"/><span onClick={()=>{changevis()}} className="cursor-pointer">{state}</span></div>
            </div>
            <div className="flex justify-around items-center mt-6"><span className=" text-xl"><ion-icon name="logo-google"></ion-icon></span><span className="text-xl"><ion-icon name="logo-apple"></ion-icon></span><span className="text-xl"><ion-icon name="logo-discord"></ion-icon></span></div>
            <div className="flex justify-center text-xl mt-4"><button className=" border-2 rounded-xl pt-1 pb-1 p-2" type="button">{props.is}</button></div>
        </div>
    );
}

export default Fields