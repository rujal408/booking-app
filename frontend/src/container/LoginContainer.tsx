"use client";

import useForm from "@/hooks/useForm";
import React from "react";

type ILogin = { username: string; password: string };

interface IProps {
  handleSwitch: () => void;
}

const LoginContainer: React.FC<IProps> = ({ handleSwitch }) => {
  const { handleChange, handleSubmit, ref, errors } = useForm<ILogin>({
    defaultValue: {
      username: "",
      password: "",
    },
    validations: {
      username: {
        required: true,
        message: "Provide Username",
        // validate: (val) => {
        //   return false;
        // },
      },
      password: {
        required: true,
        message: "Provide Password",
        // validate: (val) => {
        //   return false;
        // },
      },
    },
  });

  const handleLogin = (data: ILogin) => {
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

      <span onClick={handleSwitch}>Forgot Password?</span>

      <button>Log In</button>
    </form>
  );
};

export default LoginContainer;
