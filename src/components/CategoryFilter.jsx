import React from "react";

/**
 * CategoryFilter Component
 * Displays a list of category buttons for filtering products/cars.
 * Highlights the selected category.
 * 
 * Props:
 * - categories: Array of category names
 * - selected: Currently selected category
 * - onSelect: Callback function when a category is selected
 */
function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((cat) => {
        const isSelected = selected === cat;

        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-5 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200
              ${isSelected
                ? "bg-[#243a68] text-white shadow-lg scale-105"
                : "bg-[#e5e5e5] text-neutral-950 hover:bg-[#14213d] hover:text-white"
              }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
