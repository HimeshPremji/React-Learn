import React from "react";
import ColorChanger from "./components/project_01/ColorChanger";
import PasswordGenerator from "./components/project_02/PasswordGenerator";
import CurrencyConverter from "./components/project_03/CurrencyConverter";
import Navbar from "./components/Header/Header";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="mx-auto max-w-5xl">
        {/* <ButtonDemo /> */}
        <Navbar />
        {/* <ColorChanger /> */}
        {/* <PasswordGenerator /> */}
        {/* <CurrencyConverter /> */}
      </div>
    </div>
  );
}

export default App;
