import React from 'react'
import Item from './Item'
import { useState } from 'react'
import { useEffect } from 'react'
const Popular = () => {
  const [popularinwomen, setPopularInWomen] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/popularinwomen')
      .then((res) => res.json())
      .then((data) => setPopularInWomen(data))
  }, [])

  return (
    <div className='flex flex-col items-center gap-4 h-screen w-full justify-center'>

      <h1 className='text-2xl font-semibold'>POPULAR IN WOMEN</h1>
      <div className='mt-12 flex items-center justify-center w-full flex-row gap-6'>
        {
          popularinwomen.map((item) => {
            return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })
        }
      </div>
    </div>
  )
}

export default Popular
