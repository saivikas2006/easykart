import { Link } from "react-router-dom";
import { ChevronRight, House } from "lucide-react";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
      <Link
        to="/"
        className="flex items-center gap-2 hover:text-blue-600 transition"
      >
        <House size={16} />
        Home
      </Link>

      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2"
        >
          <ChevronRight size={16} />

          {item.link ? (
            <Link
              to={item.link}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-gray-800">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;