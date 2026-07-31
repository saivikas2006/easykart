import { useState } from "react";
import { X } from "lucide-react";
import { createProduct } from "../../api/productApi";

const AddProductModal = ({ isOpen, onClose, refreshProducts }) => {
  const [formData, setFormData] = useState({
    id: "",
    slug: "",
    name: "",
    brand: "",
    category: "",
    price: "",
    originalPrice: "",
    discount: 0,
    stock: 0,
    description: "",
    images: [""],
    featured: false,
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(formData);
      alert("Product Added Successfully");

      refreshProducts();

      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[650px] rounded-xl p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">Add Product</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="id"
            placeholder="Product ID"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="slug"
            placeholder="Slug"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="name"
            placeholder="Product Name"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="brand"
            placeholder="Brand"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="originalPrice"
            type="number"
            placeholder="Original Price"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="discount"
            type="number"
            placeholder="Discount"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="stock"
            type="number"
            placeholder="Stock"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="images"
            placeholder="Image URL"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setFormData({
                ...formData,
                images: [e.target.value],
              })
            }
          />

          <textarea
            name="description"
            rows="4"
            placeholder="Description"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="featured"
              onChange={handleChange}
            />
            Featured Product
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Save Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProductModal;