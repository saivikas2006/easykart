import { useEffect, useState } from "react";
import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
} from "lucide-react";

import AdminLayout from "../../components/Admin/AdminLayout";
import StatCard from "../../components/Admin/StatCard";
import { getAnalytics } from "../../api/analyticsApi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await getAnalytics();

        setStats({
          totalProducts: data.totalProducts,
          totalOrders: data.totalOrders,
          totalCustomers: data.totalCustomers,
          totalRevenue: data.totalRevenue,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <AdminLayout>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Products"
          value={stats.totalProducts}
          icon={<Package />}
        />

        <StatCard
          title="Orders"
          value={stats.totalOrders}
          icon={<ShoppingCart />}
        />

        <StatCard
          title="Customers"
          value={stats.totalCustomers}
          icon={<Users />}
        />

        <StatCard
          title="Revenue"
          value={`₹${stats.totalRevenue.toLocaleString()}`}
          icon={<IndianRupee />}
        />

      </div>
    </AdminLayout>
  );
};

export default Dashboard;