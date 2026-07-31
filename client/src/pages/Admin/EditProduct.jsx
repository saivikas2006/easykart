import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/Admin/AdminLayout";
import {
  getProductById,
  updateProduct,
} from "../../api/productApi";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    id: "",
    slug: "",
    name: "",
    brand: "",
    category: "",
    price: "",
    originalPrice: "",
    discount: "",
    stock: "",
    description: "",
    images: [""],
    featured: false,
    isActive: true,
  });

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    try {
      const product = await getProductById(id);

      setFormData({
        id: product.id || "",
        slug: product.slug || "",
        name: product.name || "",
        brand: product.brand || "",
        category: product.category || "",
        price: product.price || "",
        originalPrice: product.originalPrice || "",
        discount: product.discount || "",
        stock: product.stock || "",
        description: product.description || "",
        images: product.images?.length ? product.images : [""],
        featured: product.featured || false,
        isActive: product.isActive ?? true,
      });

      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Failed to load product");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: [e.target.value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(id, formData);

      alert("✅ Product Updated Successfully");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to update product");
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-10 text-center text-xl font-semibold">
          Loading Product...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5"
        >

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border rounded-lg p-3"
          />

          <input
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="border rounded-lg p-3"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="originalPrice"
            value={formData.originalPrice}
            onChange={handleChange}
            placeholder="Original Price"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="Discount"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border rounded-lg p-3"
          />

          <input
            value={formData.images[0]}
            onChange={handleImageChange}
            placeholder="Image URL"
            className="border rounded-lg p-3"
          />

          <textarea
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="border rounded-lg p-3 col-span-2"
          />

          <label className="flex items-center gap-2 col-span-2">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured Product
          </label>

          {formData.images[0] && (
            <div className="col-span-2">
              <p className="mb-2 font-medium">Image Preview</p>

              <img
                src={formData.images[0]}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg border"
              />
            </div>
          )}

          <div className="col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Update Product
            </button>

          </div>

        </form>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;