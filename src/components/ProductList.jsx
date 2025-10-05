import React from 'react';
import Card from './Card';

/**
 * ProductList Component
 * Displays a grid of car cards.
 * Props:
 * - cars: array of car objects
 * - onBookNow: function called when a car's "Book Now" button is clicked
 */
const ProductList = ({ cars, onBookNow }) => {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
      {cars.map((car) => (
        <Card 
          key={car.id} 
          car={car} 
          onBookNow={() => onBookNow(car)} // Pass selected car to parent handler
        />
      ))}
    </div>
  );
};

export default ProductList;
