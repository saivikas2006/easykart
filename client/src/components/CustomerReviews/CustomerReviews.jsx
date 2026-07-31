import reviews from "./reviewsData";
import ReviewCard from "./ReviewCard";

function CustomerReviews() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Trusted by thousands of happy shoppers across India.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default CustomerReviews;