import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductList from "../components/ProductList";
import cars from "../data/cars";
import { setSelectedCar } from "../features/bookingSlice";
import Testimonials from "../components/Testimonials";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Select 3 random cars for featured section
  const featuredCars = [...cars].sort(() => Math.random() - 0.5).slice(0, 3);

  // Handle booking: save selected car and navigate to confirmation
  const handleBookNow = (car) => {
    dispatch(setSelectedCar(car));
    navigate("/booking-confirmation");
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-5 sm:px-10 bg-cover bg-center shadow-2xl pt-28"
        style={{
          backgroundImage: "url('/hero-bg-1.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full justify-between gap-10">
          <div className="flex flex-col md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl pb-5 text-white">
              Drive Your Dream Car, Anytime, Anywhere
            </h1>
            <p className="font-medium text-lg text-gray-200 mb-6">
              Affordable rentals. Flexible plans. Choose from a wide range of cars and hit the road in style.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center md:justify-start">
              <a href="#bookNow">
                <button className="bg-[#fca311] px-6 py-2 font-medium rounded-lg text-black hover:bg-[#d48403] transition">
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

      {/* Featured Cars Section */}
      <section id="bookNow" className="bg-neutral-900 text-center pt-20 pb-10">
        <h2 className="text-3xl font-bold text-[#fca311] mb-3">
          Our Top Picks for You
        </h2>
        <p className="text-gray-300 mb-12 px-5 sm:px-20">
          Explore our selection of the best vehicles, handpicked for quality and performance.
        </p>
        <ProductList cars={featuredCars} onBookNow={handleBookNow} />
        <Link to="/browse">
          <button className="bg-[#243a68] px-6 py-2 mt-10 font-medium rounded-lg text-white hover:bg-[#14213d] transition">
            Browse More
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section className="bg-neutral-900 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fca311] mb-3 tracking-wide">
            About Us
          </h2>
          <h3 className="text-xl md:text-2xl mb-6 text-[#e5e5e5] font-semibold">
            DriveEase Rentals — Your Ride, Your Rules
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-12 px-2 md:px-10">
            At <span className="text-white font-medium">DriveEase</span>, we make car rentals simple, affordable, and hassle-free.
            Whether it’s a weekend getaway, a business trip, or your daily commute, we’ve got the perfect ride for every occasion.
            <br /><br />
            From hatchbacks to SUVs, every car in our fleet is well-maintained, insured, and ready to roll.
            With transparent pricing and 24/7 customer support, we’re here to give you the smoothest ride experience possible.
          </p>

          <div className="text-left md:pl-10 flex flex-col items-center">
            <h4 className="text-2xl font-semibold mb-5 text-[#fca311]">Why Choose Us</h4>
            <ul className="space-y-3 text-gray-300 text-lg">
              {["Affordable rates with no hidden fees", "Well-maintained cars for every budget", "Easy booking and quick pickup", "24/7 customer support"].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#fca311] mt-1">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-900 px-10 text-center">
        <h4 className="text-2xl font-semibold pb-5 text-[#fca311]">Our Services</h4>
        <div className="flex flex-col items-start justify-center md:pl-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
            {[
              { title: "Self-Drive Rentals", desc: "Choose from our wide range of cars and hit the road on your own terms — flexible plans for every traveler." },
              { title: "Chauffeur-Driven Rides", desc: "Sit back and relax while our professional drivers take you safely and comfortably to your destination." },
              { title: "Airport Transfers", desc: "On-time pick-up and drop-off to and from airports — because your journey begins the moment you land." },
              { title: "Corporate Rentals", desc: "Premium cars and flexible business plans designed to meet your company’s mobility needs." },
            ].map((service, index) => (
              <div key={index} className="bg-neutral-800 p-5 rounded-lg hover:bg-neutral-700 transition-all duration-300 shadow-md">
                <h5 className="text-lg font-semibold text-white mb-2">{service.title}</h5>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-900 text-white pb-16 pt-20 px-6 w-full">
        <Testimonials />
      </section>
    </>
  );
}

export default Home;
