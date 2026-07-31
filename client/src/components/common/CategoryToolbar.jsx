import { ArrowUpDown, SlidersHorizontal } from "lucide-react";

const CategoryToolbar = ({
  totalProducts,
  sortOption,
  setSortOption,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

      {/* Left */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          Showing {totalProducts} Products
        </h3>

        <p className="text-gray-500 text-sm">
          Find the perfect product for your needs.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Filter (Coming Soon) */}
        <button
          className="
            flex items-center gap-2
            border border-gray-300
            rounded-xl
            px-4 py-2.5
            hover:bg-gray-100
            transition
          "
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        {/* Sort */}
        <div className="relative">
          <ArrowUpDown
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="
              pl-10
              pr-10
              py-2.5
              rounded-xl
              border
              border-gray-300
              outline-none
              focus:ring-2
              focus:ring-blue-500
              bg-white
              cursor-pointer
            "
          >
            <option value="featured">Featured</option>
            <option value="latest">Latest</option>
            <option value="price-low">Price : Low to High</option>
            <option value="price-high">Price : High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="discount">Biggest Discount</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default CategoryToolbar;