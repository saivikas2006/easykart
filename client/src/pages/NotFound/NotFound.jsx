import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-slate-500">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;