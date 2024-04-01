import React from "react";
import { Outlet } from "react-router-dom";
import Heder from "../components/Header";
import "../App.css"
const Page = () => {
  return (
    <div>
      <Heder />
      <Outlet />
    </div>
  );
};

export default Page;
