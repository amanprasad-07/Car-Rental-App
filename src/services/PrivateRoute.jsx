import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/**
 * PrivateRoute Component
 * ----------------------
 * Acts as a route guard for authenticated pages.
 * Renders child routes (via <Outlet />) if a valid user is found in localStorage.
 * Otherwise, redirects the user to the login page.
 */
const PrivateRoute = () => {
  // Retrieve the stored user information
  const storedUser = localStorage.getItem("luxerides_loggedInUser");

  // Convert stored JSON to object and check authentication status
  const isAuthenticated = !!JSON.parse(storedUser);

  // Allow access if authenticated, otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
