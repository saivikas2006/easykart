import { Link } from "react-router-dom";

// Update this path according to your project
import ProductCard from "../Shop/ShopWorkspace/ProductCard";

// Update this path according to your products file
import products from "../../data/products";

const RecommendedProducts = () => {
  // Display first 4 products
  const recommended = products.slice(0, 4);

  return (
    <section className="mt-16">

      {/* Heading */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            You May Also Like
          </h2>

          <p className="mt-2 text-slate-500">
            Customers also bought these products.
          </p>

        </div>

        <Link
          to="/shop"
          className="hidden rounded-xl border border-blue-600 px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white md:block"
        >
          View All
        </Link>

      </div>

      {/* Products */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {recommended.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

      {/* Mobile Button */}

      <div className="mt-8 text-center md:hidden">

        <Link
          to="/shop"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          View All Products
        </Link>

      </div>

    </section>
  );
};

export default RecommendedProducts;