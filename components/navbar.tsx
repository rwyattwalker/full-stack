import Link from 'next/link'
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from "react"

type propTypes = {
  hamburger: boolean
}

function Navbar({hamburger}:propTypes) {
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    if(open){
      setOpen(false)
    }else{
      setOpen(true)
    }
  }
  if(!hamburger)return(
    <div className='w-100  font-bold text-lg text-white bg-transparent flex justify-between -mb-8'>
      <div className='hover:cursor-pointer hover:underline my-auto'>Logo</div>
      <div className='flex gap-8'>
        <Link href={"/"} className="my-auto">About</Link>
        <Link href={"/"} className="my-auto">Services</Link>
        <Link href={"/"} className="bg-white text-blue-500 font-bold py-2 px-4">Get a Quote</Link>
      </div>
    </div>
  )
  else return(
    <div className='w-100  font-bold text-lg text-white bg-transparent flex justify-between -mb-8'>
      <div className='hover:cursor-pointer hover:underline my-auto'>Logo</div>
      <GiHamburgerMenu className={`text-3xl z-50 m-5 ${open && 'text-blue-500'}`} onClick={handleToggle}/>
      {open &&
        <div className='flex flex-col z-20 absolute top-0 w-full h-fit bg-white'>
          <Link href={"/"} className=" my-auto text-blue-500 font-bold py-2 px-4">About</Link>
          <Link href={"/"} className=  "my-auto text-blue-500 font-bold py-2 px-4">Services</Link>
          <Link href={"/"} className=" text-blue-500 font-bold py-2 px-4">Get a Quote</Link>
        </div>
      }
    </div>
  )
}

export default Navbar