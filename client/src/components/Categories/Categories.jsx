import CategoryCard from "./CategoryCard";
import categoryData from "./categoryData";

const Categories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-extrabold text-gray-900">
            Explore Categories
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Discover premium collections crafted for every lifestyle.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {categoryData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;