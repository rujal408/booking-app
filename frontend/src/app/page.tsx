"use client";

import CreateUserContainer from "@/container/CreateUserContainer";
import LoginContainer from "@/container/LoginContainer";

import React, { useState } from "react";

const User = () => {
  const [state, setState] = useState("login");

  return (
    <div className="user-form">
      {state === "login" && <LoginContainer handleSwitch={()=>setState('create')} /> }
      {state === "create" && <CreateUserContainer handleSwitch={()=>setState('login')} /> }

    </div>
  );
};

export default User;
