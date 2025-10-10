/**
 * App Component
 * Acts as the main layout wrapper for the application.
 * Includes the Navbar and Footer across all routes and renders
 * the current route's component in between using React Router's <Outlet>.
 */

import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./services/ScrollTop";

function App() {
  return (
    <>
      {/* Automatically scrolls to top when the route changes */}
      <ScrollToTop />

      {/* Global navigation bar */}
      <Navbar />

      {/* Active page content rendered here */}
      <Outlet />

      {/* Global footer */}
      <Footer />
    </>
  );
}

export default App;
