import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LogIn(){
    const navigate = useNavigate();
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
    function handleLogin(email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed in:", user);
            navigate("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in:", errorCode, errorMessage);
            alert({
              header: "Error Signing In",
              message: errorMessage,
              buttons: ["OK"],
            });
          });
      }
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
                    <div className="text-white mt-3 m-4">
            <div className="flex flex-col ">
            <div className="w-[100%] pb-0 border-b-2 mb-[18px]"><input type="text" className="outline-none bg-[#14111100] pl-2 " placeholder="Email" /></div>
            <div className="w-[100%] pb-0 border-b-2"><input type={vis} className="outline-none bg-[#14111100] pl-2" placeholder="Password" /><span onClick={()=>{changevis()}} className="cursor-pointer">{state}</span></div>
            </div>
            <div className="flex justify-around items-center mt-6"><span className=" text-xl cursor-pointer"><ion-icon name="logo-google"></ion-icon></span><span className="text-xl cursor-pointer"><ion-icon name="logo-apple"></ion-icon></span><span className="text-xl cursor-pointer"><ion-icon name="logo-discord"></ion-icon></span></div>
            <div className="flex justify-center text-xl mt-4"><button className=" border-2 rounded-xl pt-1 pb-1 p-2" type="button" onClick={() => {
    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    handleLogin(email, password);}} >Log in</button></div>
        </div>
                    <div><span>Don't have an account, </span><span onClick={()=>{navigate('/signup')}} className=" cursor-pointer">SignUp</span></div>
                </form>
                
            </div>
            
        </div>
    );
}

export default LogIn