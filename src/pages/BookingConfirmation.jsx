import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPendingBooking } from '../features/bookingSlice';

export default function BookingConfirmation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract selected car and booking details from Redux
  const { selectedCar, pickupBranch, dropoffBranch, pickupDate, dropoffDate, sameLocation } =
    useSelector((state) => state.booking);

  // Handle booking confirmation and navigate to payment
  const handleConfirmBooking = () => {
    if (!selectedCar) return;

    const pendingBooking = {
      id: Date.now(),
      carId: selectedCar.id,
      carName: `${selectedCar.company} ${selectedCar.name}`,
      price: selectedCar.price,
      pickupBranch,
      dropoffBranch,
      pickupDate,
      dropoffDate,
      sameLocation,
      createdAt: new Date().toISOString(),
    };

    dispatch(setPendingBooking(pendingBooking));
    navigate('/payment');
  };

  // Render message if no car is selected
  if (!selectedCar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <p className="text-lg font-medium">No car selected for booking.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-6">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#fca311]">Booking Confirmation</h1>

        {/* Car Details */}
        <div className="mb-4 text-left">
          <h2 className="text-lg font-semibold mb-2">Car Details</h2>
          <p>
            Model: <b>{selectedCar.company} {selectedCar.name}</b>
          </p>
          <p>Fuel: {selectedCar.fuel}</p>
          <p>Seats: {selectedCar.seats}</p>
          <p>Price: {selectedCar.price}</p>
        </div>

        {/* Booking Information */}
        <div className="mb-6 text-left">
          <h2 className="text-lg font-semibold mb-2">Booking Info</h2>
          <p>Pick-up Branch: {pickupBranch}</p>
          <p>Drop-off Branch: {dropoffBranch}</p>
          <p>Pick-up Date: {pickupDate}</p>
          <p>Drop-off Date: {dropoffDate}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirmBooking}
            className="bg-[#fca311] text-black px-5 py-2 rounded font-semibold hover:bg-[#e29500] transition-colors"
          >
            Proceed to Payment
          </button>
          <button
            onClick={() => navigate('/browse')}
            className="bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-300 transition-colors"
          >
            Back to Browse
          </button>
        </div>
      </div>
    </div>
  );
}
