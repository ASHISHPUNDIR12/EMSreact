import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-sm">
        <h1 className="text-center mb-4 text-2xl font-semibold text-gray-700">Login</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col space-y-4"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border border-gray-300 rounded-lg py-2 px-3 text-base text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            required
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border border-gray-300 rounded-lg py-2 px-3 text-base text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            required
            placeholder="Enter your password"
          />
          <button
            className="bg-blue-500 text-white py-2 rounded-lg text-base font-semibold hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
