/**
 * Card Component
 * ----------------
 * Displays individual car information and provides a "Book Now" button.
 * Selecting a car saves it in Redux and navigates the user to the booking form.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCar } from "../features/bookingSlice";

function Card({ car }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** Handles booking a car: saves selection and navigates to booking form */
  const handleBookNow = () => {
    dispatch(setSelectedCar(car));
    navigate("/booking-form");
  };

  return (
    <div className="flex flex-col items-center w-72 bg-[#e5e5e5] rounded-lg overflow-hidden shadow-lg">
      {/* Car Image */}
      <div className="w-full h-48">
        <img
          src={car.image}
          alt={`${car.company} ${car.name}`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Car Details */}
      <div className="flex flex-col items-center p-4 text-center">
        <h2 className="text-lg font-bold text-[#14213d]">
          {car.company} {car.name}
        </h2>

        <p className="mt-1 font-semibold text-[#8e0e70]">Price: {car.price}</p>

        <p className="mt-1 flex justify-center gap-2 font-medium text-gray-700">
          <span>{car.type}</span>|<span>{car.fuel}</span>|<span>{car.seats} seats</span>
        </p>

        <button
          onClick={handleBookNow}
          className="mt-4 px-6 py-2 font-medium text-black bg-[#fca311] rounded-lg hover:bg-[#d48403] transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Card;
