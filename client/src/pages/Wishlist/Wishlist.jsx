import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import WishlistCard from "../../components/Wishlist/WishlistCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 flex items-center gap-3">
        <Heart className="fill-red-500 text-red-500" size={30} />
        <h1 className="text-3xl font-bold">
          My Wishlist ({wishlist.length})
        </h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Heart
            size={80}
            className="mb-6 text-slate-300"
          />

          <h2 className="text-2xl font-semibold">
            Your Wishlist is Empty
          </h2>

          <p className="mt-2 text-slate-500">
            Save products you love and they'll appear here.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((product) => (
            <WishlistCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;