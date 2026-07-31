import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

import Logo from "../../common/Logo/Logo";
import products from "../../../data/products";
import SearchSuggestions from "../../Search/SearchSuggestions";

import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useAuth } from "../../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[260px_1fr_300px] items-center px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transition-transform duration-200 hover:scale-105"
        >
          <Logo />
        </Link>

        {/* Search */}
        <div className="flex justify-center pl-10">
          <div className="relative w-full max-w-[600px]">

            <div className="flex h-12 items-center rounded-full bg-gray-100 px-5">
              <FiSearch className="mr-3 text-xl text-gray-500" />

              <input
                type="text"
                value={query}
                placeholder="Search for products, brands and more..."
                className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-500"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && query.trim()) {
                    navigate(`/search?q=${query}`);
                  }
                }}
              />
            </div>

            <SearchSuggestions
              query={query}
              results={filteredProducts}
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-end gap-7">

          {/* Wishlist */}
          <Link to="/wishlist">
            <div className="relative transition hover:scale-110">
              <FiHeart className="text-[30px] hover:text-red-500" />

              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-lg">
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </div>
          </Link>

          {/* Shop */}
          <Link
            to="/shop"
            className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-orange-50 hover:text-orange-500"
          >
            <FiShoppingBag className="text-[28px]" />

            <span className="hidden text-sm font-semibold lg:block">
              Shop
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <div className="relative transition hover:scale-110">
              <FiShoppingCart className="text-[30px] hover:text-blue-600" />

              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-lg">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </div>
          </Link>

          {/* Account */}
          <Link
            to={user ? "/account" : "/login"}
            className="flex items-center gap-2 transition hover:text-orange-500"
          >
            <FiUser className="text-[30px]" />

            {user && (
              <span className="hidden text-sm font-semibold lg:block">
                {user.guest ? "Guest" : user.name}
              </span>
            )}
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;