"use client";

import React from "react";

const LoginContainer = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleLogin}>
      <h3>Login Here</h3>

      <label>Username</label>
      <input name="username" type="text" placeholder="Username" id="username" />

      <label>Password</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        id="password"
      />

      <button>Log In</button>
    </form>
  );
};

export default LoginContainer;
