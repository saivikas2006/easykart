import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, Search } from "lucide-react";
import AddCategoryModal from "../../components/Admin/AddCategoryModal";
import AdminLayout from "../../components/Admin/AdminLayout";
import EditCategoryModal from "../../components/Admin/EditCategoryModal";
import {
  getCategories,
  deleteCategory,
} from "../../api/categoryApi";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
const [selectedCategory, setSelectedCategory] = useState(null);
  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);

      alert("Category deleted successfully");

      fetchCategories();
    } catch (error) {
      console.error(error);
      alert("Failed to delete category");
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <button
  onClick={() => setShowModal(true)}
  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
>
  <Plus size={18} />
  Add Category
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
            placeholder="Search category..."
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

                <th className="p-4">Image</th>

                <th>Name</th>

                <th>Description</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredCategories.length > 0 ? (

                filteredCategories.map((category) => (

                  <tr
                    key={category._id}
                    className="border-t text-center hover:bg-gray-50"
                  >

                    <td className="p-3">

                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 object-cover rounded mx-auto"
                      />

                    </td>

                    <td>{category.name}</td>

                    <td>{category.description}</td>

                    <td>

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          category.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {category.isActive ? "Active" : "Inactive"}
                      </span>

                    </td>

                    <td>

                      <div className="flex justify-center gap-3">

                       <button
  onClick={() => {
    setSelectedCategory(category);
    setEditModal(true);
  }}
  className="text-yellow-600 hover:text-yellow-700"
>
  <Pencil size={20} />
</button>

                        <button
                          onClick={() => handleDelete(category._id)}
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
                    colSpan="5"
                    className="py-10 text-center text-gray-500"
                  >
                    No Categories Found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        <AddCategoryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        refreshCategories={fetchCategories}
      />
      
      <EditCategoryModal
  isOpen={editModal}
  onClose={() => setEditModal(false)}
  category={selectedCategory}
  refreshCategories={fetchCategories}
/>

      </div>
    </AdminLayout>
  );
};

export default Categories;