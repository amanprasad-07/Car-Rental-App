// src/utils/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 🔝 ScrollToTop Component
 * Automatically scrolls the page to the top whenever the route changes.
 * 
 * This ensures users always start at the top of a new page 
 * instead of staying at their previous scroll position.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation(); // Detects route changes

  useEffect(() => {
    // Scrolls to top when path changes
    window.scrollTo({ top: 0, behavior: "instant" }); 
    // 💡 Change "instant" → "smooth" for a smooth scrolling experience
  }, [pathname]);

  // No UI rendering required
  return null;
}
