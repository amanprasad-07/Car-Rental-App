/**
 * Testimonials Component
 * ----------------------
 * Displays a carousel of customer reviews using Swiper with autoplay, navigation, and pagination.
 */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// List of customer testimonials
const testimonials = [
  {
    name: "Rahul Menon",
    location: "Kochi",
    rating: 5,
    text: "Booking was effortless, and the car was spotless. LuxeRides made my weekend getaway feel premium."
  },
  {
    name: "Nisha George",
    location: "Thiruvananthapuram",
    rating: 5,
    text: "Superb service! The car was in perfect condition, and the staff were genuinely helpful."
  },
  {
    name: "Aarav Krishna",
    location: "Kozhikode",
    rating: 4,
    text: "Loved the smooth experience. Pickup and drop were on time — made my business trip stress-free."
  },
  {
    name: "Diya Suresh",
    location: "Kottayam",
    rating: 5,
    text: "It felt like driving my own luxury car! Neat interiors and that new-car smell sealed the deal."
  },
  {
    name: "Vikram Raj",
    location: "Thrissur",
    rating: 4,
    text: "Everything from booking to return was transparent. LuxeRides truly lives up to its name!"
  },
  {
    name: "Ananya Pillai",
    location: "Alappuzha",
    rating: 5,
    text: "Perfect ride for our backwater vacation. Comfortable, classy, and completely hassle-free."
  },
  {
    name: "Rohit Varma",
    location: "Palakkad",
    rating: 5,
    text: "This was my first time renting online — now I won’t look anywhere else. Highly recommended!"
  },
  {
    name: "Sneha Thomas",
    location: "Kannur",
    rating: 5,
    text: "The car looked brand new! LuxeRides team made everything so simple and quick."
  },
  {
    name: "Abdul Rahman",
    location: "Malappuram",
    rating: 5,
    text: "Clean cars, courteous service, and affordable prices. Truly a premium local experience!"
  },
  {
    name: "Tanya Joseph",
    location: "Pathanamthitta",
    rating: 5,
    text: "I booked for a family function, and everyone loved the ride. LuxeRides never disappoints!"
  }
];

export default function Testimonials() {
  return (
    <>
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-[#fca311]">
        What Our Customers Say
      </h2>

      {/* Testimonials Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={true}
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-neutral-800 rounded-2xl p-8 pt-16 md:mx-5 text-center shadow-lg h-[250px]">
              {/* Testimonial Text */}
              <p className="text-lg italic text-gray-200 mb-4">
                “{testimonial.text}”
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#fca311] text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Customer Name and Location */}
              <h3 className="font-semibold text-[#fca311]">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
