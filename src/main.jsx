// Entry point for the React application

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import store from "./store.js";

// Pages
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import BookingForm from "./pages/BookingForm.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Contact from "./pages/Contact.jsx";

// Services
import PrivateRoute from "./services/PrivateRoute.jsx";

/**
 * Defines all routes for the application.
 * Public routes are accessible to all users.
 * Protected routes require authentication.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Public routes
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },

      // Protected routes
      {
        element: <PrivateRoute />,
        children: [
          { path: "home", element: <Home /> },
          { path: "browse", element: <Browse /> },
          { path: "booking-form", element: <BookingForm /> },
          { path: "booking-confirmation", element: <BookingConfirmation /> },
          { path: "myprofile", element: <MyProfile /> },
          { path: "payment", element: <PaymentPage /> },
          { path: "contact", element: <Contact /> },
        ],
      },

      // Default redirect to login page
      { index: true, element: <Navigate to="/login" replace /> },
    ],
  },
]);

/**
 * Renders the React application to the DOM.
 * Wraps the app with Redux and Router providers.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
