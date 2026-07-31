import {
  SlidersHorizontal,
  ChevronDown,
  RotateCcw,
  Star,
} from "lucide-react";
import { useState } from "react";

const categories = [
  "electronics",
  "fashion",
  "grocery",
  "home",
  "sports",
  "beauty",
  "accessories",
];

const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Nike",
  "Adidas",
  "OnePlus",
  "Puma",
];

const FilterSidebar = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    categories: true,
    brands: true,
    price: true,
    rating: true,
    stock: true,
  });

  const toggleCategory = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((item) => item !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleBrand = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((item) => item !== brand)
        : [...prev.brands, brand],
    }));
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      rating: 0,
      maxPrice: 200000,
      inStock: false,
    });
  };

  const Section = ({ title, name, children }) => (
    <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">

      <button
        onClick={() =>
          setOpen((prev) => ({
            ...prev,
            [name]: !prev[name],
          }))
        }
        className="flex w-full items-center justify-between"
      >
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          {title}
        </h3>

        <ChevronDown
          size={18}
          className={`transition duration-300 ${
            open[name] ? "rotate-180" : ""
          }`}
        />
      </button>

      {open[name] && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <aside className="sticky top-24 h-fit rounded-l-3xl border-r border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-blue-100 p-3">
            <SlidersHorizontal
              className="text-blue-600"
              size={20}
            />
          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Filters
            </h2>

            <p className="text-xs text-slate-500">
              Refine your shopping
            </p>

          </div>

        </div>

        <button
          onClick={resetFilters}
          className="rounded-xl bg-red-50 p-2 text-red-500 transition hover:bg-red-100"
        >
          <RotateCcw size={18} />
        </button>

      </div>

      {/* Categories */}

      <Section title="Categories" name="categories">

        <div className="flex flex-wrap gap-2">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                filters.categories.includes(category)
                  ? "border-blue-600 bg-blue-600 text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </Section>

      {/* Brands */}

      <Section title="Brands" name="brands">

        <div className="space-y-3">

          {brands.map((brand) => (

            <label
              key={brand}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-3 py-2 transition hover:border-blue-200 hover:bg-blue-50"
            >

              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="accent-blue-600"
                />

                <span className="font-medium text-slate-700">
                  {brand}
                </span>

              </div>

            </label>

          ))}

        </div>

      </Section>
            {/* Price */}

      <Section title="Price" name="price">

        <div className="space-y-5">

          <input
            type="range"
            min={0}
            max={200000}
            step={1000}
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                maxPrice: Number(e.target.value),
              }))
            }
            className="w-full cursor-pointer accent-blue-600"
          />

          <div className="rounded-2xl bg-blue-50 p-4">

            <div className="flex items-center justify-between text-sm font-semibold text-slate-700">

              <span>₹0</span>

              <span>
                ₹{filters.maxPrice.toLocaleString()}
              </span>

            </div>

          </div>

        </div>

      </Section>

      {/* Rating */}

      <Section title="Customer Rating" name="rating">

        <div className="space-y-3">

          {[5, 4, 3].map((rating) => (

            <button
              key={rating}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  rating,
                }))
              }
              className={`flex w-full items-center justify-between rounded-2xl border p-4 shadow-sm transition-all duration-300 ${
                filters.rating === rating
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              }`}
            >

              <div className="flex items-center gap-1">

                {[...Array(rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#FACC15"
                    color="#FACC15"
                  />
                ))}

              </div>

              <span className="text-sm font-medium text-slate-600">
                & Up
              </span>

            </button>

          ))}

        </div>

      </Section>

      {/* Availability */}

      <Section title="Availability" name="stock">

        <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">

          <div>

            <p className="font-medium text-slate-800">
              In Stock Only
            </p>

            <p className="text-xs text-slate-500">
              Hide unavailable products
            </p>

          </div>

          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                inStock: e.target.checked,
              }))
            }
            className="h-5 w-5 accent-blue-600"
          />

        </label>

      </Section>

      {/* Reset Button */}

      <button
        onClick={resetFilters}
        className="mt-2 w-full rounded-2xl bg-blue-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
      >
        Reset All Filters
      </button>

    </aside>
  );
};

export default FilterSidebar;