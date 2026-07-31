import React from "react";

const OrderDetailsModal = ({ order, isOpen, onClose }) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-[700px] max-h-[90vh] overflow-y-auto p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Order Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        {/* Order Info */}

        <div className="grid grid-cols-2 gap-4 mb-6">

          <div>
            <p className="font-semibold">Order Number</p>
            <p>{order.orderNumber}</p>
          </div>

          <div>
            <p className="font-semibold">Status</p>
            <p>{order.orderStatus}</p>
          </div>

          <div>
            <p className="font-semibold">Payment</p>
            <p>{order.paymentMethod}</p>
          </div>

          <div>
            <p className="font-semibold">Total</p>
            <p>₹{order.totalAmount}</p>
          </div>

        </div>

        {/* Customer */}

        <div className="mb-6">

          <h3 className="font-bold text-lg mb-2">
            Customer
          </h3>

          <p>
            {order.user?.name || "Guest"}
          </p>

          <p>
            {order.user?.email}
          </p>

        </div>

        {/* Shipping */}

        <div className="mb-6">

          <h3 className="font-bold text-lg mb-2">
            Shipping Address
          </h3>

          <p>{order.shippingAddress?.name}</p>
          <p>{order.shippingAddress?.phone}</p>

          <p>
            {order.shippingAddress?.address}
          </p>

          <p>
            {order.shippingAddress?.city},{" "}
            {order.shippingAddress?.state}
          </p>

          <p>
            {order.shippingAddress?.pincode}
          </p>

        </div>

        {/* Products */}

        <div>

          <h3 className="font-bold text-lg mb-3">
            Ordered Products
          </h3>

          {order.items.map((item) => (

            <div
              key={item._id}
              className="flex gap-4 border rounded-lg p-3 mb-3"
            >

              <img
                src={item.product.images[0]}
                alt=""
                className="w-20 h-20 rounded object-cover"
              />

              <div>

                <h4 className="font-semibold">
                  {item.product.name}
                </h4>

                <p>
                  Qty : {item.quantity}
                </p>

                <p>
                  Price : ₹{item.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default OrderDetailsModal;