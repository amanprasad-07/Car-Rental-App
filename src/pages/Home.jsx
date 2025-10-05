import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductList from "../components/ProductList";
import cars from "../data/cars";
import { setSelectedCar } from "../features/bookingSlice";

function Home() {
  // ✅ State for toggles
  const [sameLocation, setSameLocation] = useState(true); // Pickup & drop-off same place toggle
  const [hide, setHide] = useState(true); // Show/hide location dropdown

  // ✅ Redux & Navigation setup
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Randomly select 3 cars for featured section
  const randomCars = [...cars].sort(() => Math.random() - 0.5).slice(0, 3);

  // ✅ Handles "Book Now" click: saves car and navigates to confirmation
  const handleBookNow = (car) => {
    dispatch(setSelectedCar(car));
    navigate("/booking-confirmation");
  };

  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-5 sm:px-10 bg-cover bg-center bg-no-repeat shadow-2xl pt-28"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full justify-between gap-10">

          {/* ---------- LEFT SIDE: Intro Text + Buttons + Search ---------- */}
          <div className="flex flex-col md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl pb-5 text-white">
              Drive Your Dream Car, Anytime, Anywhere
            </h1>
            <p className="font-medium text-lg text-gray-200 mb-6">
              Affordable rentals. Flexible plans. Choose from a wide range of cars and hit the road in style.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center md:justify-start">
              <a href="#bookNow">
                <button className="bg-gray-100 px-6 py-2 font-medium rounded-lg text-black hover:bg-[#14213d] hover:text-white transition">
                  Book Now
                </button>
              </a>
              <Link to="/browse">
                <button className="bg-[#243a68] px-6 py-2 font-medium rounded-lg text-white hover:bg-[#14213d] transition">
                  Browse Cars
                </button>
              </Link>
            </div>

            {/* Search Bar (non-functional for now) */}
            <form
              className="flex items-center rounded-lg h-11 w-full sm:w-[400px] text-lg pl-3 bg-white mx-auto md:mx-0 shadow-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search Your Dream Car..."
                className="flex-1 focus:outline-none text-neutral-800 placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-4 bg-[#fca311] font-medium border-none h-full rounded-md rounded-l-none hover:bg-[#d48403] transition text-black"
              >
                Search
              </button>
            </form>
          </div>

          {/* ---------- RIGHT SIDE: Booking Form ---------- */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg text-neutral-300 w-full md:w-[350px] mt-10 md:mt-0 mb-10">
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
                  onChange={() => setSameLocation(!sameLocation)}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#243a68] transition-colors"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                <span className="text-sm font-medium ml-2 text-white">
                  Drop Off at same location
                </span>
              </label>
            </div>

            {/* ----------- Pick-up Location ----------- */}
            <div className="relative w-full mb-5 px-5">
              <input
                type="text"
                placeholder="Enter pick-up location..."
                className="border rounded-xl p-2 w-full focus:outline-none"
                onClick={() => setHide(!hide)}
              />

              {/* Dropdown (visible on click) */}
              {!hide && (
                <ul className="absolute top-12 left-0 w-full border rounded-xl bg-gray-100 shadow-lg z-10 text-[#243a68]">
                  {["Kochi", "Trivandrum", "Bangalore"].map((city) => (
                    <li
                      key={city}
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* ----------- Drop-off Location (if not same) ----------- */}
            {!sameLocation && (
              <div className="relative w-full mb-5 px-5">
                <input
                  type="text"
                  placeholder="Enter drop-off location..."
                  className="border rounded-xl p-2 w-full focus:outline-none"
                />
              </div>
            )}

            {/* ----------- Date & Time Fields ----------- */}
            <div className="w-full px-5 space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-white">
                  Pick-up Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="border rounded-xl p-2 w-full focus:outline-none"
                  min={new Date().toISOString().slice(0, 16)}
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
                />
              </div>
            </div>

            {/* ----------- Submit Button ----------- */}
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="bg-[#fca311] px-6 py-2 font-medium rounded-lg text-black hover:bg-[#d48403] transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FEATURED CARS SECTION ====================== */}
      <section id="bookNow" className="bg-neutral-800 text-center py-20">
        <h2 className="text-3xl font-bold text-white mb-3">
          Our Top Picks for You
        </h2>
        <p className="text-gray-300 mb-12 px-5 sm:px-20">
          Explore our selection of the best vehicles, handpicked for quality and performance.
        </p>

        <ProductList cars={randomCars} onBookNow={handleBookNow} />

        <Link to="/browse">
          <button className="bg-[#243a68] px-6 py-2 mt-10 font-medium rounded-lg text-white hover:bg-[#14213d] transition">
            Browse More
          </button>
        </Link>
      </section>
    </>
  );
}

export default Home;
