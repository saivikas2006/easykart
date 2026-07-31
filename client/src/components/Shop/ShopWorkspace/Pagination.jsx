import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <section className="mt-14 flex flex-col items-center gap-5">

      {/* Page Info */}
      <p className="text-sm text-slate-500">
        Page{" "}
        <span className="font-semibold text-slate-900">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-900">
          {totalPages}
        </span>
      </p>

      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">

        {/* Previous */}
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        {/* Page Numbers */}
        {getPages().map((page, index) =>
          page === "..." ? (
            <span
              key={index}
              className="px-2 text-slate-400"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`h-11 w-11 rounded-xl font-semibold transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-white hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-40"
        >
          Next
          <ChevronRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default Pagination;