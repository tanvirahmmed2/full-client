import React from 'react'
import footer_logo from "../components/Assets/logo_big.png"
import instagram_icon from "../components/Assets/instagram_icon.png"
import pintester_icon from "../components/Assets/pintester_icon.png"
import whatsapp_icon from "../components/Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className=' w-full py-10 flex flex-col items-center justify-center gap-6'>
      <div className=' w-full flex md:flex-row flex-col items-end justify-center gap-6'>
        <div className='flex flex-row items-end justify-center gap-4'>
          <img src={footer_logo} alt="" />
          <p className='text-3xl font-bold'>SHOPER</p>
        </div>
        <ul className='flex flex-row items-end justify-center gap-4'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <div className='flex flex-row items-end justify-center gap-4'>
          <div>
            <img src={instagram_icon} alt="" />
          </div>
          <div>
            <img src={pintester_icon} alt="" />
          </div>
          <div>
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
      </div>
      
      <hr className='w-3/4 h-1 bg-black'/>
      <p>Copyright reserved</p>
    </div>
  )
}

export default Footer
