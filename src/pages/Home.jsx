import React, { useState } from "react";
import Card from "../components/Card";
import ProductList from "../components/ProductList";
import cars from "../data/cars";

function Home() {
    // ✅ State for toggle: true = same pick-up & drop-off location
    const [sameLocation, setSameLocation] = useState(true);
    const [hide, setHide] = useState(true);
    const randomCars = [...cars].sort(() => Math.random() - 0.5).slice(0, 3);

    return (
        <>

            {/* ================= HERO SECTION ================= */}

            <div
                className="relative px-5 sm:px-10 flex flex-col md:flex-row items-center justify-between h-[90vh] bg-cover bg-center bg-no-repeat shadow-2xl pt-30"
                style={{ backgroundImage: "url('/hero-bg-1.png')" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

                <div className="relative z-1 flex flex-col md:flex-row items-center md:items-start w-full md:justify-between gap-10 md:gap-30">

                    {/* ---------------- LEFT SIDE: Hero Content ---------------- */}
                    <div className="flex flex-col md:w-1/2 text-center md:text-left">
                        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl pb-5 text-white">
                            Drive Your Dream Car, Anytime, Anywhere
                        </h1>
                        <p className="font-medium text-lg text-[#e5e5e5] mb-5">
                            Affordable rentals. Flexible plans. Choose from a wide range of cars and hit the road in style
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-5 justify-center md:justify-start">
                            <button className="bg-[#e5e5e5] px-6 py-2 font-medium rounded-lg text-black hover:bg-[#c0c0c0e8] transition">
                                <a href="#bookNow">Book Now</a>
                            </button>
                            <button className="bg-[#243a68] px-6 py-2 font-medium rounded-lg text-white hover:bg-[#14213d] transition">
                                Browse Cars
                            </button>
                        </div>

                        <form className="flex items-center border-none rounded-lg h-11 w-full sm:w-[400px] text-lg pl-3 bg-white mx-auto md:mx-0">
                            <input
                                type="text"
                                placeholder="Search Your Dream Car..."
                                className="flex-1 focus:outline-none focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="px-4 bg-[#fca311] font-medium border-none h-full rounded-md rounded-l-none hover:bg-[#d48403] transition cursor-pointer text-black"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    {/* ---------------- RIGHT SIDE: Booking Form ---------------- */}

                    <div className="bg-white/10 relative z-1 rounded-2xl py-5 backdrop-blur-md border border-white/20 shadow-lg text-neutral-300 w-full md:w-[350px] mt-10 md:mt-0">

                        {/* Form Title */}
                        <h2 className="bg-[#e5e5e5] text-lg px-5 mb-5 font-semibold text-black">
                            Let's find your perfect car
                        </h2>

                        {/* Checkbox Toggle: Drop-off same location */}
                        <div className="flex items-center gap-3 mb-4 ml-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={sameLocation}
                                    onChange={() => setSameLocation(!sameLocation)}
                                />

                                {/* Toggle background */}
                                <div className="w-11 h-6 bg-[#e5e5e5] rounded-full peer-checked:bg-[#243a68] transition-colors"></div>

                                {/* Toggle knob */}
                                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                                <span className="text-sm font-medium ml-2 text-white">
                                    Drop Off at same location
                                </span>
                            </label>
                        </div>
                        <div className="px-5 flex flex-col items-center">


                            {/* Pick-up Location */}
                            <div className=" flex flex-col relative w-64 mb-5 items-center">
                                <input
                                    type="text"
                                    placeholder="Enter pick-up location..."
                                    className="border rounded-xl p-2 w-full focus:outline-none"
                                    onClick={() => setHide(!hide)}
                                />

                                {/* Dropdown with suggestions (hidden by default) */}
                                {!hide && (<ul className="absolute top-12 left-0 w-full border rounded-xl bg-[#e5e5e5] shadow-lg backdrop-blur-lg z-10 overflow-hidden text-[#243a68]">
                                    <li className="p-2 hover:bg-[#c0c0c0e8] cursor-pointer">
                                        Kochi
                                    </li>
                                    <li className="p-2 hover:bg-[#c0c0c0e8] cursor-pointer">
                                        Trivandrum
                                    </li>
                                    <li className="p-2 hover:bg-[#c0c0c0e8] cursor-pointer">
                                        Bangalore
                                    </li>
                                </ul>)}
                            </div>

                            {/* Drop-off Location (hidden if toggle is checked) */}
                            {!sameLocation && (
                                <div className="relative w-64 mb-5 items-center">
                                    <input
                                        type="text"
                                        placeholder="Enter drop-off location..."
                                        className="border rounded-xl p-2 w-full focus:outline-none"
                                    />
                                    <ul className="absolute top-12 left-0 w-full border rounded-xl bg-white shadow-lg hidden">
                                        <li className="p-2 hover:bg-[#c0c0c0e8] cursor-pointer">
                                            Kochi
                                        </li>
                                        <li className="p-2 hover:bg-[#c0c0c0e8] cursor-pointer">
                                            Trivandrum
                                        </li>
                                        <li className="p-2 hover:bg-[#c0c0c0e8] cursor-pointer">
                                            Bangalore
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {/* Date & Time Pickers */}
                            <div className="flex flex-col gap-5 items-center">
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-white">
                                        Pick-up Date & Time
                                    </label>
                                    <input
                                        type="datetime-local"
                                        className="border rounded-xl p-2 w-60 focus:outline-none"
                                        min={new Date().toISOString().slice(0, 16)} // disable past dates
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-white">
                                        Drop-off Date & Time
                                    </label>
                                    <input
                                        type="datetime-local"
                                        className="border rounded-xl p-2 w-60 focus:outline-none"
                                        min={new Date().toISOString().slice(0, 16)} // disable past dates
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center mt-5">
                                <button
                                    type="submit"
                                    className="bg-[#f9a113] px-6 py-2 font-medium rounded-lg text-black mr-5 hover:bg-[#d48403] transition cursor-pointer"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ================= PAGE CONTENT ================= */}

            <div id="bookNow" className="bg-neutral-800">

                {/* ---------------- Featured Products ---------------- */}
                <div>
                    <div className="flex flex-col items-center pt-20 pb-11">
                        <h2 className="text-3xl font-bold text-white pb-4">Our Top Picks for You</h2>
                        <p className="text-gray-50 text-center px-5 sm:px-20">Explore our selection of the best vehicles, handpicked for quality and performance</p>
                    </div>
                    <div className="pb-7">
                        <ProductList cars={randomCars} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
