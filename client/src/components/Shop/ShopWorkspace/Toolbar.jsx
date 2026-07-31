import {
  Search,
  LayoutGrid,
  List,
  ArrowUpDown,
  RotateCcw,
  Package,
} from "lucide-react";

const Toolbar = ({
  search,
  setSearch,
  sort,
  setSort,
  view,
  setView,
  totalProducts,
  clearFilters,
}) => {
  return (
    <div className="border-b border-slate-200 bg-white px-6 py-4">

      <div className="flex flex-wrap items-center justify-between gap-4">

        {/* Product Count */}
        <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-2">

          <div className="rounded-lg bg-blue-100 p-2">
            <Package
              size={18}
              className="text-blue-600"
            />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-500">
              Products
            </p>

            <h3 className="text-base font-bold text-slate-900">
              {totalProducts} Items
            </h3>
          </div>

        </div>

        {/* Search */}
        <div className="relative flex-1 min-w-[280px] max-w-xl">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-11
              pr-4
              text-sm
              outline-none
              transition-all
              focus:border-blue-500
              focus:bg-white
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Sort */}
          <div className="relative">

            <ArrowUpDown
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                h-11
                w-48
                appearance-none
                rounded-xl
                border
                border-slate-200
                bg-white
                pl-10
                pr-8
                text-sm
                font-medium
                outline-none
                transition
                hover:border-blue-500
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="rating">Highest Rated</option>
            </select>

          </div>

          {/* View Toggle */}
          <div className="flex overflow-hidden rounded-xl border border-slate-200">

            <button
              onClick={() => setView("grid")}
              className={`flex h-11 w-11 items-center justify-center transition ${
                view === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`flex h-11 w-11 items-center justify-center transition ${
                view === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              <List size={18} />
            </button>

          </div>

          {/* Reset */}
          <button
            onClick={clearFilters}
            className="
              flex
              h-11
              items-center
              gap-2
              rounded-xl
              border
              border-red-200
              bg-red-50
              px-4
              text-sm
              font-semibold
              text-red-600
              transition
              hover:bg-red-100
            "
          >
            <RotateCcw size={16} />
            Reset
          </button>

        </div>

      </div>

    </div>
  );
};

export default Toolbar;