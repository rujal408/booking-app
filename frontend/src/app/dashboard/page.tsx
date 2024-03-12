"use client";

import React, { FormEvent } from "react";
import axiosConfig from "@/utils/axiosConfig";

const Dashboard = () => {
  const [state, setState] = React.useState({ from: "", to: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axiosConfig.post("/booking", {
        ...state,
        user: "65ef11ea805aefbf966dc672",
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="from"
          type="date"
          placeholder="From"
        />
        <input onChange={handleChange} name="to" type="date" placeholder="To" />
        <input type="submit" title="Submit" />
      </form>
    </div>
  );
};

export default Dashboard;
