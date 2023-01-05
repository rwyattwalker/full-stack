import Link from 'next/link'
import React, { useEffect } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from "react"

type propTypes = {
  hamburger: boolean
}

function Navbar({hamburger}:propTypes) {
  const [open, setOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<null | number>(null);
  useEffect(()=>{
    setViewportHeight(window.innerHeight)
  },[])
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
        <Link href={"/about"} className="my-auto">About</Link>
        <button onClick={()=>{window.scrollTo({top:viewportHeight!})}} className="my-auto">Services</button>
        {/* <Link href={"#services"} className="my-auto">Portfolio</Link> */}
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
          <button onClick={()=>{window.scrollTo({top:viewportHeight!})}} className="my-auto text-blue-500 font-bold py-2 px-4 w-fit">Services</button>
          <Link href={"/"} className=" text-blue-500 font-bold py-2 px-4">Get a Quote</Link>
        </div>
      }
    </div>
  )
}

export default Navbar