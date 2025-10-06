/**
 * Application Entry Point
 * -----------------------
 * This file initializes the React application.
 * It sets up:
 *  - React Router for client-side routing
 *  - Redux store for global state management
 *  - StrictMode for highlighting potential issues during development
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import store from "./store.js";

// Page Components
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import BookingForm from "./components/BookingForm.jsx";

// Define application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/booking-confirmation", element: <BookingConfirmation /> },
      { path: "/my-bookings", element: <MyBookings /> },
      { path: "/payment/:bookingId", element: <PaymentPage /> },
      { path: "/booking-form", element: <BookingForm /> },
    ],
  },
]);

// Mount the React application to the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
