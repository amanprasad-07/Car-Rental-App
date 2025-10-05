import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCar } from "../features/bookingSlice";

function Card({ car }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handler for "Book Now" button
  const handleBookNow = () => {
    // Save selected car in Redux
    dispatch(setSelectedCar(car));

    // Navigate to booking confirmation page
    navigate("/booking-confirmation");
  };

  return (
    <div className="flex flex-col items-center bg-[#e5e5e5] w-72 rounded-lg overflow-hidden shadow-lg">
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
        {/* Car Name */}
        <h2 className="font-bold text-lg text-[#14213d]">
          {car.company} {car.name}
        </h2>

        {/* Price */}
        <p className="text-[#8e0e70] font-semibold mt-1">Price: {car.price}</p>

        {/* Car Info: Type | Fuel | Seats */}
        <p className="flex gap-2 justify-center font-medium text-gray-700 mt-1">
          <span>{car.type}</span>|<span>{car.fuel}</span>|<span>{car.seats} seats</span>
        </p>

        {/* Book Now Button */}
        <button
          onClick={handleBookNow}
          className="bg-[#fca311] px-6 py-2 font-medium rounded-lg text-black hover:bg-[#d48403] transition mt-4"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Card;
