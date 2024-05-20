"use client";
import React, { useState } from "react";

import Signup from "./(components)/Signup";

const page = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="bg-lightpink h-screen w-full text-start flex justify-center items-center">
      <div className="bg-white rounded-3xl p-8 w-[400px] mx-auto">
        <Signup />
      </div>
    </div>
  );
};

export default page;
