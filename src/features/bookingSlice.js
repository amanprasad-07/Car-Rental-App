import { createSlice } from '@reduxjs/toolkit';

const persistedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

const initialState = {
  selectedCar: null,
  bookings: persistedBookings,
  pickupBranch: "",
  dropoffBranch: "",
  pickupDate: "",
  dropoffDate: "",
  sameLocation: true,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },

    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },

    clearSelectedCar: (state) => {
      state.selectedCar = null;
    },

    removeBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },

    /**
     * Set booking details (pickup/dropoff branches, dates, sameLocation)
     * @param state
     * @param action.payload - { pickupBranch, dropoffBranch, pickupDate, dropoffDate, sameLocation }
     */
    setBookingDetails: (state, action) => {
      const { pickupBranch, dropoffBranch, pickupDate, dropoffDate, sameLocation } = action.payload;
      state.pickupBranch = pickupBranch;
      state.dropoffBranch = dropoffBranch;
      state.pickupDate = pickupDate;
      state.dropoffDate = dropoffDate;
      state.sameLocation = sameLocation;
    },

    // 💳 Temporary booking before payment
    setPendingBooking: (state, action) => {
      state.pendingBooking = action.payload;
      localStorage.setItem("pendingBooking", JSON.stringify(action.payload));
    },

    clearPendingBooking: (state) => {
      state.pendingBooking = null;
      localStorage.removeItem("pendingBooking");
    },
  },
});

export const {
  setSelectedCar,
  addBooking,
  clearSelectedCar,
  removeBooking,
  setBookingDetails,
  setPendingBooking,
  clearPendingBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
