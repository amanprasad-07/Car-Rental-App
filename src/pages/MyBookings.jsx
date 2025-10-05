import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/**
 * ✅ MyBookings Page
 * Displays all confirmed bookings.
 * Users can view details, proceed to payment, or cancel a booking.
 */
export default function MyBookings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Access all saved bookings from Redux store
  const bookings = useSelector((state) => state.booking.bookings);

  /**
   * 🗑️ Cancel a booking
   * Removes the booking from Redux state after user confirmation.
   */
  const handleCancel = (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    dispatch({ type: 'booking/removeBooking', payload: id });
  };

  /**
   * 💳 Proceed to Payment
   * Navigates user to payment page with booking ID.
   */
  const handleRentNow = (booking) => {
    navigate(`/payment/${booking.id}`);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 pt-30">
      <div className="max-w-4xl mx-auto">
        {/* 🏷️ Page Title */}
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          My Bookings
        </h1>

        {/* 📭 Show message if no bookings exist */}
        {bookings.length === 0 ? (
          <p className="text-gray-400 text-center">No bookings yet.</p>
        ) : (
          // 🧾 List of bookings
          <div className="space-y-4">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="p-5 bg-neutral-800 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition hover:bg-neutral-700"
              >
                {/* 🚗 Booking Details */}
                <div>
                  <p className="font-semibold text-[#fca311] text-lg">{b.carName}</p>
                  <p className="text-sm text-gray-300">Ref: {b.id}</p>
                  <p className="text-sm text-gray-400">
                    Booked on: {new Date(b.createdAt).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-300">Price: ₹{b.price}</p>
                </div>

                {/* 🎯 Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleRentNow(b)}
                    className="bg-[#243a68] px-4 py-2 rounded-md hover:bg-[#14213d] transition font-medium cursor-pointer"
                  >
                    Rent Now
                  </button>

                  <button
                    onClick={() => handleCancel(b.id)}
                    className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition font-medium cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
