import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/BaseLayout';
import MenuPage from './pages/menu/MenuPage';
import OrderPage from './pages/order/OrderPage';

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<OrderPage />} />
          <Route path="/body-treatment" element={<MenuPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
