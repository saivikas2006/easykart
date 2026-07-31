import { useNavigate, Link } from "react-router-dom";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Headphones,
  Settings,
  LogOut,
  ChevronRight,
  ShoppingCart,
  ShieldCheck,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { Navigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const { user, logout, isGuest } = useAuth();
  const { wishlistCount } = useWishlist();
  const { itemCount } = useCart();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user && !isGuest) {
  return <Navigate to="/login" replace />;
}

  const menuItems = [
    {
      title: "My Orders",
      subtitle: "Track all your purchases",
      icon: Package,
      link: "/orders",
    },
    {
      title: "Wishlist",
      subtitle: `${wishlistCount} saved products`,
      icon: Heart,
      link: "/wishlist",
    },
    {
  title: "Saved Addresses",
  subtitle: "Manage delivery addresses",
  icon: MapPin,
  link: "/addresses",
},
    {
      title: "Payment Methods",
      subtitle: "Cards & UPI",
      icon: CreditCard,
      link: "#",
    },
    {
  title: "Support",
  subtitle: "Help Center",
  icon: Headphones,
  link: "/support",
},
{
  title: "Settings",
  subtitle: "App Preferences",
  icon: Settings,
  link: "/settings",
},
  ];

  const iconColors = {
    "My Orders": "bg-blue-100 text-blue-600",
    Wishlist: "bg-rose-100 text-rose-500",
    "Saved Addresses": "bg-emerald-100 text-emerald-600",
    "Payment Methods": "bg-violet-100 text-violet-600",
    Support: "bg-orange-100 text-orange-600",
    Settings: "bg-slate-200 text-slate-700",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-100">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-500 pb-28 pt-8">

        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="flex flex-col items-center">

            {/* Avatar */}

            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white text-3xl font-bold text-blue-600 shadow-2xl">

              {isGuest
                ? "G"
                : user.name.charAt(0).toUpperCase()}

            </div>

            <p className="mt-5 text-sm uppercase tracking-[4px] text-sky-100">

              Welcome Back

            </p>

            <h1 className="mt-2 text-3xl font-bold text-white">

              {isGuest
                ? "Guest User"
                : user.name}

            </h1>

            {!isGuest && (
              <>
                <p className="mt-3 text-sky-100">
                  {user.email}
                </p>

                <p className="text-sky-100">
                  {user.mobile}
                </p>
              </>
            )}

          </div>

        </div>

      </section>

      {/* ================= CONTENT ================= */}

      <div className="relative z-20 -mt-16 mx-auto max-w-6xl px-6">

        {/* Guest Card */}

        {isGuest && (

          <div className="mb-8 overflow-hidden rounded-[30px] border border-white/60 bg-white/90 shadow-2xl backdrop-blur-xl">

            <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center">

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-cyan-100">

                <User
                  size={42}
                  className="text-blue-600"
                />

              </div>

              <div className="flex-1">

                <h2 className="text-3xl font-bold text-slate-800">
                  Guest Mode
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600 leading-7">

                  Sign in to place orders, manage addresses,
                  save payment methods, view order history,
                  and enjoy a personalized shopping experience.

                </p>

                <div className="mt-7 flex flex-wrap gap-4">

                  <Link
                    to="/login"
                    className="rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="rounded-2xl border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    Create Account
                  </Link>

                </div>

              </div>

              <div className="hidden lg:block">

                <ShieldCheck
                  size={110}
                  className="text-sky-200"
                />

              </div>

            </div>

          </div>

        )}

                {/* ================= STATS ================= */}

        <div className="grid gap-6 md:grid-cols-3">

          {/* Cart */}

          <div className="group rounded-[28px] border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Cart Items
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-800">
                  {itemCount}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Products ready to checkout
                </p>

              </div>

              <div className="rounded-2xl bg-blue-100 p-4 transition duration-300 group-hover:scale-110">

                <ShoppingCart
                  size={32}
                  className="text-blue-600"
                />

              </div>

            </div>

          </div>

          {/* Wishlist */}

          <div className="group rounded-[28px] border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Wishlist
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-800">
                  {wishlistCount}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Saved favourite products
                </p>

              </div>

              <div className="rounded-2xl bg-rose-100 p-4 transition duration-300 group-hover:scale-110">

                <Heart
                  size={32}
                  className="text-rose-500"
                />

              </div>

            </div>

          </div>

          {/* Member */}

          <div className="group rounded-[28px] border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Membership
                </p>

                <h2 className="mt-3 text-2xl font-bold text-emerald-600">

                  {isGuest ? "Guest" : "Registered"}

                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  EasyKart Account
                </p>

              </div>

              <div className="rounded-2xl bg-emerald-100 p-4 transition duration-300 group-hover:scale-110">

                <User
                  size={32}
                  className="text-emerald-600"
                />

              </div>

            </div>

          </div>

        </div>

        {/* ================= ACCOUNT ================= */}

        <div className="mt-12 mb-6">

          <h2 className="text-3xl font-bold text-slate-800">
            Your Account
          </h2>

          <p className="mt-2 text-slate-500">
            Manage your shopping experience
          </p>

        </div>

        {/* ================= MENU ================= */}

        <div className="grid gap-6 lg:grid-cols-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.title}
                to={item.link}
                className="group rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <div
                      className={`rounded-2xl p-4 transition duration-300 group-hover:scale-110 ${iconColors[item.title]}`}
                    >

                      <Icon size={28} />

                    </div>

                    <div>

                      <h3 className="text-lg font-bold text-slate-800">

                        {item.title}

                      </h3>

                      <p className="mt-1 text-sm text-slate-500">

                        {item.subtitle}

                      </p>

                    </div>

                  </div>

                  <div className="rounded-full bg-slate-100 p-2 transition duration-300 group-hover:bg-sky-100">

                    <ChevronRight
                      className="text-slate-500 group-hover:text-sky-600"
                      size={20}
                    />

                  </div>

                </div>

              </Link>

            );

          })}

        </div>
                {/* ================= LOGOUT ================= */}

        <div className="mt-12">

          <button
            onClick={handleLogout}
            className="group flex w-full items-center justify-center gap-3 rounded-[28px] bg-gradient-to-r from-red-500 to-red-600 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <LogOut
              size={22}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Logout

          </button>

        </div>

        {/* ================= FOOTER ================= */}

        <footer className="mt-14 mb-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-500 shadow-2xl">

          <div className="px-8 py-10">

            <div className="flex flex-col items-center text-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">

                <User
                  size={40}
                  className="text-white"
                />

              </div>

              <h2 className="mt-5 text-3xl font-bold text-white">
                EasyKart
              </h2>

              <p className="mt-3 max-w-xl text-sky-100">
                Shopping Made Easy. Discover amazing products,
                fast delivery, secure payments, and an effortless
                shopping experience.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <div className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur">
                  Secure Checkout
                </div>

                <div className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur">
                  Fast Delivery
                </div>

                <div className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur">
                  24×7 Support
                </div>

              </div>

              <div className="my-8 h-px w-full bg-white/20"></div>

              <p className="text-sm text-sky-100">
                Version 1.0 • © 2026 EasyKart. All Rights Reserved.
              </p>

            </div>

          </div>

        </footer>

      </div>

    </div>
  );
}

export default Account;
