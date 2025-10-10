/**
 * bookingSlice.js
 * ----------------
 * Manages all booking-related state and actions using Redux Toolkit.
 * Includes car selection, booking storage, and pending booking handling.
 */

import { createSlice } from "@reduxjs/toolkit";

// Load existing bookings from localStorage (if available)
const persistedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

// Define initial booking state
const initialState = {
  selectedCar: null,
  bookings: persistedBookings,
  pickupBranch: "",
  dropoffBranch: "",
  pickupDate: "",
  dropoffDate: "",
  sameLocation: true,
  pendingBooking: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    /** Sets the currently selected car for booking */
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },

    /** Adds a confirmed booking and persists it to localStorage */
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },

    /** Clears the selected car from the state */
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },

    /** Removes a booking by ID and updates localStorage */
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },

    /**
     * Updates booking details such as branches, dates, and same-location status
     * @param {Object} action.payload - { pickupBranch, dropoffBranch, pickupDate, dropoffDate, sameLocation }
     */
    setBookingDetails: (state, action) => {
      const { pickupBranch, dropoffBranch, pickupDate, dropoffDate, sameLocation } =
        action.payload;
      state.pickupBranch = pickupBranch;
      state.dropoffBranch = dropoffBranch;
      state.pickupDate = pickupDate;
      state.dropoffDate = dropoffDate;
      state.sameLocation = sameLocation;
    },

    /** Temporarily stores a booking before payment */
    setPendingBooking: (state, action) => {
      state.pendingBooking = action.payload;
      localStorage.setItem("pendingBooking", JSON.stringify(action.payload));
    },

    /** Clears the pending booking from state and localStorage */
    clearPendingBooking: (state) => {
      state.pendingBooking = null;
      localStorage.removeItem("pendingBooking");
    },
  },
});

// Export actions for use in components
export const {
  setSelectedCar,
  addBooking,
  clearSelectedCar,
  removeBooking,
  setBookingDetails,
  setPendingBooking,
  clearPendingBooking,
} = bookingSlice.actions;

// Export reducer to be used in the Redux store
export default bookingSlice.reducer;
