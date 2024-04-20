import React from "react";
import { useNavigate } from "react-router-dom";
import SidePanel from "./Components/SidePanel";
function Dashboard(){
    const navigate = useNavigate();

    return(
        <div className="bg-[#141111f5] text-white w-full h-full flex flex-row">
            <SidePanel/>
            <div className="bg-red-600 w-full h-full">b</div>
        </div>
    );    
}

export default Dashboard