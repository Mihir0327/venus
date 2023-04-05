import React, { useEffect, useState } from "react";
import axios from "axios";

const LoginPage = () => {

const [email,setEmail] = useState('')
const [password,setpass] = useState('')


const handleLogin = async (e) => {
  e.preventDefault();
  try {
    console.log("Before res")

      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/vlogin`,{email,password});
      console.log("after res",res.data.success,res.data.message)
      if(res.data.success){
        // setAlert(<Alertt variant="success"/>)
        console.log("login");
        
        alert(res.data.message);
        
      }else{
        alert(res.data.message);
        // setAlert(<Alertt variant="danger"/>)
        console.log(res.data.success,res.data.message)
      
    }
  } catch (error) {
    console.log("error in front end")
    
  }
}





  return (
    <>
      <div>
        <div className=" flex ">
          <div className="flex-col mt-32 flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
            <h1 className="font-bold text-2xl my-10 text-black"> Login </h1>
            <form  className="mt-2 flex flex-col lg:w-[40%] w-8/12">
              <div className="flex flex-wrap  w-full mb-2 relative h-15 bg-white  rounded  pr-10">
                <div className="flex -mr-px justify-center w-15 p-4">
                  <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                    <i className="fas fa-user-circle"></i>
                  </span>
                </div>

                <input
                  type="text"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="flex-shrink flex-grow  leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                  placeholder="Enter Email"
                />
              </div>
              <div className="flex flex-wrap  w-full relative h-15 bg-white  rounded mb-4">
                <div className="flex -mr-px justify-center w-15 p-4">
                  <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>

                <input
                  type="password"
                  onChange={(e)=>setpass(e.target.value)}
                  className="flex-shrink flex-grow  leading-normal w-px  border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                  placeholder="Password"
                />
                {/* <div className="flex -mr-px">
                  <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                    <i className="fas fa-eye-slash"></i>
                  </span>
                </div> */}
              </div>
              <a
                href="/signin"
                className="text-base text-black text-right font-roboto leading-normal hover:underline mb-6"
              >
                sign In ?
              </a>
              <a
                href=""
                onClick={handleLogin}
                className="bg-blue-400 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-2 mb-20"
              >
                Login
              </a>
            </form>
            {/* {alert && alert} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
