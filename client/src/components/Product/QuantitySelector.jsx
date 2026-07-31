const QuantitySelector = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">
        Quantity
      </h3>

      <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">
        <button
          onClick={decreaseQuantity}
          className="h-12 w-12 text-xl font-bold transition hover:bg-gray-100"
        >
          −
        </button>

        <div className="w-14 text-center text-lg font-semibold">
          {quantity}
        </div>

        <button
          onClick={increaseQuantity}
          className="h-12 w-12 text-xl font-bold transition hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;