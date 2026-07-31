import products from "../../data/products";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/common/ProductCard";

const FeaturedPage = () => {
  // Option 1: If you have a 'featured' property
  // const featuredProducts = products.filter(product => product.featured);

  // Option 2: Temporary (first 12 products)
  const featuredProducts = products.slice(0, 12);

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Products
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Handpicked premium products curated specially for you.
          </p>

          <p className="mt-2 text-blue-600 font-semibold">
            {featuredProducts.length} Products Available
          </p>
        </div>

        {/* Products */}
        {featuredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              No featured products available.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default FeaturedPage;