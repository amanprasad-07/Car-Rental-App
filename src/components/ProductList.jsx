import React from 'react';
import Card from './Card';

const ProductList = ({ cars }) => {
  return (
    <div className="grid gap-15 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {cars.map(car => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
};

export default ProductList;
