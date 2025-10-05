/**
 * Redux Store Configuration
 * --------------------------
 * This file sets up the application's global state management using Redux Toolkit.
 * It imports reducers and combines them into a single store instance.
 */

import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/bookingSlice";

// Configure and export the Redux store
export default configureStore({
  reducer: {
    booking: bookingReducer, // Handles all booking-related state
  },
});
