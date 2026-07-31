import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FlashSale from "../../components/FlashSale/FlashSale";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import FeaturedCollections from "../../components/Shop/FeaturedCollections";
import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Categories />
      <FlashSale />
      <TrendingProducts />
      <FeaturedCollections />
      <TrustedBrands />
      <CustomerReviews />
      <Newsletter />
      <Footer />  
      

    </main>
  );
}

export default Home;