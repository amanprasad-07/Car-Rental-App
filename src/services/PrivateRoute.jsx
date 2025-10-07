import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/**
 * PrivateRoute
 * ------------
 * Protects routes from unauthenticated access.
 * If a user is not logged in, they are redirected to the login page.
 */
const PrivateRoute = () => {
  // Get logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("luxerides_loggedInUser"));
  const isAuthenticated = !!loggedInUser; // Boolean check

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
