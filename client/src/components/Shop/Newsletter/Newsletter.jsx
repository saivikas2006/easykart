import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <div className="grid gap-10 p-10 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600">
                <Mail size={30} />
              </div>

              <h2 className="text-4xl font-bold text-white">
                Subscribe to our Newsletter
              </h2>

              <p className="mt-4 text-blue-100">
                Get exclusive offers, latest product launches and exciting
                discounts delivered directly to your inbox.
              </p>
            </div>

            {/* Right */}
            <div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-xl border border-white/30 bg-white px-5 outline-none focus:ring-4 focus:ring-blue-300"
                />

                <button
                  className="flex h-14 items-center justify-center gap-2 rounded-xl bg-black px-8 font-semibold text-white transition hover:bg-slate-900"
                >
                  Subscribe
                  <Send size={18} />
                </button>
              </div>

              <p className="mt-4 text-sm text-blue-100">
                No spam. Unsubscribe anytime.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;