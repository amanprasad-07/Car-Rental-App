import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Static background image
const bgImage = "/log-bg.jpg";

function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !phone || !dob || !email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("luxerides_users")) || [];
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError("User already exists. Please log in.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      phone,
      dob,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("luxerides_users", JSON.stringify(users));

    alert("Signup successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-30 pb-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to darken for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Signup Form */}
      <div className="relative z-10 bg-neutral-800/20 p-10 rounded-lg w-full max-w-lg text-white shadow-xl backdrop-blur-sm mx-5">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#fca311]">
          Create Your LuxeRides Profile
        </h1>

        <form onSubmit={handleSignup} className=" md:grid grid-cols gap-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-500 bg-transparent p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fca311] mb-5 "
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              maxLength="10"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border border-gray-500 bg-transparent p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fca311] mb-5"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block mb-1 text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="border border-gray-500 bg-transparent p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fca311] mb-5"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-500 bg-transparent p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fca311] mb-5"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-500 bg-transparent p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fca311] mb-5"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`border p-3 rounded-lg w-full focus:outline-none ${
                confirmPassword && password !== confirmPassword
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-500 focus:ring-2 focus:ring-[#fca311] mb-5"
              } bg-transparent`}
            />
            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-400 text-xs mt-1">Passwords do not match</p>
            )}
          </div>

          {/* Error Message */}
          {error && <p className="text-red-400 text-sm text-center col-span-2">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#fca311] text-black py-2 rounded-lg hover:bg-[#d48403] transition font-semibold mt-3 w-full md:col-span-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-[#fca311] cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
