import "./index.css";
import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashbaord from "./components/Dashboard/AdminDashbaord";

import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [LoginUserData, SetLoginUserData] = useState(null);
  const AuthData = useContext(AuthContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        console.log(userData);
        if (userData.role) {
          setUser(userData.role);
        }
        if (userData.data) {
          SetLoginUserData(userData.data);
        }
      } catch (error) {
        console.error("Error parsing loggedInUser data:", error);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin"); // Set user as a string, not an object
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (AuthData) {
      const employee = AuthData.employeeData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee"); // Set user role as a string
        SetLoginUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("invalid credentials ");
    }
  };

  return (
    <>
      {user === null ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashbaord />
      ) : (
        <EmployeeDashboard data={LoginUserData} />
      )}
    </>
  );
};
export default App;
