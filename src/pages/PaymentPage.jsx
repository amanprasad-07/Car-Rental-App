// src/pages/PaymentPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * 💳 PaymentPage Component
 * Displays payment details for a specific booking.
 * Allows user to confirm and simulate a payment process.
 */
export default function PaymentPage() {
  const { bookingId } = useParams(); // Get booking ID from URL
  const navigate = useNavigate();

  // ✅ Retrieve booking details from Redux store by ID
  const booking = useSelector((state) =>
    state.booking.bookings.find((b) => b.id === Number(bookingId))
  );

  /**
   * 🧾 If booking not found (invalid or missing ID)
   * Show fallback message and navigation option.
   */
  if (!booking) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <div className="text-center bg-neutral-800 p-8 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-4">Booking not found.</p>
          <button
            onClick={() => navigate("/mybookings")}
            className="bg-[#fca311] px-5 py-2 rounded-md text-black font-medium hover:bg-[#e68a00] transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  /**
   * 💰 Handle payment confirmation (mock)
   * For now, it just shows an alert — can be replaced with payment gateway integration.
   */
  const handlePayment = () => {
    alert("✅ Payment successful! Thank you for booking with us.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* 🏷️ Page Title */}
        <h1 className="text-2xl font-bold mb-5 text-[#fca311] text-center">
          Payment Summary
        </h1>

        {/* 🚗 Booking Details */}
        <div className="space-y-2 text-gray-300">
          <p>
            <strong className="text-white">Car:</strong> {booking.carName}
          </p>
          <p>
            <strong className="text-white">Price:</strong> ₹{booking.price}
          </p>
          <p>
            <strong className="text-white">Booking ID:</strong> {booking.id}
          </p>
          <p>
            <strong className="text-white">Booked On:</strong>{" "}
            {new Date(booking.createdAt).toLocaleString()}
          </p>
        </div>

        {/* 💳 Pay Button */}
        <button
          onClick={handlePayment}
          className="bg-[#fca311] text-black font-semibold w-full py-2 mt-6 rounded-md hover:bg-[#e68a00] transition cursor-pointer"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
