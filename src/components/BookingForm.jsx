import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { branches } from "../data/branches";
import { setBookingDetails } from "../features/bookingSlice";

function BookingForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toggle and branch states
  const [sameLocation, setSameLocation] = useState(true);
  const [pickupBranch, setPickupBranch] = useState("");
  const [dropoffBranch, setDropoffBranch] = useState("");

  // Date/time states
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save booking details to Redux
    dispatch(
      setBookingDetails({
        pickupBranch,
        dropoffBranch,
        pickupDate,
        dropoffDate,
        sameLocation,
      })
    );

    // Navigate to browse page
    navigate("/booking-confirmation");
  };

  return (
   <div className="flex justify-center pt-30 bg-neutral-800 px-10">
     <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg text-neutral-300 w-full lg:w-4xl mt-10 mb-20 pt-10"
    >
      <h2 className="bg-gray-100 text-lg px-5 py-2 mb-5 font-semibold text-black rounded-lg">
        Let's find your perfect car
      </h2>

      {/* Drop-off same location toggle */}
      <div className="flex items-center gap-3 mb-4 ml-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={sameLocation}
            onChange={() => {
              setSameLocation(!sameLocation);
              if (!sameLocation) {
                setDropoffBranch(pickupBranch);
              }
            }}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#243a68] transition-colors"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
          <span className="text-sm font-medium ml-2 text-white">
            Drop Off at same location
          </span>
        </label>
      </div>

      {/* Pick-up Branch */}
      <label className="block mb-1 text-sm font-medium text-white">
        Pick-up Branch
      </label>
      <select
        value={pickupBranch}
        onChange={(e) => {
          setPickupBranch(e.target.value);
          if (sameLocation) {
            setDropoffBranch(e.target.value);
          }
        }}
        className="border rounded-xl p-2 w-full focus:outline-none mb-4"
        required
      >
        <option value="">Select Pick-up Branch</option>
        {branches.map((branch) => (
          <option key={branch.name} value={branch.name} className="bg-gray-700">
            {branch.name}
          </option>
        ))}
      </select>

      {/* Drop-off Branch */}
      <label className="block mb-1 text-sm font-medium text-white">
        Drop-off Branch
      </label>
      <select
        value={dropoffBranch}
        onChange={(e) => setDropoffBranch(e.target.value)}
        disabled={sameLocation}
        className={`border rounded-xl p-2 w-full focus:outline-none ${
          sameLocation ? "cursor-not-allowed" : ""
        }`}
        required
      >
        <option value="">Select Drop-off Branch</option>
        {branches.map((branch) => (
          <option key={branch.name} value={branch.name} className="bg-gray-700">
            {branch.name}
          </option>
        ))}
      </select>

      {/* Date & Time Fields */}
      <div className="w-full pt-4 space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Pick-up Date & Time
          </label>
          <input
            type="datetime-local"
            className="border rounded-xl p-2 w-full focus:outline-none"
            min={new Date().toISOString().slice(0, 16)}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Drop-off Date & Time
          </label>
          <input
            type="datetime-local"
            className="border rounded-xl p-2 w-full focus:outline-none"
            min={new Date().toISOString().slice(0, 16)}
            value={dropoffDate}
            onChange={(e) => setDropoffDate(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="bg-[#fca311] px-6 py-2 font-medium rounded-lg text-black hover:bg-[#d48403] transition"
        >
          Submit
        </button>
      </div>
    </form>
   </div>
  );
}

export default BookingForm;
