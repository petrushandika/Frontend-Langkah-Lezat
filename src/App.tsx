import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/BaseLayout';
import MenuPage from './pages/menu/MenuPage';

function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MenuPage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
