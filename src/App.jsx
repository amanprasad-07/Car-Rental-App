/**
 * App Component
 * Serves as the main layout for the entire application.
 * 
 * Includes the global Navbar and Footer, and uses React Router's <Outlet> 
 * to render the active page component between them.
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./services/ScrollTop";

function App() {
  return (
    <>
      {/* Ensures the page scrolls to the top when the route changes */}
      <ScrollToTop />

      {/* Global navigation bar displayed across all pages */}
      <Navbar />

      {/* Renders the component corresponding to the current route */}
      <Outlet />

      {/* Global footer displayed across all pages */}
      <Footer />
    </>
  );
}

export default App;
