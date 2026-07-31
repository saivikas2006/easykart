import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

import logo from "../../assets/logos/easykart-logo.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Password reset link sent successfully!");
    setEmail("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-5">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
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

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Forgot Password?
          </h2>

          <p className="mt-2 text-slate-500">
            Enter your registered email address and we'll send you a password reset link.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email Address
            </label>

            <div className="flex items-center rounded-2xl border border-slate-300 px-4">
              <Mail
                size={20}
                className="text-slate-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full px-4 py-4 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 py-4 font-bold text-white transition hover:scale-[1.02]"
          >
            Send Reset Link
          </button>

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-blue-600 hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Login
          </Link>
        </form>

        <p className="mt-8 text-center text-xs text-slate-400">
          © 2026 EasyKart • Secure • Fast • Trusted
        </p>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;