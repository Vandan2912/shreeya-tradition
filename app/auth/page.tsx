"use client";
import React, { useState } from "react";

import Signup from "./(components)/Signup";
import Signin from "./(components)/Signin";

const page = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="bg-lightpink h-screen w-full text-start flex justify-center items-center">
      <div className="bg-white rounded-3xl p-8 w-[400px] mx-auto">
        {signIn ? (
          <Signin setSignIn={setSignIn} />
        ) : (
          <Signup setSignIn={setSignIn} />
        )}
      </div>
    </div>
  );
};

export default page;
