import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBooking } from "../features/bookingSlice";

/**
 * MyProfile Page
 * Displays user information and manages their bookings.
 */
export default function MyProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve logged-in user info from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("luxerides_loggedInUser"));
  const bookings = useSelector((state) => state.booking.bookings) || [];

  // Handle booking cancellation
  const handleCancel = (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    dispatch(removeBooking(id));
  };

  // Handle "Book Again" navigation
  const handleBookAgain = (carId) => {
    navigate(`/booking-form?carId=${carId}`);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 pt-30 pb-20">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Profile Header */}
        <section className="bg-neutral-800 rounded-lg p-6 shadow-md w-full">
          <div className="flex flex-col md:flex-row md:items-center w-full gap-6">

            {/* Avatar */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#fca311] flex items-center justify-center text-black text-3xl font-bold">
                {loggedInUser?.name ? loggedInUser.name.charAt(0).toUpperCase() : "U"}
              </div>
            </div>

            {/* User Info and Logout */}
            <div className="text-center md:text-left flex flex-col md:flex-row flex-1 md:justify-around md:items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[#fca311]">
                {loggedInUser?.name || "User"}
              </h1>
              <p className="text-gray-300">{loggedInUser?.email || "example@email.com"}</p>
              <button
                onClick={() => {
                  localStorage.removeItem("luxerides_loggedInUser");
                  navigate("/login");
                }}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        {/* My Bookings Section */}
        <section className="bg-neutral-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#fca311] text-center sm:text-left">
            My Bookings
          </h2>

          {bookings.length === 0 ? (
            <p className="text-gray-400 text-center">No bookings yet.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-5 bg-neutral-700 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-neutral-600 transition"
                >
                  {/* Booking Details */}
                  <div className="text-left">
                    <p className="font-semibold text-[#fca311] text-lg">{booking.carName}</p>
                    <p className="text-sm text-gray-300">Ref: {booking.id}</p>
                    <p className="text-sm text-gray-400">Booked on: {new Date(booking.createdAt).toLocaleString()}</p>
                    <p className="text-sm text-gray-300 mb-1">Price: {booking.price}</p>
                    <div className="mt-2 text-sm text-gray-300">
                      <p>Pickup: {booking.pickupBranch || "—"}</p>
                      <p>Drop-off: {booking.dropoffBranch || "—"}</p>
                      <p>Pickup Date: {booking.pickupDate || "—"}</p>
                      <p>Drop-off Date: {booking.dropoffDate || "—"}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handleBookAgain(booking.carId)}
                      className="bg-[#243a68] px-4 py-2 rounded-md hover:bg-[#14213d] transition font-medium"
                    >
                      Book Again
                    </button>
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
