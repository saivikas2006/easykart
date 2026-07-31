import { X } from "lucide-react";

const ActiveFilterBar = ({ filters, removeFilter, clearFilters }) => {
  const activeFilters = [];

  // Categories
  filters.categories.forEach((category) => {
    activeFilters.push({
      type: "categories",
      value: category,
      label: category,
    });
  });

  // Brands
  filters.brands.forEach((brand) => {
    activeFilters.push({
      type: "brands",
      value: brand,
      label: brand,
    });
  });

  // Rating
  if (filters.rating > 0) {
    activeFilters.push({
      type: "rating",
      value: filters.rating,
      label: `${filters.rating}★ & Up`,
    });
  }

  // Price
  if (filters.maxPrice < 200000) {
    activeFilters.push({
      type: "price",
      value: filters.maxPrice,
      label: `₹0 - ₹${filters.maxPrice.toLocaleString()}`,
    });
  }

  // Stock
  if (filters.inStock) {
    activeFilters.push({
      type: "stock",
      value: true,
      label: "In Stock",
    });
  }

  if (activeFilters.length === 0) return null;

  return (
    <div className="border-b border-slate-200 bg-slate-50 px-8 py-4">

      <div className="flex flex-wrap items-center gap-3">

        <span className="text-sm font-semibold text-slate-600">
          Active Filters
        </span>

        {activeFilters.map((filter, index) => (
          <button
            key={index}
            onClick={() => removeFilter(filter)}
            className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200"
          >
            {filter.label}

            <X size={15} />
          </button>
        ))}

        <button
          onClick={clearFilters}
          className="ml-auto text-sm font-semibold text-red-500 hover:text-red-600"
        >
          Clear All
        </button>

      </div>

    </div>
  );
};

export default ActiveFilterBar;