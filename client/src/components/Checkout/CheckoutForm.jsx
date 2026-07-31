import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Landmark,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import {
  getAddresses,
  addAddress,
} from "../../api/addressApi";

const CheckoutForm = () => {
  const { setShippingAddress } = useCart();

  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      const data = await getAddresses();
      setAddresses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      await addAddress(formData);

      setShippingAddress(formData);

      toast.success("Address Saved Successfully");

      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      });

      setShowForm(false);

      loadAddresses();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save address");
    }
  };

return (
  <div className="space-y-6">

    {/* Saved Addresses */}
    {addresses.length > 0 && (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Saved Addresses
            </h2>

            <p className="mt-1 text-slate-500">
              Choose one of your saved addresses.
            </p>
          </div>

          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              + Add New Address
            </button>
          )}
        </div>

        <div className="space-y-5">
          {addresses.map((address) => (
            <div
              key={address._id}
              className="rounded-2xl border border-slate-300 p-5 transition hover:border-blue-600"
            >
              <h3 className="text-lg font-bold">
                {address.name}
              </h3>

              <p className="mt-1">{address.phone}</p>

              {address.email && (
                <p>{address.email}</p>
              )}

              <p className="mt-2">
                {address.address}
              </p>

              <p>
                {address.city}, {address.state}
              </p>

              <p>{address.pincode}</p>

              <button
                type="button"
                onClick={() => {
                  setShippingAddress(address);
                  toast.success("Address Selected");
                }}
                className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Use this Address
              </button>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Show Add Address Button when no addresses exist */}
    {addresses.length === 0 && !showForm && (
      <button
        onClick={() => setShowForm(true)}
        className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
      >
        + Add Your First Address
      </button>
    )}

    {/* Address Form */}
    {showForm && (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Delivery Address
          </h2>

          <p className="mt-2 text-slate-500">
            Please enter your delivery details.
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >

          {/* Name & Phone */}

        <div className="grid gap-6 md:grid-cols-2">
  <div>
    <label className="mb-2 block font-medium text-slate-700">
      Full Name
    </label>

    <div className="relative">
      <User
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
      />
    </div>
  </div>

  <div>
    <label className="mb-2 block font-medium text-slate-700">
      Mobile Number
    </label>

    <div className="relative">
      <Phone
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="9876543210"
        className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
      />
    </div>
  </div>
</div>

{/* Email */}
<div>
  <label className="mb-2 block font-medium text-slate-700">
    Email Address
  </label>

  <div className="relative">
    <Mail
      size={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
    />

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="example@email.com"
      className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
    />
  </div>
</div>

{/* Street Address */}
<div>
  <label className="mb-2 block font-medium text-slate-700">
    Street Address
  </label>

  <div className="relative">
    <MapPin
      size={20}
      className="absolute left-4 top-5 text-slate-400"
    />

    <textarea
      rows={4}
      name="address"
      value={formData.address}
      onChange={handleChange}
      placeholder="House No, Street, Area"
      className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
    />
  </div>
</div>

{/* City & State */}
<div className="grid gap-6 md:grid-cols-2">
  <div>
    <label className="mb-2 block font-medium text-slate-700">
      City
    </label>

    <div className="relative">
      <Building2
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter city"
        className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
      />
    </div>
  </div>

  <div>
    <label className="mb-2 block font-medium text-slate-700">
      State
    </label>

    <div className="relative">
      <Landmark
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="Enter state"
        className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
      />
    </div>
  </div>
</div>

{/* Pincode */}
<div>
  <label className="mb-2 block font-medium text-slate-700">
    Pincode
  </label>

  <input
    type="text"
    name="pincode"
    value={formData.pincode}
    onChange={handleChange}
    placeholder="500001"
    className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-blue-600"
  />
</div>

{/* Buttons */}
<div className="flex gap-4">

  <button
    type="button"
    onClick={handleSave}
    className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
  >
    Save Address
  </button>

  <button
    type="button"
    onClick={() => setShowForm(false)}
    className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
  >
    Cancel
  </button>

</div>

        </form>

      </div>
    )}

  </div>
);

};

export default CheckoutForm;