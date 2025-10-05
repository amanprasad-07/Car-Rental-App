import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import { setSelectedCar } from '../features/bookingSlice';
import cars from '../data/cars';

function Browse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for selected car category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from car list + include "All"
  const categories = ["All", ...new Set(cars.map(car => car.type))];

  /**
   * Filter cars based on selected category
   * - Show all cars if "All" is selected
   * - Otherwise filter by category type
   */
  const filteredCars =
    selectedCategory === "All"
      ? cars
      : cars.filter(car => car.type === selectedCategory);

  /**
   * Handle "Book Now" button click
   * - Save selected car in Redux
   * - Navigate to booking confirmation page
   */
  const handleBookNow = (car) => {
    dispatch(setSelectedCar(car));
    navigate("/booking-confirmation");
  };

  return (
    <div className="flex flex-col items-center bg-neutral-800 pt-28 p-7 min-h-screen">
      {/* Page Title */}
      <h1 className="text-white text-3xl font-bold pb-7 text-center">
        Find Your Dream Car
      </h1>

      {/* Search Bar (UI Only for Now) */}
      <form
        className="flex items-center bg-white rounded-lg h-11 w-full sm:w-[400px] text-lg pl-3 mx-auto md:mx-0 shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search Your Dream Car..."
          className="flex-1 focus:outline-none text-neutral-800 placeholder-gray-500"
        />
        <button
          type="submit"
          className="px-4 bg-[#fca311] font-semibold border-none h-full rounded-md rounded-l-none hover:bg-[#e29500] transition-colors text-black"
        >
          Search
        </button>
      </form>

      {/* Category Filter Buttons */}
      <div className="py-7 w-full">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Car Cards Grid */}
        <ProductList cars={filteredCars} onBookNow={handleBookNow} />
      </div>
    </div>
  );
}

export default Browse;
