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

  // -------------------- Unique filter options --------------------
  const uniqueBrands = [...new Set(cars.map(car => car.company))];
  const allSeats = [...new Set(cars.map(car => car.seats))];
  const fuelTypes = [...new Set(cars.map(car => car.fuel))];
  const bodyTypes = [...new Set(cars.map(car => car.type))];

  // -------------------- Search input handler --------------------
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // -------------------- Filter and sort cars --------------------
  const filteredCars = cars.filter(car => {
    const searchMatch = (car.name + ' ' + car.company).toLowerCase().includes(searchTerm.toLowerCase());
    const brandMatch = brandFilter ? car.company.toLowerCase() === brandFilter.toLowerCase() : true;
    const seatMatch = seatFilter ? car.seats === Number(seatFilter) : true;
    const fuelMatch = fuelFilter ? car.fuel.toLowerCase() === fuelFilter.toLowerCase() : true;
    const typeMatch = typeFilter ? car.type.toLowerCase() === typeFilter.toLowerCase() : true;
    return searchMatch && brandMatch && seatMatch && fuelMatch && typeMatch;
  });

  const displayedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === 'lowToHigh') {
      return Number(a.price.replace(/[^0-9]/g, '')) - Number(b.price.replace(/[^0-9]/g, ''));
    } else if (sortBy === 'highToLow') {
      return Number(b.price.replace(/[^0-9]/g, '')) - Number(a.price.replace(/[^0-9]/g, ''));
    }
    return 0;
  });

  // -------------------- Handle "Book Now" click --------------------
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

      {/* Search Bar */}
      <form className="flex items-center bg-white rounded-lg h-11 w-full sm:w-[400px] text-lg pl-3 mx-auto md:mx-0 shadow-md">
        <label htmlFor="search" className="hidden">Search</label>
        <input
          type="search"
          id="search"
          placeholder="Search Your Dream Car..."
          className="flex-1 focus:outline-none text-neutral-800 placeholder-gray-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>

      {/* Filter Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8">
        {[{
          label: 'All Brands',
          value: brandFilter,
          setValue: setBrandFilter,
          options: uniqueBrands
        }, {
          label: 'All Seats',
          value: seatFilter,
          setValue: setSeatFilter,
          options: allSeats.map(seat => `${seat} Seats`)
        }, {
          label: 'All Fuel Types',
          value: fuelFilter,
          setValue: setFuelFilter,
          options: fuelTypes
        }, {
          label: 'All Body Types',
          value: typeFilter,
          setValue: setTypeFilter,
          options: bodyTypes
        }, {
          label: 'Sort by Price',
          value: sortBy,
          setValue: setSortBy,
          options: ['Low to High', 'High to Low']
        }].map((filter, index) => (
          <select
            key={index}
            value={filter.value}
            onChange={(e) => filter.setValue(e.target.value === 'Low to High' || e.target.value === 'High to Low' ? e.target.value === 'Low to High' ? 'lowToHigh' : 'highToLow' : e.target.value)}
            className="p-2 border rounded-md bg-gray-100"
          >
            <option value="">{filter.label}</option>
            {filter.options.map(option => (
              <option key={option} value={option.includes('Seats') ? option.split(' ')[0] : option}>{option}</option>
            ))}
          </select>
        ))}
      </div>

      {/* Car Cards */}
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
