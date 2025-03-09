import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username === "hem" && user?.password === "123") {
      navigate("/profile-info");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "hem" && password === "123") {
      setUser({ username, password });
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm rounded-lg bg-gray-800 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white outline-none focus:border-blue-500"
          />
          <p className="text-center text-gray-600">user: hem \n pass: 123</p>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
