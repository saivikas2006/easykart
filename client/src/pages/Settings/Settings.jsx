import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Moon,
  Globe,
  Shield,
  FileText,
  Info,
  Star,
  ChevronRight,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

function Settings() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [notifications, setNotifications] = useState(true);

  const settingsItems = [
    {
      title: "Profile",
      subtitle: "View your account information",
      icon: User,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Dark Mode",
      subtitle: "Coming Soon",
      icon: Moon,
      color: "bg-slate-200 text-slate-700",
    },
    {
      title: "Language",
      subtitle: "English",
      icon: Globe,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Privacy & Security",
      subtitle: "Manage privacy settings",
      icon: Shield,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Terms & Conditions",
      subtitle: "Read our policies",
      icon: FileText,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "About EasyKart",
      subtitle: "Version information",
      icon: Info,
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Rate EasyKart",
      subtitle: "Share your feedback",
      icon: Star,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-500 py-20">

        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <SettingsIcon
            size={60}
            className="mx-auto text-white"
          />

          <h1 className="mt-6 text-5xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-4 text-lg text-sky-100">
            Manage your EasyKart preferences
          </p>

        </div>

      </section>

      <div className="mx-auto max-w-5xl px-6 py-14">

        {/* Notification */}

        <div className="mb-8 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-xl">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-100 p-4">

                <Bell
                  size={26}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h3 className="text-lg font-bold">
                  Notifications
                </h3>

                <p className="text-slate-500">
                  Receive offers and updates
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                setNotifications(!notifications)
              }
              className={`h-8 w-16 rounded-full transition ${
                notifications
                  ? "bg-blue-600"
                  : "bg-slate-300"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-full bg-white transition ${
                  notifications
                    ? "translate-x-8"
                    : ""
                }`}
              ></div>
            </button>

          </div>

        </div>

        {/* Settings Cards */}

        <div className="space-y-5">

          {settingsItems.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.title}
                className="group flex w-full items-center justify-between rounded-3xl border border-white/70 bg-white/90 p-6 text-left shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="flex items-center gap-5">

                  <div className={`rounded-2xl p-4 ${item.color}`}>

                    <Icon size={26} />

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-slate-800">

                      {item.title}

                    </h3>

                    <p className="text-slate-500">

                      {item.subtitle}

                    </p>

                  </div>

                </div>

                <ChevronRight className="text-slate-400" />

              </button>

            );

          })}
                  </div>

        {/* ================= ABOUT CARD ================= */}

        <div className="mt-10 rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-xl backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-slate-800">
            About EasyKart
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            EasyKart is designed to provide a seamless, secure, and enjoyable
            online shopping experience. Browse products, save your favorites,
            manage orders, and shop with confidence—all in one place.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-sky-50 p-5 text-center">

              <h3 className="text-2xl font-bold text-sky-600">
                100%
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Secure Payments
              </p>

            </div>

            <div className="rounded-2xl bg-emerald-50 p-5 text-center">

              <h3 className="text-2xl font-bold text-emerald-600">
                24×7
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Customer Support
              </p>

            </div>

            <div className="rounded-2xl bg-orange-50 p-5 text-center">

              <h3 className="text-2xl font-bold text-orange-500">
                Fast
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Delivery Service
              </p>

            </div>

          </div>

        </div>

        {/* ================= VERSION ================= */}

        <div className="mt-8 rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-bold text-slate-800">
                Application Version
              </h3>

              <p className="mt-2 text-slate-500">
                EasyKart v1.0.0
              </p>

            </div>

            <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-600">
              Latest
            </span>

          </div>

        </div>

        {/* ================= LOGOUT ================= */}

        <button
          onClick={handleLogout}
          className="mt-10 flex w-full items-center justify-center gap-3 rounded-[28px] bg-gradient-to-r from-red-500 to-red-600 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >

          <LogOut size={22} />

          Logout

        </button>

        {/* ================= FOOTER ================= */}

        <footer className="my-14 overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-700 via-blue-600 to-cyan-500 shadow-2xl">

          <div className="px-8 py-10 text-center">

            <SettingsIcon
              size={46}
              className="mx-auto text-white"
            />

            <h2 className="mt-5 text-3xl font-bold text-white">
              EasyKart Settings
            </h2>

            <p className="mt-3 text-sky-100">
              Customize your shopping experience with EasyKart.
            </p>

            <div className="my-8 h-px bg-white/20"></div>

            <div className="flex flex-wrap justify-center gap-4">

              <span className="rounded-full bg-white/15 px-5 py-2 text-sm text-white backdrop-blur">
                Secure
              </span>

              <span className="rounded-full bg-white/15 px-5 py-2 text-sm text-white backdrop-blur">
                Reliable
              </span>

              <span className="rounded-full bg-white/15 px-5 py-2 text-sm text-white backdrop-blur">
                User Friendly
              </span>

            </div>

            <p className="mt-8 text-sm text-sky-200">
              Version 1.0 • © 2026 EasyKart. All Rights Reserved.
            </p>

          </div>

        </footer>

      </div>

    </div>
  );
}

export default Settings;