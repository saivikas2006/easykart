const ProductDescription = ({ description }) => {
  if (!description) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Product Description
      </h2>

      <p className="text-[16px] leading-8 text-slate-600">
        {description}
      </p>
    </section>
  );
};

export default ProductDescription;