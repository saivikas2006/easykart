import { Link } from "react-router-dom";

const OrderProducts = ({ items }) => {
  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Ordered Products
      </h2>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={item._id || index}
            className="flex flex-col gap-5 rounded-2xl border p-5 transition hover:shadow-md md:flex-row md:items-center"
          >
            {/* Product Image */}
            <img
              src={item.product?.images?.[0]}
              alt={item.product?.name}
              className="h-28 w-28 rounded-2xl border object-cover"
            />

            {/* Product Details */}
            <div className="flex-1">
              <Link
                to={`/product/${item.product?.slug}`}
                className="text-xl font-semibold text-slate-900 hover:text-blue-600"
              >
                {item.product?.name}
              </Link>

              <p className="mt-2 text-slate-500">
                Quantity : {item.quantity}
              </p>

              <p className="mt-2 text-lg font-bold text-blue-600">
                ₹{item.product?.price.toLocaleString()}
              </p>
            </div>

            {/* Total */}
            <div className="text-right">
              <p className="text-sm text-slate-500">
                Total
              </p>

              <p className="text-2xl font-bold">
                ₹
                {(
                  item.product.price * item.quantity
                ).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderProducts;