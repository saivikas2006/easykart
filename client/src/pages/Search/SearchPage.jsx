import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/common/Breadcrumb";
import ProductCard from "../../components/common/ProductCard";

import products from "../../data/products";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const search = query.toLowerCase();

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.brand.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );
    });
  }, [query]);

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto py-14 px-6 md:px-10 lg:px-14 min-h-screen">

        <Breadcrumb
          items={[
            {
              label: "Search",
            },
          ]}
        />

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Search Results
          </h1>

          <p className="mt-2 text-gray-500">
            {results.length} result{results.length !== 1 ? "s" : ""} found for{" "}
            <span className="font-semibold text-blue-600">
              "{query}"
            </span>
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-3xl font-bold text-gray-700">
              No products found
            </h2>

            <p className="mt-3 text-gray-500">
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {results.map((product) => (
              <ProductCard
  key={product.id}
  product={product}
  isSearch={true}
/>
            ))}
          </div>
        )}

      </section>

      <Footer />
    </>
  );
};

export default SearchPage;