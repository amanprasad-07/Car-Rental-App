import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductList from "../components/ProductList";
import cars from "../data/cars";
import { setSelectedCar } from "../features/bookingSlice";
import BookingForm from "./BookingForm";
import LoginPage from "./LoginPage";

function Home() {
  

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
                <button className="bg-[#fca311] px-6 py-2 font-medium rounded-lg text-black hover:bg-[#d48403] hover:text-black transition">
                  Top Picks
                </button>
              </a>
              <Link to="/browse">
                <button className="bg-[#243a68] px-6 py-2 font-medium rounded-lg text-white hover:bg-[#14213d] transition">
                  Browse Cars
                </button>
              </Link>
            </div>
          </div>


          
        </div>
      </section>

      {/* ====================== FEATURED CARS SECTION ====================== */}
      <section id="bookNow" className="bg-neutral-900 text-center py-20">
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
