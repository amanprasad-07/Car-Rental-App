import React from "react";
import { Navigate } from "react-router-dom";

/**
 * PrivateRoute
 * ------------
 * Protects routes from unauthenticated access.
 * If a user is not logged in, they are redirected to the login page.
 */
export default function PrivateRoute({ children }) {
  const loggedInUser = JSON.parse(localStorage.getItem("luxerides_loggedInUser"));

  // Redirect to login if user is not authenticated
  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  // Render the protected component
  return children;
}
