
import {Routes, Route} from 'react-router-dom'
import Login from "./user/Login";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Shop from './layouts/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signup from './user/Signup';


import men_banner from "./components/Assets/banner_mens.png"
import women_banner from "./components/Assets/banner_women.png"
import kid_banner from "./components/Assets/banner_kids.png"

function App() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <Navbar/>
      <div className='w-full mt-16 px-2'>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
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
