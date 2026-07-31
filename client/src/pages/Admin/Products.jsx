import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Plus, Search } from "lucide-react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { getProducts, deleteProduct } from "../../api/productApi";
import AddProductModal from "../../components/Admin/AddProductModal";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  }; 
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await deleteProduct(id);

    alert("Product deleted successfully");

    fetchProducts();
  } catch (error) {
    console.error(error);
    alert("Failed to delete product");
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Products</h1>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr className="text-gray-700">
                <th className="p-4">Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr
                    key={product._id}
                    className="border-t text-center hover:bg-gray-50"
                  >
                    <td className="p-3">
                      <img
                        src={product.images?.[0]}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded mx-auto"
                      />
                    </td>

                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.category}</td>
                    <td>₹{product.price}</td>
                    <td>{product.stock}</td>

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
  onClick={() => navigate(`/admin/products/edit/${product._id}`)}
  className="text-yellow-600 hover:text-yellow-700"
>
  <Pencil size={20} />
</button>

                        <button
  onClick={() => handleDelete(product._id)}
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
                    colSpan="7"
                    className="py-10 text-gray-500 text-center"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add Product Modal */}
        <AddProductModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          refreshProducts={fetchProducts}
        />
      </div>
    </AdminLayout>
  );
};

export default Products;