import Link from 'next/link'
import React, { useEffect } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from "react"
import Image from "next/image"

type propTypes = {
  hamburger: boolean,
  about?: boolean
}

function Navbar({hamburger, about}:propTypes) {
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
    <div className='w-100  font-bold text-lg text-white bg-transparent flex justify-between z-[50000] pointer-events-auto'>
      <Link className='hover:cursor-pointer my-auto' href={"/"}>
        <Image src="/evolve-white.png" width={50} height={50} alt="logo" />
      </Link>
      <div className='flex gap-8'>
        {about && <Link href={"/#services"} className="my-auto cursor-pointer scroll-smooth">Services</Link>}
        {!about && <button onClick={()=>{window.scrollTo({top:viewportHeight!, behavior:"smooth"})}} className="my-auto cursor-pointer">Services</button>}
        {/* <Link href={"#services"} className="my-auto">Portfolio</Link> */}
        {about && <Link href={"/#form"} className="bg-white text-blue-500 font-bold py-2 px-4 cursor-pointer">Get a Quote</Link>}
        {!about && <button className="bg-[#EB9B2F] text-white rounded-full font-bold py-2 px-4 cursor-pointer" onClick={()=>{window.scrollTo({top:viewportHeight! + 100, behavior:'smooth'})}}>Get a Quote</button>}
      </div>
    </div>
  )
  else return(
    <div className='w-full  font-bold text-lg text-black bg-white flex justify-between fixed'>
      <Link className='hover:cursor-pointer my-auto mx-2 flex' href={"/"}>
        <Image src="/evolve-black.png" width={50} height={50} alt="logo" />
        <div className='my-auto text-xl font-bold'>| Evolve</div>
      </Link>
      <GiHamburgerMenu className={`text-3xl z-50 m-5 ${open ? 'text-blue-500' : 'text-black'}`} onClick={handleToggle}/>
      {open &&
        <div className='flex flex-col z-20 absolute top-0 w-full h-fit bg-white'>
          {!about && <button onClick={()=>{window.scrollTo({top:viewportHeight!, behavior:"smooth"})}} className="my-auto text-blue-500 font-bold py-2 px-4 w-fit">Services</button>}
          {about && <Link href={"/#services"} className="my-auto text-blue-500 font-bold py-2 px-4 w-fit">Services</Link>}
          {!about && <button onClick={()=>window.scrollTo({top:viewportHeight! + 2000, behavior:"smooth"})} className=" text-blue-500 font-bold py-2 px-4 w-fit">Get a Quote</button>}
          {about && <Link href={"/#form"} className="bg-[#EB9B2F] text-blue-500 font-bold py-2 px-4">Get a Quote</Link>}
        </div>
      }
    </div>
  )
}

export default Navbar