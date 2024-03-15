"use client";

import useForm from "@/hooks/useForm";
import React from "react";

const LoginContainer = () => {
  const { handleChange, handleSubmit, ref, errors } = useForm({
    defaultValue: {
      username: "",
      password: "",
    },
    validations: {
      username: (val) => {
        return {
          required: false,
          message: "Need Username",
          // validate: () => {
          //   return false;
          // },
        };
      },
      password: (val) => {
        return {
          required: false,
          message: "Need Password",
          // validate: () => {
          //   return false;
          // },
        };
      },
    },
  });

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <form ref={ref} onSubmit={handleSubmit(handleLogin)}>
      <h3>Login Here</h3>
      <label>Username</label>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <label>Password</label>
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <button>Log In</button>
    </form>
  );
};

export default LoginContainer;
