
import {Routes, Route} from 'react-router-dom'
import Login from "./user/Login";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Shop from './layouts/Shop';
import ShopCategory from './pages/ShopCategory';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Signup from './user/Signup';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mens" element={<ShopCategory category="mens"/>}/>
        <Route path="/womens" element={<ShopCategory category="womens"/>}/>
        <Route path="/kids" element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}


export default App;
