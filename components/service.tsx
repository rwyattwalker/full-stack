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
    <div className='h-96 w-80 bg-[#222222] text-blue-200 flex flex-col my-4 text-center rounded-md mx-auto lg:mx-0'>
      <div className='my-auto mx-4 flex flex-col align-middle justify-center text-center'>
        <h1 className='font-semibold text-2xl'>{name} &nbsp;
          {name == "Design" &&
            <GiPencilBrush className='inline'/>
          }
          {name == "Develop" &&
            <FaLaptopCode className='inline'/>
          }
          {name == "Optimize" &&
            <IoIosSpeedometer className='inline'/>
          }
          {name == "Deploy" &&
            <BiWorld className='inline'/>
          }
        </h1>
        <p className='my-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem vitae, consectetur unde ex eaque quam totam quibusdam, itaque placeat vel fugiat nam libero earum officiis mollitia. Harum, debitis possimus?</p>
      </div>
    </div>
  )
}

export default Service