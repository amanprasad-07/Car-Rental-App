/**
 * CategoryFilter Component
 * ------------------------
 * Renders a list of category buttons for filtering items.
 * Highlights the currently selected category and invokes a callback when a category is selected.
 * 
 * Props:
 * - categories: Array of category names
 * - selected: Currently selected category
 * - onSelect: Function called when a category is selected
 */

import React from "react";

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => {
        const isSelected = selected === category;

        const baseStyles =
          "px-5 py-2.5 rounded-lg font-medium shadow-md transition-all duration-200";
        const selectedStyles = "bg-[#243a68] text-white shadow-lg scale-105";
        const unselectedStyles =
          "bg-[#e5e5e5] text-neutral-950 hover:bg-[#14213d] hover:text-white";

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
