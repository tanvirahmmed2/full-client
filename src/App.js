
import {Routes, Route} from 'react-router-dom'
import Login from "./user/Login";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Shop from './layouts/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signup from './user/Signup';

function App() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <Navbar/>
      <div className='w-full mt-16 px-2'>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory category="mens"/>}/>
        <Route path="/womens" element={<ShopCategory category="womens"/>}/>
        <Route path="/kids" element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>



        <Route path='/cart' element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div>
      <Footer/>

    </div>
  );
}


export default App;
