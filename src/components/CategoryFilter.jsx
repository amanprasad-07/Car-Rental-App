function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="flex justify-center gap-4 mb-6 flex-wrap">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-lg border cursor-pointer ${
            selected === cat
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;