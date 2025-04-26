import React, { useState } from "react";
import file from "../images/file.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(import.meta.env.VITE_LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("isAdminLoggedIn", "true"); // ✅ Set flag
        setMessage("Login successful ✅");
        setTimeout(() => {
          navigate("/adminpanel");
        }, 3000);
      } else {
        setMessage("Invalid username or password ❌");
      }
    } catch (err) {
      setMessage("Server error 🚨");
    }
  };

  return (
    <div className="mt-[5rem] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src={file} alt="Logo" className="w-20 h-20 mb-2 rounded-full" />
          <h1 className="text-2xl font-bold text-violet-700">
            Friend's Vision
          </h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition hover:cursor-pointer"
          >
            Login
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center text-sm text-red-500">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
