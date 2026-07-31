import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MapPin } from "lucide-react";

import { getAddresses } from "../../api/addressApi";
import { useCart } from "../../context/CartContext";

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const { setShippingAddress } = useCart();

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      const data = await getAddresses();
      setAddresses(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (addresses.length === 0) return null;

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Saved Addresses
      </h2>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="rounded-2xl border p-5"
          >
            <div className="flex gap-3">
              <MapPin className="mt-1 text-blue-600" />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {address.name}
                </h3>

                <p>{address.phone}</p>

                <p>
                  {address.address}
                </p>

                <p>
                  {address.city}, {address.state}
                </p>

                <p>{address.pincode}</p>

                <button
                  className="mt-4 rounded-xl bg-blue-600 px-5 py-2 text-white"
                  onClick={() => {
                    setShippingAddress(address);
                    toast.success("Address Selected");
                  }}
                >
                  Use this Address
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;