import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useProducts } from "../../context/ProductContext";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/common/Breadcrumb";

import ProductHero from "../../components/Product/ProductHero";
import ProductInfo from "../../components/Product/ProductInfo";
import ProductHighlights from "../../components/Product/ProductHighlights";
import ProductSpecifications from "../../components/Product/ProductSpecifications";
import ProductDescription from "../../components/Product/ProductDescription";
import ProductOffers from "../../components/Product/ProductOffers";
import ProductDelivery from "../../components/Product/ProductDelivery";
import ProductReviews from "../../components/Product/ProductReviews";
import RelatedProducts from "../../components/Product/RelatedProducts";
import StickyPurchaseBar from "../../components/Product/StickyPurchaseBar";

const ProductPage = () => {
  const { slug } = useParams();

  const { products, loading } = useProducts();

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center">
          <h2 className="text-2xl font-semibold">Loading...</h2>
        </main>
        <Footer />
      </>
    );
  }

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
          <div className="max-w-md text-center">
            <h1 className="text-5xl font-bold text-slate-900">
              Product Not Found
            </h1>

            <p className="mt-4 text-slate-500">
              Sorry, the product you're looking for doesn't exist or has been
              removed.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 pb-40">
        <div className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Breadcrumb
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label:
                    product.category.charAt(0).toUpperCase() +
                    product.category.slice(1),
                  href: `/category/${product.category}`,
                },
                {
                  label: product.name,
                },
              ]}
            />

            <Link
              to={`/category/${product.category}`}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
            >
              <ArrowLeft size={18} />
              Back to {product.category}
            </Link>
          </div>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ProductHero product={product} />
            </div>

            <div className="lg:col-span-5">
              <ProductInfo product={product} />
            </div>
          </section>

          <section className="mt-12 space-y-8">
            <ProductHighlights highlights={product.highlights} />

            <ProductOffers offers={product.offers} />

            <ProductDelivery delivery={product.delivery} />

            <ProductSpecifications
              specifications={product.specifications}
            />

            <ProductDescription description={product.description} />

            <ProductReviews product={product} />

            <RelatedProducts
              products={products}
              currentProduct={product}
            />
          </section>
        </div>
      </main>

      <Footer />

      <StickyPurchaseBar product={product} />
    </>
  );
};

export default ProductPage;