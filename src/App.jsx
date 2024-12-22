import "./index.css";
import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashbaord from "./components/Dashboard/AdminDashbaord";
import { getLocalstorage, setLocalStorage } from "./utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage()
  //  const  data = getLocalstorage();

  // },)
  const AuthData = useContext(AuthContext);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (AuthData) {
  //     // const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       // setUser(loggedInUser.role);
  //     }
  //   }
  // }, [AuthData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      // localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (AuthData)
    {
      const employee =  AuthData.employeeData.find(
        (e) => email == e.email && password == e.password
      )
      if(employee){
        setUser({role:employee});
        // localStorage.setItem("loggedInUser" , JSON.stringify({role:"employee"}))
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
        <EmployeeDashboard />
      )}
    </>
  );
};
export default App;
