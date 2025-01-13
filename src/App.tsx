import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/BaseLayout';
import MenuPage from './pages/menu/MenuPage';
import OrderPage from './pages/order/OrderPage';
import DetailNewOrder from './pages/order/components/DetailNewOrder';
import DetailOngoingOrder from './pages/order/components/DetailOngoingOrder';
import DetailCompletedOrder from './pages/order/components/DetailCompletedOrder';

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

        </Route>
      </Routes>
    </div>
  );
}

export default App;
