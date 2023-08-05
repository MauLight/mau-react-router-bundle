import React from 'react'
import icon from '../img/icon.png'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-20 mb-20'>
      <div>
        <img className='w-[40px] h-[40px]' src={icon} />
      </div>
      <div>
        <ul className='flex gap-x-5'>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
      </div>
    </div>
  )
}
