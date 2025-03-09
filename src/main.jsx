import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import ColorChanger from "./components/project_01/ColorChanger";
import PasswordGenerator from "./components/project_02/PasswordGenerator";
import CurrencyConverter from "./components/project_03/CurrencyConverter";
import Github, { githubInfoLoader } from "./components/project_04/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="color-changer" element={<ColorChanger />} />
      <Route path="password-generator" element={<PasswordGenerator />} />
      <Route path="currency-converter" element={<CurrencyConverter />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
