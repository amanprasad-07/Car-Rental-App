import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooking, clearPendingBooking } from "../features/bookingSlice";

export default function PaymentPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the pending booking (stored temporarily before payment)
  const pendingBooking = useSelector((state) => state.booking.pendingBooking);

  // 💰 Handle successful payment
  const handlePaymentSuccess = () => {
    if (!pendingBooking) return;

    // Move from pendingBooking → confirmed bookings
    dispatch(addBooking(pendingBooking));
    dispatch(clearPendingBooking());

    alert("✅ Payment successful! Booking confirmed.");
    navigate("/my-bookings");
  };

  // 🧾 No pending booking? Show fallback
  if (!pendingBooking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <div className="text-center">
          <p className="mb-4">No pending booking found. Please confirm a booking first.</p>
          <button
            onClick={() => navigate("/cars")}
            className="bg-[#fca311] px-5 py-2 rounded-md text-black font-medium hover:bg-[#e68a00] transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // 🎨 UI for valid payment process
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white px-6">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#fca311]">Payment Page</h1>
        <p>Car: {pendingBooking.carName}</p>
        <p>Total Price: ₹{pendingBooking.price}</p>

        <button
          onClick={handlePaymentSuccess}
          className="mt-6 bg-[#fca311] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#e29500] transition"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
}
