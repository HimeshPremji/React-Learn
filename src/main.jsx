import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./components/project_05/UserContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
);
