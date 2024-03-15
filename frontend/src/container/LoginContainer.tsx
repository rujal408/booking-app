"use client";

import useForm from "@/hooks/useForm/useForm";
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
          required: true,
          message: "Need Username",
          // validate: () => {
          //   return false;
          // },
        };
      },
      password: (val) => {
        return {
          required: true,
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
      {errors && errors["username"]}
      <label>Password</label>
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      {errors && errors["password"]}
      <button>Log In</button>
    </form>
  );
};

export default LoginContainer;
