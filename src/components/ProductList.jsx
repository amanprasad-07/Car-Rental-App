/**
 * ProductList Component
 * ---------------------
 * Renders a responsive grid of car cards and passes booking events to the parent handler.
 */

import React from "react";
import Card from "./Card";

const ProductList = ({ cars, onBookNow }) => {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
      {cars.map((car) => (
        <Card
          key={car.id}
          car={car}
          onBookNow={() => onBookNow(car)}
        />
      ))}
    </div>
  );
};

export default ProductList;
