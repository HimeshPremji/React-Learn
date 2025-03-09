import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import ColorChanger from "./components/project_01/ColorChanger";
import PasswordGenerator from "./components/project_02/PasswordGenerator";
import CurrencyConverter from "./components/project_03/CurrencyConverter";
import Github, { githubInfoLoader } from "./components/project_04/Github";
import Login from "./components/project_05/Login";
import Profile from "./components/project_05/Profile";
import UserContext from "./components/project_05/UserContext";

function App() {
  const { user } = useContext(UserContext);

  const isAuthenticated = user?.username === "hem" && user?.password === "123";

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Layout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Navigate to="/profile-info" /> },
        { path: "color-changer", element: <ColorChanger /> },
        { path: "password-generator", element: <PasswordGenerator /> },
        { path: "currency-converter", element: <CurrencyConverter /> },
        { path: "github", element: <Github />, loader: githubInfoLoader },
        { path: "profile-info", element: <Profile /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/login" /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
