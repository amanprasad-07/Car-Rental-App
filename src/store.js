/**
 * Redux Store Configuration
 * --------------------------
 * Sets up the application's global state management using Redux Toolkit.
 * Combines individual reducers into a single centralized store.
 */

import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/bookingSlice";

/**
 * Creates and exports the Redux store.
 * Currently manages booking-related state via bookingReducer.
 */
export default configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
