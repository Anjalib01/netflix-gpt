import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };

  return (
    <div className="w-full">
      <Header />
      <div>
        <img
          className=" absolute brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a92ac6d9-e542-40d5-9bb1-bb7291e4de86/web/IN-en-20251117-TRIFECTA-perspective_9fe28c81-2209-4e08-b8bd-98cfa9f97a8f_large.jpg"
          alt="bg"
        ></img>
      </div>
      <form className="bg-black bg-opacity-80 absolute w-1/3 my-36 mx- right-0 left-0 text-white mx-auto py-4">
        <h1 className="mx-16 my-4 font-bold text-3xl">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mx-16 my-2 w-3/4 bg-gray-800 border-1 border-white rounded"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mx-16 my-2 w-3/4 bg-gray-800 border-1 border-white rounded"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 mx-16 my-2 w-3/4  bg-gray-800 border-1 border-white rounded"
        ></input>
        <button className="p-2 mx-16 my-2 w-3/4 bg-red-700 rounded">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mx-16 my-8 cursor-pointer" onClick={toggleSignInForm}>
          {isSignedInForm ? "New to Netflix? " : "Already a User? "}
          <span className="font-bold text-xl">
            {isSignedInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
