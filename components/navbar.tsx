import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-100  font-bold text-lg text-white bg-transparent flex justify-between -mb-8'>
      <div className='hover:cursor-pointer hover:underline my-auto'>Logo</div>
      <div className='flex gap-8'>
        <Link href={"/"} className="my-auto">About</Link>
        <Link href={"/"} className="my-auto">Services</Link>
        <Link href={"/"} className="bg-white text-blue-500 font-bold py-2 px-4">Get a Quote</Link>
      </div>
    </div>
  )
}

export default Navbar