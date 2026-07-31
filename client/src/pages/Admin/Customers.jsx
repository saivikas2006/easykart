import { useEffect, useState } from "react";
import { Trash2, Search } from "lucide-react";

import AdminLayout from "../../components/Admin/AdminLayout";
import { getAllUsers, deleteUser } from "../../api/userApi";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCustomers = async () => {
    try {
      const data = await getAllUsers();
      setCustomers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    try {
      const response = await deleteUser(id);

alert(response.message);

fetchCustomers();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to delete customer");
    }
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Customers
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
            placeholder="Search customers..."
            className="w-full border rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr className="text-gray-700">
                <th className="p-4">Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Role</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr
                    key={customer._id}
                    className="border-t text-center hover:bg-gray-50"
                  >
                    <td className="p-4">{customer.name}</td>

                    <td>{customer.email}</td>

                    <td>{customer.mobile}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          customer.role === "admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {customer.role}
                      </span>
                    </td>

                    <td>
                      {new Date(customer.createdAt).toLocaleDateString()}
                    </td>

                    <td>
  {customer.role !== "admin" && (
    <button
      onClick={() => handleDelete(customer._id)}
      className="text-red-600 hover:text-red-700"
      title="Delete Customer"
    >
      <Trash2 size={20} />
    </button>
  )}
</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-10 text-center text-gray-500"
                  >
                    No Customers Found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Customers;