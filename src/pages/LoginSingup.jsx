import React, { useState } from "react";
import { auth, db } from "../firbase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom"

const LoginSingup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSign = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      const userObj = {
        name: name,
        uid: user.user.uid,
        email: user.user.email,
        role : "user"
      };
      console.log(userObj);
      const userRefrence = collection(db, "userDetails");
      addDoc(userRefrence, userObj);
      console.log(userObj);
      localStorage.setItem("userDetails" , JSON.stringify(userObj));
      console.log("completed");
      alert("sign up successfully");
      navigate("/login")
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      alert("failed");
    }

    

  };
  return (
    <div className="w-full h-full pb-[100px] bg-[#fce3fe] pt-[100px]">
      <div
        className="w-[580px] h-[600px]
      bg-white m-auto py-[40px] px-[60px]"
      >
        <h1 className=" text-4xl font-semibold my-[20px]">Sign Up</h1>
        <div className="flex flex-col gap-[30px] mt-[30px]">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-md"
          />
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-md"
          />
          <input
            type="password"
            name=""
            id="pass"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg rounded-md"
          />
        </div>
        <button
          onClick={handleSign}
          className="w-[450px] h-[42px] text-white bg-[#ff4141] mt-[30px] border-none text-2xl font-medium   rounded-md cursor-pointer"
        >
          Contiune
        </button>
        <p className="mt-[20px] text-[#5c5c5c] text-lg font-medium">
          Already have an account ?{" "}
          <span className="text-[#ff4141] font-semibold"><Link to={"/login"} >Login Here</Link></span>{" "}
        </p>
        <div className="flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[16px] font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
