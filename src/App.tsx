import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/BaseLayout';
import MenuPage from './pages/menu/MenuPage';
import OrderPage from './pages/order/OrderPage';
import DetailNewOrder from './pages/order/components/DetailNewOrder';
import DetailOngoingOrder from './pages/order/components/DetailOngoingOrder';
import DetailCompletedOrder from './pages/order/components/DetailCompletedOrder';
import AddNewCategory from './pages/menu/components/AddNewCategory';
import AddNewItem from './pages/menu/components/AddNewItem';
import OfferList from './pages/offers/components/OfferList';
import OfferPage from './pages/offers/OfferPage';
import ProfilePage from './pages/profile/ProfilePage';
import SettingPage from './pages/setting/SettingPage';
import LoginPage from './pages/authentication/LoginPage';
import RegisterPage from './pages/authentication/RegisterPage';
import { AuthProvider, useAuth } from './context/AuthContext';

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path='/auth/*' element={<AuthRoutes />} />

          {/* Protected routes */}
          <Route path='/' element={<ProtectedRoute />}>
            <Route index element={<OrderPage />} />
            <Route path="/order/:id" element={<DetailNewOrder />} />
            <Route path="/order/ongoing/:id" element={<DetailOngoingOrder />} />
            <Route path="/order/completed/:id" element={<DetailCompletedOrder />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/category/new" element={<AddNewCategory />} />
            <Route path="/menu/item/new" element={<AddNewItem />} />
            <Route path="/offers" element={<OfferPage />} />
            <Route path="/offers/list" element={<OfferList />} />
            <Route path="/user/profile" element={<ProfilePage />} />
            <Route path="/user/settings" element={<SettingPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <Layout />;
}

function AuthRoutes() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
