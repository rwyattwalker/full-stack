import React from 'react'
import {GiPencilBrush} from 'react-icons/gi'
import {FaLaptopCode} from 'react-icons/fa'
import {IoIosSpeedometer} from 'react-icons/io'
import {BiWorld} from 'react-icons/bi'
 type serviceProps = {
    name: string
  }
function Service({name}:serviceProps) {
  return (
    <div className='h-96 w-80 bg-[#222222] text-blue-100 flex flex-col my-4 text-center rounded-md mx-auto lg:mx-0'>
      <div className='my-auto mx-4 flex flex-col align-middle justify-center text-center'>
       
          {name == "Design" &&
            <div className='bg-purple-400 w-fit mx-auto p-4 rounded-full'>
              <GiPencilBrush className='inline mx-auto text-2xl'/>
            </div>
          }
          {name == "Develop" &&
            <div className='bg-emerald-400 w-fit mx-auto p-4 rounded-full'>
            <FaLaptopCode className='inline mx-auto text-2xl'/>
            </div>
          }
          {name == "Optimize" &&
            <div className='bg-rose-400 w-fit mx-auto p-4 rounded-full'>
            <IoIosSpeedometer className='inline mx-auto text-2xl'/>
            </div>
          }
          {name == "Deploy" &&
            <div className='bg-blue-400 w-fit mx-auto p-4 rounded-full'>
            <BiWorld className='inline mx-auto text-2xl'/>
            </div>
          }
         <h1 className='font-semibold text-2xl'>{name} &nbsp;</h1>
        <p className='my-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem vitae, consectetur unde ex eaque quam totam quibusdam, itaque placeat vel fugiat nam libero earum officiis mollitia. Harum, debitis possimus?</p>
      </div>
    </div>
  )
}

export default Service