import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Navigate } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import store from "./store.js";

// Pages
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import BookingForm from "./pages/BookingForm.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

// PrivateRoute
import PrivateRoute from "./services/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Public routes
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },

      // Protected routes
      { path: "/home", element: <PrivateRoute><Home /></PrivateRoute> },
      { path: "/browse", element: <PrivateRoute><Browse /></PrivateRoute> },
      { path: "/booking-form", element: <PrivateRoute><BookingForm /></PrivateRoute> },
      { path: "/booking-confirmation", element: <PrivateRoute><BookingConfirmation /></PrivateRoute> },
      { path: "/my-bookings", element: <PrivateRoute><MyBookings /></PrivateRoute> },
      { path: "/payment/:bookingId", element: <PrivateRoute><PaymentPage /></PrivateRoute> },

      // Default redirect to login if user hits "/"
      { path: "/", element: <Navigate to="/login" replace /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
