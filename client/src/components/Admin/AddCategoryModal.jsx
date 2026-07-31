import { useState } from "react";
import { X } from "lucide-react";
import { createCategory } from "../../api/categoryApi";

const AddCategoryModal = ({
  isOpen,
  onClose,
  refreshCategories,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    image: "",
    description: "",
    isActive: true,
  });

  if (!isOpen) return null;

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
      await createCategory(formData);

      alert("Category added successfully");

      refreshCategories();

      onClose();

      setFormData({
        name: "",
        slug: "",
        image: "",
        description: "",
        isActive: true,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add category");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-lg">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">
            Add Category
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Category Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="slug"
            placeholder="Slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
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
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;