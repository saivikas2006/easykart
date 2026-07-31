import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";

const CartItems = () => {
  const { cartItems } = useCart();

  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItems;