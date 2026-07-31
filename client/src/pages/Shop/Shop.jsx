import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ShopHero from "../../components/Shop/ShopHero";
import ShopWorkspace from "../../components/Shop/ShopWorkspace/ShopWorkspace";
import RecentlyViewed from "../../components/Shop/RecentlyViewed/RecentlyViewed";
import Newsletter from "../../components/Shop/Newsletter/Newsletter";

const Shop = () => {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50">
        <div className="mx-auto max-w-[1600px] px-6 py-8">

          <ShopHero />

          <ShopWorkspace />

          <RecentlyViewed />

          <Newsletter />

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Shop;