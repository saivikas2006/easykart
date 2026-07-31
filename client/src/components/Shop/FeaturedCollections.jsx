import { collections } from "./collectionsData";
import CollectionCard from "./CollectionCard";

const FeaturedCollections = () => {
  return (
    <section
      id="featured-collections"
      className="mx-auto max-w-7xl px-6 py-16"
    >
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          Featured Collections
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Curated Just for You
        </h2>

        <p className="mt-4 text-slate-500">
          Explore handpicked collections across every category.
        </p>
      </div>

      {/* Collection Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {collections.map((item) => (
          <CollectionCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;