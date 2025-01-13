import './App.css';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<OrderPage />} />
          <Route path="/detail-new-order" element={<DetailNewOrder />} />
          <Route path="/detail-ongoing-order" element={<DetailOngoingOrder />} />
          <Route path="/detail-past-order" element={<DetailCompletedOrder />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/add-new-category" element={<AddNewCategory />} />
          <Route path="/add-new-item" element={<AddNewItem />} />
          <Route path="/daily-offers" element={<OfferPage />} />
          <Route path="/offer-list" element={<OfferList />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
