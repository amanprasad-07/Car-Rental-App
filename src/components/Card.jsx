import React from 'react';

function Card({ car }) {
  return (
    <div
      key={car.id}
      className="flex flex-col items-center bg-[#e5e5e5] w-90 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="flex-none h-70">
        <img
          src={car.image}
          alt={`${car.company} ${car.name}`}
          className="object-cover h-70"
        />
      </div>
      <div className="p-5 text-center flex-1 h-30">
        <h1 className="font-bold text-lg text-[#14213d]">
          {car.company} {car.name}
        </h1>
        <h2 className="text-[#8e0e70] font-bold">Price: {car.price}</h2>
        <div className="flex gap-2 font-semibold">
          <p>{car.type}</p>
          <span>|</span>
          <p>{car.fuel}</p>
          <span>|</span>
          <p>{car.seats}</p>
        </div>
        <button className="bg-[#fca311] px-6 py-2 font-medium rounded-lg text-black mr-5 hover:bg-[#d48403] transition cursor-pointer mt-3">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Card;
