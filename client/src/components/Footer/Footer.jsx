

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              Easy<span className="text-blue-500">Kart</span>
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              Your one-stop destination for premium shopping experience with
              quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Shop
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Categories
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Support</h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white cursor-pointer transition">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Returns
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Follow Us</h3>

            <div className="flex gap-4">
              {/* <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <Facebook size={20} />
              </a> */}

              {/* <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500"
              >
                <Twitter size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-red-500"
              >
                <Mail size={20} />
              </a> */}
            </div>
          </div>
        </div>

        <hr className="my-10 border-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© 2026 EasyKart. All Rights Reserved.</p>

          <p>Built with React, Tailwind CSS & Express.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;