import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { useProducts } from "../../context/ProductContext";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/common/ProductCard";
import CategoryBanner from "../../components/Categories/CategoryBanner";
import Breadcrumb from "../../components/common/Breadcrumb";
import CategoryToolbar from "../../components/common/CategoryToolbar";

const CategoryPage = () => {
  const { slug } = useParams();
  const { products } = useProducts();
  const [sortOption, setSortOption] = useState("featured");

  const categoryProducts = useMemo(() => {
    const filtered = products.filter(
      (product) => product.category === slug
    );

    switch (sortOption) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);

      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);

      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);

      case "discount":
        return [...filtered].sort((a, b) => b.discount - a.discount);

      case "latest":
        return [...filtered].sort((a, b) => b.id - a.id);

      default:
        return filtered;
    }
  }, [slug, sortOption]);

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto py-14 px-6 md:px-10 lg:px-14 min-h-screen">

        <Breadcrumb
          items={[
            {
              label:
                slug.charAt(0).toUpperCase() +
                slug.slice(1).replace("-", " "),
            },
          ]}
        />

        <CategoryBanner
          slug={slug}
          count={categoryProducts.length}
        />

        <CategoryToolbar
          totalProducts={categoryProducts.length}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {categoryProducts.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-3xl font-bold text-gray-700">
              No products found
            </h2>

            <p className="mt-3 text-gray-500">
              We're adding products to this category soon.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10"
          >
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </motion.div>
        )}

      </section>

      <Footer />
    </>
  );
};

export default CategoryPage;