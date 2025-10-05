import { createSlice } from '@reduxjs/toolkit';

/**
 * Load existing bookings from localStorage.
 * Fallback to an empty array if nothing is stored.
 */
const persistedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

// Initial state for the booking slice
const initialState = {
  selectedCar: null,   // Currently selected car for booking
  bookings: persistedBookings,  // List of all bookings
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    /**
     * Set the currently selected car
     * @param state
     * @param action.payload - Car object
     */
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },

    /**
     * Add a new booking
     * @param state
     * @param action.payload - Booking object
     */
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      // Persist updated bookings to localStorage
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },

    /**
     * Clear the currently selected car
     */
    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },

    /**
     * Remove a booking by ID
     * @param state
     * @param action.payload - Booking ID to remove
     */
    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
      // Update localStorage after removal
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
  },
});

// Export actions and reducer
export const { setSelectedCar, addBooking, clearSelectedCar, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
