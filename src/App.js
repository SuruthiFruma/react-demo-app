import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store.js/store.ts'
import { HomePage } from './pages/HomePage.tsx';
import { RestaurantPage } from './pages/RestaurantPage.tsx';
import { CartPage } from './pages/CartPage.tsx';


export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-[#cffafe]">
          <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-8 flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">FoodDelivery</Link>
              <Link to="/cart" className="text-lg font-semibold">Cart</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

