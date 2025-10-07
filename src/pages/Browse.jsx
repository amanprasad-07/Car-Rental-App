import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { setSelectedCar } from '../features/bookingSlice';
import cars from '../data/cars';

function Browse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // -------------------- State --------------------
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [seatFilter, setSeatFilter] = useState('');
  const [fuelFilter, setFuelFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  // -------------------- Extract unique filter options --------------------
  const uniqueBrands = [...new Set(cars.map(car => car.company))];
  const allSeats = [...new Set(cars.map(car => car.seats))];
  const fuelTypes = [...new Set(cars.map(car => car.fuel))];
  const bodyTypes = [...new Set(cars.map(car => car.type))];

  // -------------------- Search input handler --------------------
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // -------------------- Filter cars based on search and filters --------------------
  const filteredCars = cars.filter((car) => {
    const matchesSearch = (car.name + ' ' + car.company)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesBrand = brandFilter
      ? car.company.trim().toLowerCase() === brandFilter.trim().toLowerCase()
      : true;

    const matchesSeat = seatFilter ? car.seats === Number(seatFilter) : true;

    const matchesFuel = fuelFilter
      ? car.fuel.trim().toLowerCase() === fuelFilter.trim().toLowerCase()
      : true;

    const matchesType = typeFilter
      ? car.type.trim().toLowerCase() === typeFilter.trim().toLowerCase()
      : true;

    return matchesSearch && matchesBrand && matchesSeat && matchesFuel && matchesType;
  });

  // -------------------- Sort cars by price --------------------
  const sortCars = (carsToSort) => {
    if (sortBy === 'lowToHigh') {
      return [...carsToSort].sort(
        (a, b) =>
          Number(a.price.replace(/[^0-9]/g, '')) -
          Number(b.price.replace(/[^0-9]/g, ''))
      );
    } else if (sortBy === 'highToLow') {
      return [...carsToSort].sort(
        (a, b) =>
          Number(b.price.replace(/[^0-9]/g, '')) -
          Number(a.price.replace(/[^0-9]/g, ''))
      );
    }
    return carsToSort;
  };

  const displayedCars = sortCars(filteredCars);

  // -------------------- Handle "Book Now" button --------------------
  const handleBookNow = (car) => {
    dispatch(setSelectedCar(car));
    navigate('/booking-confirmation');
  };

  return (
    <div className="flex flex-col items-center bg-neutral-900 pt-28 p-7 min-h-screen">
      {/* Page Title */}
      <h1 className="text-[#fca311] text-4xl font-bold pb-7 text-center">
        Find Your Dream Car
      </h1>

      {/* -------------------- Search Bar -------------------- */}
      <form className="flex items-center bg-white rounded-lg h-11 w-full sm:w-[400px] text-lg pl-3 mx-auto md:mx-0 shadow-md">
        <label htmlFor="search" className="hidden">
          Search
        </label>
        <input
          type="search"
          id="search"
          placeholder="Search Your Dream Car..."
          className="flex-1 focus:outline-none text-neutral-800 placeholder-gray-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>

      {/* -------------------- Filter Section -------------------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 my-8">
        {/* Brand Filter */}
        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="p-2 border rounded-md bg-gray-100"
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Seat Filter */}
        <select
          value={seatFilter}
          onChange={(e) => setSeatFilter(e.target.value)}
          className="p-2 border rounded-md bg-gray-100"
        >
          <option value="">All Seats</option>
          {allSeats.map((seat) => (
            <option key={seat} value={seat}>
              {seat} Seats
            </option>
          ))}
        </select>

        {/* Fuel Filter */}
        <select
          value={fuelFilter}
          onChange={(e) => setFuelFilter(e.target.value)}
          className="p-2 border rounded-md bg-gray-100"
        >
          <option value="">All Fuel Types</option>
          {fuelTypes.map((fuel) => (
            <option key={fuel} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>

        {/* Body Type Filter */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border rounded-md bg-gray-100"
        >
          <option value="">All Body Types</option>
          {bodyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Sort By Price */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded-md bg-gray-100"
        >
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* -------------------- Car Cards Grid -------------------- */}
      {displayedCars.length > 0 ? (
        <ProductList cars={displayedCars} onBookNow={handleBookNow} />
      ) : (
        <div className="text-center mt-20 text-gray-400">
          <p className="text-xl">No cars found for "{searchTerm}"</p>
          <p className="mt-2 text-sm">Try searching for another model or brand.</p>
        </div>
      )}
    </div>
  );
}

export default Browse;
