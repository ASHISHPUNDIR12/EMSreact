import React, { Children, createContext, useState , useEffect } from "react";
import { getLocalstorage } from "../utils/localStorage";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const { employeeData, adminData } = getLocalstorage();
    setuserData({ employeeData, adminData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
