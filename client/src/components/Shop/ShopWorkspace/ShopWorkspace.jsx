import { useEffect, useMemo, useState } from "react";

import Toolbar from "./Toolbar";
import ActiveFilterBar from "./ActiveFilterBar";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

import { useProducts } from "../../../context/ProductContext";

const ShopWorkspace = () => {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    rating: 0,
    maxPrice: 200000,
    inStock: false,
  });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sort, filters]);

  // ===========================
  // Filter Products
  // ===========================
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

      const brandMatch =
        filters.brands.length === 0 ||
        filters.brands.includes(product.brand);

      const priceMatch = product.price <= filters.maxPrice;

      const ratingMatch = product.rating >= filters.rating;

      const stockMatch =
        !filters.inStock || product.stock > 0;

      return (
        searchMatch &&
        categoryMatch &&
        brandMatch &&
        priceMatch &&
        ratingMatch &&
        stockMatch
      );
    });

    switch (sort) {
      case "low-high":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return filtered;
  }, [products, search, filters, sort]);

  const productsPerPage = 9;

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      rating: 0,
      maxPrice: 200000,
      inStock: false,
    });

    setSearch("");
    setSort("featured");
  };

  const removeFilter = ({ type, value }) => {
    setFilters((prev) => {
      switch (type) {
        case "categories":
          return {
            ...prev,
            categories: prev.categories.filter(
              (item) => item !== value
            ),
          };

        case "brands":
          return {
            ...prev,
            brands: prev.brands.filter(
              (item) => item !== value
            ),
          };

        case "rating":
          return {
            ...prev,
            rating: 0,
          };

        case "price":
          return {
            ...prev,
            maxPrice: 200000,
          };

        case "stock":
          return {
            ...prev,
            inStock: false,
          };

        default:
          return prev;
      }
    });
  };

  // ===========================
  // Loading State
  // ===========================
  if (loading) {
    return (
      <section className="pb-20">
        <div className="flex h-96 items-center justify-center">
          <h2 className="text-2xl font-semibold text-slate-600">
            Loading Products...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-20">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

        <Toolbar
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
          totalProducts={filteredProducts.length}
          clearFilters={clearFilters}
        />

        <ActiveFilterBar
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />

        <div className="grid lg:grid-cols-[280px_1fr]">

          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
          />

          <ProductGrid
            products={currentProducts}
            view={view}
          />

        </div>

        <div className="p-8">

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />

        </div>

      </div>
    </section>
  );
};

export default ShopWorkspace;