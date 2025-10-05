import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking, clearSelectedCar } from '../features/bookingSlice';

export default function BookingConfirmation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the currently selected car from Redux state
  const selectedCar = useSelector((state) => state.booking.selectedCar);

  /**
   * Handles the booking confirmation:
   * - Creates a new booking object
   * - Adds it to the Redux store (and localStorage)
   * - Clears the selected car
   * - Redirects user to "My Bookings" page
   */
  const handleConfirmBooking = () => {
    if (!selectedCar) return;

    const newBooking = {
      id: Date.now(), // Unique ID based on timestamp
      carId: selectedCar.id,
      carName: `${selectedCar.company} ${selectedCar.name}`,
      price: selectedCar.price,
      createdAt: new Date().toISOString(),
    };

    dispatch(addBooking(newBooking));
    dispatch(clearSelectedCar());
    navigate('/my-bookings');
  };

  // If user directly visits this page without selecting a car
  if (!selectedCar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <p className="text-lg font-medium">No car selected for booking.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-6">
      {/* Booking confirmation card */}
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#fca311]">
          Booking Confirmation
        </h1>

        {/* Booking Details */}
        <p className="mb-2 text-lg">
          Car: <b>{selectedCar.company} {selectedCar.name}</b>
        </p>
        <p className="mb-2 text-lg">
          Price: ₹{selectedCar.price}
        </p>
        <p className="text-sm text-gray-300 mb-6">
          Booking Time: {new Date().toLocaleString()}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirmBooking}
            className="bg-[#fca311] text-black px-5 py-2 rounded font-semibold hover:bg-[#e29500] transition-colors"
          >
            Confirm Booking
          </button>

          <button
            onClick={() => navigate('/')}
            className="bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-300 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
