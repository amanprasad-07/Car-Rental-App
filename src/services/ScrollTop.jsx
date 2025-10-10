// src/utils/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * Automatically scrolls the window to the top whenever the route changes.
 * Ensures users start at the top of each new page for consistent navigation.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation(); // Detect route change

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Scroll to top immediately
  }, [pathname]);

  return null; // No visual output
}
