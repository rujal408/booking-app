"use client";

import useForm from "@/hooks/useForm";
import React from "react";

const LoginContainer = () => {
  const { handleChange, handleSubmit } = useForm({
    defaultValue: {
      username: "",
      password: "",
    },
    validations: {
      username: (val) => {
        return "";
      },
      password: (val) => {
        return "";
      },
    },
  });

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h3>Login Here</h3>
      <label>Username</label>
      <input
        name="username"
        onChange={handleChange}
        placeholder="Username"
        id="username"
      />

      <label>Password</label>
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
        id="password"
      />

      <button>Log In</button>
    </form>
  );
};

export default LoginContainer;
