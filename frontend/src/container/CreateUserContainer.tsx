"use client";

import useForm from "@/hooks/useForm";
import React from "react";

interface IProps {
  handleSwitch: () => void;
}

const CreateUserContainer: React.FC<IProps> = ({ handleSwitch }) => {
  const { handleChange, handleSubmit, ref, errors } = useForm({
    defaultValue: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validations: {
      name: {
        required: true,
        message: "Provide name",
      },
      username: {
        required: true,
        message: "Provide username",
      },
      email: {
        required: true,
        message: "Provide email",
      },
      password: {
        required: true,
        message: "Provide password",
      },
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <h3>SignUp Here</h3>
      <label>Name</label>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChange}
      />
      {errors && errors["name"]}

      <label>Username</label>
      <input
        name="username"
        type="text"
        placeholder="Username"
        onChange={handleChange}
      />
      {errors && errors["username"]}

      <label>Email</label>
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      {errors && errors["email"]}

      <label>Password</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors && errors["password"]}

      <span onClick={handleSwitch}>Login</span>

      <button>Log In</button>
    </form>
  );
};

export default CreateUserContainer;
