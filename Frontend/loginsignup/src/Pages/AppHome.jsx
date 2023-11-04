import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useSelector } from "react-redux";

export default function AppHome() {
  const authenticationState = useSelector((state) => state.authentication);

  return (
    <div className="headerContainer">
      <Navbar />
      <div className="headingContainer h-full  w-full flex flex-col justify-center items-center">
        <h2 className="text-xl mt-5 md:text-3xl font-bold text-black">
          {authenticationState.isUserLogedIn
            ? ""
            : "Welcome To YourQRSaver Application !!"}
        </h2>
        <Outlet />
      </div>
    </div>
  );
}
