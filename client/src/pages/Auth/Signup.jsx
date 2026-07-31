import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import toast from "react-hot-toast";
import API from "../../api/axios";
import logo from "../../assets/logos/easykart-logo.png";
import { useAuth } from "../../context/AuthContext";

function Signup() {
  const navigate = useNavigate();

  const { signup } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !form.name ||
    !form.mobile ||
    !form.email ||
    !form.password ||
    !form.confirmPassword
  ) {
    toast.error("Please fill all fields");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(form.mobile)) {
    toast.error("Enter a valid mobile number");
    return;
  }

  if (form.password.length < 6) {
    toast.error("Password should be at least 6 characters");
    return;
  }

  if (form.password !== form.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  if (!acceptTerms) {
    toast.error("Please accept Terms & Conditions");
    return;
  }

  try {
    const { data } = await API.post("/auth/register", {
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      password: form.password,
    });

    if (data.success) {
      signup(data.user, data.token);

      toast.success("Account Created Successfully 🎉");

      navigate("/");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Registration Failed"
    );
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-5 py-10">

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl"
      >
        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src={logo}
            alt="EasyKart"
            className="mx-auto h-24"
          />

          <h1 className="mt-4 text-4xl font-bold text-blue-600">
            EasyKart
          </h1>

          <h2 className="mt-5 text-2xl font-bold text-slate-900">
            Create Your Account
          </h2>

          <p className="mt-2 text-slate-500">
            Join EasyKart and start shopping today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <div className="flex items-center rounded-2xl border px-4">
              <User className="text-slate-400" size={20} />

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-4 outline-none"
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="mb-2 block font-medium">
              Mobile Number
            </label>

            <div className="flex items-center rounded-2xl border px-4">
              <Phone className="text-slate-400" size={20} />

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full px-4 py-4 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <div className="flex items-center rounded-2xl border px-4">
              <Mail className="text-slate-400" size={20} />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-4 py-4 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="flex items-center rounded-2xl border px-4">
              <Lock className="text-slate-400" size={20} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block font-medium">
              Confirm Password
            </label>

            <div className="flex items-center rounded-2xl border px-4">
              <Lock className="text-slate-400" size={20} />

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-4 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) =>
                setAcceptTerms(e.target.checked)
              }
            />

            I agree to the Terms & Conditions
          </label>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 py-4 font-bold text-white transition hover:scale-[1.02]"
          >
            CREATE ACCOUNT
          </button>

          {/* Login */}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>

          <p className="text-center text-xs text-slate-400">
            © 2026 EasyKart • Secure • Fast • Trusted
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;