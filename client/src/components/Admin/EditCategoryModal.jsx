import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { updateCategory } from "../../api/categoryApi";

const EditCategoryModal = ({
  isOpen,
  onClose,
  category,
  refreshCategories,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    image: "",
    description: "",
    isActive: true,
  });

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || "",
        slug: category.slug || "",
        image: category.image || "",
        description: category.description || "",
        isActive: category.isActive,
      });
    }
  }, [category]);

  if (!isOpen || !category) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCategory(category._id, formData);

      alert("Category updated successfully");

      refreshCategories();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to update category");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Edit Category</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Category Name"
            required
          />

          <input
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Slug"
            required
          />

          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Image URL"
          />

          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Description"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            Active
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Update Category
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;