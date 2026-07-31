import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { getSettings, updateSettings } from "../../api/settingApi";
import AdminLayout from "../../components/Admin/AdminLayout";

const Settings = () => {
  const [form, setForm] = useState({
    storeName: "",
    supportEmail: "",
    phone: "",
    address: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    shippingCharge: 0,
    freeShippingAbove: 999,
    codEnabled: true,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getSettings();
      setForm(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await updateSettings(form);
      alert(res.message);
    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Store Settings
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-xl shadow p-6"
        >

          {/* Store Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Store Information
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="storeName"
                value={form.storeName}
                onChange={handleChange}
                placeholder="Store Name"
                className="border rounded-lg p-3"
              />

              <input
                name="supportEmail"
                value={form.supportEmail}
                onChange={handleChange}
                placeholder="Support Email"
                className="border rounded-lg p-3"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border rounded-lg p-3"
              />

              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                className="border rounded-lg p-3"
              />
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Social Links
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="facebook"
                value={form.facebook}
                onChange={handleChange}
                placeholder="Facebook URL"
                className="border rounded-lg p-3"
              />

              <input
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                placeholder="Instagram URL"
                className="border rounded-lg p-3"
              />

              <input
                name="twitter"
                value={form.twitter}
                onChange={handleChange}
                placeholder="Twitter URL"
                className="border rounded-lg p-3"
              />

              <input
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                className="border rounded-lg p-3"
              />
            </div>
          </div>

          {/* Shipping */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Shipping
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="shippingCharge"
                value={form.shippingCharge}
                onChange={handleChange}
                placeholder="Shipping Charge"
                className="border rounded-lg p-3"
              />

              <input
                type="number"
                name="freeShippingAbove"
                value={form.freeShippingAbove}
                onChange={handleChange}
                placeholder="Free Shipping Above"
                className="border rounded-lg p-3"
              />
            </div>
          </div>

          {/* COD */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="codEnabled"
              checked={form.codEnabled}
              onChange={handleChange}
            />

            <label>Enable Cash On Delivery</label>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            <Save size={18} />
            Save Settings
          </button>

        </form>

      </div>
    </AdminLayout>
  );
};

export default Settings;