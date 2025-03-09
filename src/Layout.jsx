import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./components/project_05/UserContext";
import Login from "./components/project_05/Login";

function Layout() {
  const navigationalData = [
    { name: "Home", path: "/" },
    { name: "Profile Info", path: "/profile-info" },
    { name: "Color Changer", path: "/color-changer" },
    { name: "Password Generator", path: "/password-generator" },
    { name: "Currency Converter", path: "/currency-converter" },
    { name: "Github Profile", path: "/github" },
  ];

  return (
    <>
      <Header navigationalData={navigationalData} />
      <main className="min-h-screen overflow-hidden">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
