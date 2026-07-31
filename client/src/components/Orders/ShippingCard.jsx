import {
  MapPin,
  Phone,
  User,
  Home,
} from "lucide-react";

const ShippingCard = ({ address }) => {
  if (!address) return null;

  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
        <MapPin className="text-blue-600" />
        Shipping Address
      </h2>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <User className="text-slate-500" size={20} />
          <span className="font-semibold">
            {address.fullName}
          </span>
        </div>

        <div className="flex items-start gap-3">
          <Home className="mt-1 text-slate-500" size={20} />
          <div>
            <p>{address.addressLine1}</p>

            {address.addressLine2 && (
              <p>{address.addressLine2}</p>
            )}

            <p>
              {address.city}, {address.state}
            </p>

            <p>{address.pincode}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-slate-500" size={20} />
          <span>{address.mobile}</span>
        </div>

      </div>
    </div>
  );
};

export default ShippingCard;