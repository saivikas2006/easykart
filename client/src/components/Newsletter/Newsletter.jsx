import { Mail } from "lucide-react";

function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <Mail className="h-10 w-10 text-white" />
        </div>

        <h2 className="mt-8 text-4xl lg:text-5xl font-extrabold text-white">
          Stay Updated
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Subscribe to receive exclusive offers, latest products and exciting
          deals directly in your inbox.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full px-6 py-4 outline-none"
          />

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-900 hover:text-white">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;