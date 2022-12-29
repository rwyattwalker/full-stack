import React from 'react'
import {GiPencilBrush} from 'react-icons/gi'

function Service() {
  return (
    <div className='h-96 w-80 bg-white flex flex-col my-4 text-center rounded-md'>
      <div className='my-auto mx-4 flex flex-col align-middle justify-center text-center'>
        
        <h1 className='font-semibold text-lg'>Design &nbsp;<GiPencilBrush className='inline'/></h1>
        <p className='my-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem vitae, consectetur unde ex eaque quam totam quibusdam, itaque placeat vel fugiat nam libero earum officiis mollitia. Harum, debitis possimus?</p>
      </div>
    </div>
  )
}

export default Service