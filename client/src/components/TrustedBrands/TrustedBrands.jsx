import brands from "./brandsData";

function TrustedBrands() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Trusted Brands
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            We collaborate with leading global brands.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-2xl font-bold text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
                {brand.name.charAt(0)}
              </div>

              <h3 className="font-semibold text-slate-800">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;