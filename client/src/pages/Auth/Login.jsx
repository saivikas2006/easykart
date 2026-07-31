import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Smartphone,
} from "lucide-react";
import toast from "react-hot-toast";

import logo from "../../assets/logos/easykart-logo.png";
import API from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const {
  login,
  continueAsGuest,
} = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] =
    useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!identifier.trim()) {
    toast.error("Please enter Email or Mobile Number");
    return;
  }

  if (!password.trim()) {
    toast.error("Please enter Password");
    return;
  }

  try {
    const { data } = await API.post("/auth/login", {
      identifier,
      password,
    });

    if (data.success) {
      login(data.user, data.token);

      if (remember) {
        localStorage.setItem(
          "easykart-remember",
          identifier
        );
      }

      toast.success(data.message);

      navigate("/");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Login Failed"
    );
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-5">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl"
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
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-slate-500">
            Login to continue shopping
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email or Mobile */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Email or Mobile Number
            </label>

            <div className="flex items-center rounded-2xl border border-slate-300 px-4">

              <Mail
                size={20}
                className="text-slate-400"
              />

              <Smartphone
                size={18}
                className="ml-2 text-slate-400"
              />

              <input
                type="text"
                value={identifier}
                onChange={(e) =>
                  setIdentifier(e.target.value)
                }
                placeholder="Enter email or mobile number"
                className="w-full rounded-2xl px-4 py-4 outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Password
            </label>

            <div className="flex items-center rounded-2xl border border-slate-300 px-4">

              <Lock
                size={20}
                className="text-slate-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
                className="w-full px-4 py-4 outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
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

          {/* Remember */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm">

              <input
                type="checkbox"
                checked={remember}
                onChange={(e) =>
                  setRemember(
                    e.target.checked
                  )
                }
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login */}

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 py-4 font-bold text-white transition hover:scale-[1.02]"
          >
            LOGIN
          </button>

          {/* Divider */}

          <div className="relative py-2">

            <div className="border-t" />

            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 bg-white px-3 text-sm text-slate-400">
              OR
            </span>

          </div>

          

          {/* Google Login */}

<button
  type="button"
  className="w-full rounded-2xl border border-slate-300 bg-white py-4 font-semibold transition-all duration-300 hover:bg-slate-100 hover:shadow-md"
>
  Continue with Google
</button>

{/* Guest Login */}

<button
  type="button"
  onClick={() => setShowGuestModal(true)}
  className="mt-4 w-full rounded-2xl border border-orange-300 bg-orange-50 py-4 font-semibold text-orange-700 transition-all duration-300 hover:bg-orange-100 hover:shadow-md"
>
  Continue as Guest
</button>

<p className="mt-3 text-center text-xs text-slate-500">
  Guest users can browse products, add items to cart and wishlist.
  Login is required only for placing orders.
</p>

{/* Divider */}

<div className="my-6 flex items-center">
  <div className="h-px flex-1 bg-slate-200"></div>

  <span className="mx-4 text-xs font-semibold uppercase text-slate-400">
    New to EasyKart?
  </span>

  <div className="h-px flex-1 bg-slate-200"></div>
</div>

{/* Signup */}

<Link
  to="/signup"
  className="block w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
>
  Create New Account
</Link>

<p className="mt-8 text-center text-xs text-slate-400">
  © 2026 EasyKart • Secure • Fast • Trusted
</p>

          ...
          <p className="pt-2 text-center text-xs text-slate-400">
            © 2026 EasyKart • Secure • Fast • Trusted
          </p>

        </form>

      </motion.div>

      {/* Guest Modal */}

      {showGuestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                👤
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Continue as Guest?
              </h2>

              <p className="mt-3 text-slate-500">
                You can explore EasyKart without creating an account.
              </p>

            </div>

            <div className="mt-8 space-y-3 rounded-2xl bg-slate-50 p-5">

              <div>✅ Browse Products</div>

              <div>✅ Search Products</div>

              <div>✅ Add to Cart</div>

              <div>✅ Add to Wishlist</div>

              <div className="text-red-600">
                ❌ Login required to place orders
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <button
                onClick={() => {
                  continueAsGuest();
                  navigate("/");
                }}
                className="flex-1 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 font-semibold text-white"
              >
                Continue
              </button>

              <button
                onClick={() => setShowGuestModal(false)}
                className="flex-1 rounded-2xl border border-slate-300 py-4 font-semibold hover:bg-slate-100"
              >
                Login Instead
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Login;