
import {Routes, Route} from 'react-router-dom'
import Login from "./user/Login";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Home from './layouts/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}


export default App;
