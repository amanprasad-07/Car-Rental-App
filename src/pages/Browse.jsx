import React from 'react'
import Card from '../components/Card'
import { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter';
import cars from '../data/cars';
import ProductList from '../components/ProductList';

function Browse() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(cars.map(p => p.type))];

  const filteredProducts =
    selectedCategory === "All"
      ? cars
      : cars.filter(p => p.type === selectedCategory);
  return (
    <>
      <div className='flex flex-col items-center bg-neutral-800 pt-30 py-5'>
        <h1 className='text-white text-3xl font-bold pb-4'>Find Your Dream Car</h1>
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
        <div className='py-7 px-7'>
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <ProductList cars={filteredProducts} />
        </div>
      </div>
    </>
  )
}

export default Browse
