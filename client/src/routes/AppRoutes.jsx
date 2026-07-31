import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import CategoryPage from "../pages/Category/CategoryPage";
import FeaturedPage from "../pages/Featured/FeaturedPage";
import ProductPage from "../pages/Product/ProductPage";
import SearchPage from "../pages/Search/SearchPage";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";

// Auth Pages
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";

// User Pages
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import Addresses from "../pages/Address/Address";
import Account from "../pages/Account/Account";
import Support from "../pages/Support/Support";
import Settings from "../pages/Settings/Settings";

// Admin
import Dashboard from "../pages/Admin/Dashboard";
import AdminRoute from "./AdminRoute";
import Products from "../pages/Admin/Products";
import AdminOrders from "../pages/Admin/Orders";
import Customers from "../pages/Admin/Customers";
import Setting from "../pages/Admin/Settings";
// Protected Route
import ProtectedRoute from "../components/ProtectedRoute";
import EditProduct from "../pages/Admin/EditProduct";
// 404
import NotFound from "../pages/NotFound/NotFound";
import Categories from "../pages/Admin/Categories";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/featured" element={<FeaturedPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* ================= AUTH ================= */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* ================= USER PROTECTED ================= */}

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />

        <Route
          path="/addresses"
          element={
            <ProtectedRoute>
              <Addresses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/support"
          element={
            <ProtectedRoute>
              <Support />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* ================= ORDER SUCCESS ================= */}

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        {/* ================= ADMIN ================= */}

        <Route
  path="/admin"
  element={
    <AdminRoute>
  <Dashboard />
  </AdminRoute>
  }
/> 
        <Route
  path="/admin/products"
  element={
    <AdminRoute>
      <Products />
    </AdminRoute>
  }
/>
        <Route
  path="/admin/products/edit/:id"
  element={ 
    <AdminRoute>
      <EditProduct />
    </AdminRoute>
  }
/>
        <Route
  path="/admin/orders"
  element={
      <AdminRoute>
      <AdminOrders />
      </AdminRoute>
  }
/>
        <Route
  path="/admin/categories"
  element={
      <AdminRoute>
      <Categories />
      </AdminRoute>
  }
/>
        <Route
  path="/admin/customers"
  element={
    <AdminRoute>
      <Customers />
    </AdminRoute>
  }
/>
        <Route
  path="/admin/settings"
  element={
    <AdminRoute>
      <Setting/>
    </AdminRoute>
  }
/>
        {/* ================= 404 ================= */}

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;