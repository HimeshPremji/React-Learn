import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
