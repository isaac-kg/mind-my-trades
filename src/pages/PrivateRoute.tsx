import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.authReducer?.user)

  // Check if user information exists
  const isAuthenticated = user?.username && user?.emailAddress;
  console.log("This is state: ", user)
  
  if (!isAuthenticated) {
    return <Navigate to="/" />; 
  }
  
  return children;
};

export default PrivateRoute;
