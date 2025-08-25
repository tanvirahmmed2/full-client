import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  );
}


export default App;
