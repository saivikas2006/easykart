import { useEffect, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
} from "lucide-react";
import AdminLayout from "../../components/Admin/AdminLayout";
import OrderDetailsModal from "../../components/Admin/OrderDetailsModal";
import {
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../../api/orderApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchOrders = async () => {
    try {
      const data = await getAllOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const changeStatus = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      fetchOrders();
    } catch (error) {
      console.error(error);
      alert("Failed to update order status");
    }
  };

  const removeOrder = async (id) => {
    if (!window.confirm("Delete this order?")) return;

    try {
      await deleteOrder(id);
      fetchOrders();
    } catch (error) {
      console.error(error);
      alert("Failed to delete order");
    }
  };

  const filteredOrders = orders.filter((order) => {
    const orderNumber = order.orderNumber?.toLowerCase() || "";
    const customerName = order.user?.name?.toLowerCase() || "";

    return (
      orderNumber.includes(search.toLowerCase()) ||
      customerName.includes(search.toLowerCase())
    );
  });

  return (
    <AdminLayout>
      <div className="p-6">

        {/* Header */}

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Orders
          </h1>
        </div>

        {/* Search */}

        <div className="relative mb-6">

          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search by Order ID or Customer..."
            className="w-full border rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Orders Table */}

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr className="text-gray-700">

                <th className="p-4">Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredOrders.length > 0 ? (

                filteredOrders.map((order) => (

                  <tr
                    key={order._id}
                    className="border-t text-center hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">
                      {order.orderNumber}
                    </td>

                    <td>
                      {order.user?.name || "Guest"}
                    </td>

                    <td>
                      ₹{order.totalAmount}
                    </td>

                    <td>

                      <select
                        value={order.orderStatus}
                        onChange={(e) =>
                          changeStatus(
                            order._id,
                            e.target.value
                          )
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                      </select>

                    </td>

                    <td>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>

                    <td>

                      <div className="flex justify-center gap-3">

                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Eye size={20} />
                        </button>

                        <button
                          onClick={() => removeOrder(order._id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 size={20} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="py-12 text-center text-gray-500"
                  >
                    No Orders Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        <OrderDetailsModal
          order={selectedOrder}
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedOrder(null);
          }}
        />

      </div>
    </AdminLayout>
  );
};

export default Orders;