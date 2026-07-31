import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import { useAuth } from "./AuthContext";

import {
  getWishlist,
  addToWishlistApi,
  removeWishlistApi,
} from "../api/wishlistApi";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { user } = useAuth();

  const [wishlist, setWishlist] = useState([]);

  // ===========================
  // Load Wishlist
  // ===========================

  const fetchWishlist = async () => {
    if (!user || user.guest) {
      setWishlist([]);
      return;
    }

    try {
      const data = await getWishlist(user.id);
      setWishlist(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  // ===========================
  // Check Wishlist
  // ===========================

  const isWishlisted = (productId) => {
    if (!productId) return false;

    return wishlist.some(
      (item) =>
        item.product?._id === productId ||
        item.product?.id === productId
    );
  };

  // ===========================
  // Add Wishlist
  // ===========================

  const addToWishlist = async (product) => {
    if (!user || user.guest) {
      toast.error("Please Login");
      return;
    }

    const productId = product?._id || product?.id;

    if (!productId) {
      console.error("Invalid product:", product);
      toast.error("Invalid product");
      return;
    }

    if (isWishlisted(productId)) {
      toast("Already in Wishlist ❤️");
      return;
    }

    try {
      await addToWishlistApi({
        userId: user.id,
        productId,
      });

      await fetchWishlist();

      toast.success("Added to Wishlist ❤️");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to Wishlist");
    }
  };

  // ===========================
  // Remove Wishlist
  // ===========================

  const removeFromWishlist = async (wishlistId) => {
    try {
      await removeWishlistApi(wishlistId);

      await fetchWishlist();

      toast.success("Removed from Wishlist");
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove");
    }
  };

  // ===========================
  // Toggle Wishlist
  // ===========================

  const toggleWishlist = async (product) => {
    const productId = product?._id || product?.id;

    if (!productId) {
      toast.error("Invalid product");
      return;
    }

    const item = wishlist.find(
      (w) =>
        w.product?._id === productId ||
        w.product?.id === productId
    );

    if (item) {
      await removeFromWishlist(item._id);
    } else {
      await addToWishlist(product);
    }
  };

  // ===========================
  // Clear Wishlist
  // ===========================

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,

        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,

        isWishlisted,
        fetchWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}