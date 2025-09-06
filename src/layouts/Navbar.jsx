import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='fixed z-50 bg-white shadow-lg top-0 w-full h-14 px-6 flex flex-row items-center justify-between'>
      <a href="/" className=' font-bold text-3xl'>SHOPER</a>
      <div className='w-auto h-14 hidden md:flex items-center justify-center gap-2'>
        <Link to="/" className=' px-6 h-14 flex items-center hover:border-b-2'>Shop</Link>
        <Link to="/mens" className=' px-6 h-14 flex items-center hover:border-b-2'>Men</Link>
        <Link to="/womens" className=' px-6 h-14 flex items-center hover:border-b-2'>Women</Link>
        <Link to="/kids" className=' px-6 h-14 flex items-center hover:border-b-2'>Kids</Link>

      </div>
      <div className='w-auto h-14 flex flex-row items-center justify-center gap-4'>
        <Link to="/signin"className='px-4 h-8 border-2 rounded-2xl  flex items-center'>Login</Link>
        <Link to="/cart" className='px-4 h-14 flex gap-2 items-center text-3xl'><CiShoppingCart/><span className='text-xs text-red-700 font-semibold'>{getTotalCartItems()}</span></Link>
      </div>
    </div>
  )
}

export default Navbar
