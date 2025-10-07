import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeBooking } from "../features/bookingSlice";

/**
 * 👤 MyProfile Page
 * Combines user info + MyBookings section.
 */
export default function MyProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get user & booking data from Redux/localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("luxerides_loggedInUser"));
  const bookings = useSelector((state) => state.booking.bookings) || [];

  const handleCancel = (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
    dispatch(removeBooking(id));
  };

  const handleRentNow = (booking) => {
    navigate(`/payment/${booking.id}`);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 pt-30 pb-20 ">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* 👤 Profile Header */}
        <section className="bg-neutral-800 rounded-lg p-6 shadow-md w-full">
          <div className="flex flex-col md:flex-row md:items-center w-full gap-6">
            {/* 🖼️ Avatar */}
            <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-[#fca311] flex items-center justify-center text-black text-3xl font-bold">
              {loggedInUser?.name
                ? loggedInUser.name.charAt(0).toUpperCase()
                : "U"}
            </div>
            </div>

            {/* 🧾 User Info */}
            <div className="text-center md:text-left flex flex-col md:flex-row flex-1 md:justify-around md:items-center ">
              <h1 className="text-2xl md:text-3xl font-bold text-[#fca311]">
                {loggedInUser?.name || "User"}
              </h1>
              <div className="">
                <p className="text-gray-300 ">
                {loggedInUser?.email || "example@email.com"}
              </p>
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem("luxerides_loggedInUser");
                  navigate("/login");
                }}
                className=" bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition font-medium cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </section>

        {/* 🚗 My Bookings Section */}
        <section className="bg-neutral-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#fca311] text-center sm:text-left">
            My Bookings
          </h2>

          {bookings.length === 0 ? (
            <p className="text-gray-400 text-center">No bookings yet.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  className="p-5 bg-neutral-700 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-neutral-600 transition"
                >
                  {/* Booking Details */}
                  <div className="text-left">
                    <p className="font-semibold text-[#fca311] text-lg">
                      {b.carName}
                    </p>
                    <p className="text-sm text-gray-300">Ref: {b.id}</p>
                    <p className="text-sm text-gray-400">
                      Booked on: {new Date(b.createdAt).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-300 mb-1">
                      Price: {b.price}
                    </p>
                    <div className="mt-2 text-sm text-gray-300">
                      <p>Pickup: {b.pickupBranch || "—"}</p>
                      <p>Drop-off: {b.dropoffBranch || "—"}</p>
                      <p>Pickup Date: {b.pickupDate || "—"}</p>
                      <p>Drop-off Date: {b.dropoffDate || "—"}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => navigate(`/booking-form?carId=${b.carId}`)}
                      className="bg-[#243a68] px-4 py-2 rounded-md hover:bg-[#14213d] transition font-medium cursor-pointer"
                    >
                      Book Again
                    </button>
                    <button
                      onClick={() => handleCancel(b.id)}
                      className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition font-medium cursor-pointer"
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
