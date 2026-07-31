import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  LayoutGrid,
  TicketPercent,
  Star,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      title: "Products",
      icon: Package,
      path: "/admin/products",
    },
    {
      title: "Categories",
      icon: LayoutGrid,
      path: "/admin/categories",
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      path: "/admin/orders",
    },
    {
      title: "Customers",
      icon: Users,
      path: "/admin/customers",
    },
   
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white shadow-lg">
      <div className="p-6 text-2xl font-bold border-b border-slate-800">
        EasyKart Admin
      </div>

      <nav className="space-y-2 p-4">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;