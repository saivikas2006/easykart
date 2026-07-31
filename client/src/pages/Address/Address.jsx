import { useEffect, useState } from "react";
import API from "../../api/axios";
import toast from "react-hot-toast";

function Addresses() {
  const token = localStorage.getItem("easykart-token");

  const [addresses, setAddresses] = useState([]);

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    houseNo: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    addressType: "Home",
  });

  const fetchAddresses = async () => {
    try {
      const { data } = await API.get("/address", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAddresses(data.addresses);
    } catch (error) {
      toast.error("Unable to load addresses");
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/address", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Address Added Successfully");

      setForm({
        fullName: "",
        mobile: "",
        houseNo: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        pincode: "",
        addressType: "Home",
      });

      fetchAddresses();
    } catch (error) {
      toast.error("Unable to save address");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-8 text-3xl font-bold">
        Saved Addresses
      </h1>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Address Form */}

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="mb-6 text-2xl font-bold">
            Add New Address
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
              required
            />

            <input
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
              required
            />

            <input
              name="houseNo"
              placeholder="House / Flat No"
              value={form.houseNo}
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
              required
            />

            <input
              name="area"
              placeholder="Area / Street"
              value={form.area}
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
              required
            />

            <input
              name="landmark"
              placeholder="Landmark"
              value={form.landmark}
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
            />

            <div className="grid gap-4 md:grid-cols-2">

              <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="rounded-xl border p-4"
                required
              />

              <input
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className="rounded-xl border p-4"
                required
              />

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <input
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                className="rounded-xl border p-4"
                required
              />

              <select
                name="addressType"
                value={form.addressType}
                onChange={handleChange}
                className="rounded-xl border p-4"
              >
                <option>Home</option>
                <option>Work</option>
                <option>Other</option>
              </select>

            </div>

            <button
              className="w-full rounded-2xl bg-blue-600 py-4 font-bold text-white"
            >
              Save Address
            </button>

          </form>

        </div>

        {/* Saved Addresses */}

        <div className="space-y-5">

          {addresses.length === 0 ? (

            <div className="rounded-3xl bg-white p-8 text-center shadow-xl">

              <h2 className="text-xl font-semibold">
                No Address Found
              </h2>

            </div>

          ) : (

            addresses.map((address) => (

              <div
                key={address._id}
                className="rounded-3xl border bg-white p-6 shadow-xl"
              >

                <h2 className="text-xl font-bold">
                  {address.fullName}
                </h2>

                <p>{address.mobile}</p>

                <p className="mt-2">
                  {address.houseNo}, {address.area}
                </p>

                <p>
                  {address.city}, {address.state}
                </p>

                <p>{address.pincode}</p>

                <span className="mt-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                  {address.addressType}
                </span>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default Addresses;