import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Static background image
const bgImage = "/log-bg.jpg";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("luxerides_users")) || [];
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("luxerides_loggedInUser", JSON.stringify(foundUser));
      navigate("/home");
    } else {
      setError("Wrong email or password.");
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to darken for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Form */}
      <div className="relative z-10 bg-neutral-800/20 p-10 rounded-lg w-full max-w-md text-white shadow-xl backdrop-blur-sm">
        <h1 className="text-2xl font-semibold mb-5 text-center text-[#fca311]">
          Welcome to LuxeRides
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-400 bg-transparent p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-400 bg-transparent p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fca311]"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-[#fca311] text-black py-2 rounded-lg hover:bg-[#d48403] transition font-semibold mt-3"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <span
            className="text-[#fca311] cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
