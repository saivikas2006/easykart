import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import CartHero from "../../components/Cart/CartHero";
import CartItems from "../../components/Cart/CartItems";
import CartSummary from "../../components/Cart/CartSummary";
import EmptyCart from "../../components/Cart/EmptyCart";
import RecommendedProducts from "../../components/Cart/RecommendedProducts";
import Newsletter from "../../components/Shop/Newsletter/Newsletter";

import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">

        <div className="mx-auto max-w-[1600px] px-6 py-8">

          <CartHero />

          {cartItems.length === 0 ? (

            <EmptyCart />

          ) : (

            <>
              <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">

                <CartItems />

                <CartSummary />

              </section>

              <RecommendedProducts />

            </>

          )}

          <Newsletter />

        </div>

      </main>

      <Footer />
    </>
  );
};

export default Cart;