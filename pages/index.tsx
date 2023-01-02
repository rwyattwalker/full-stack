import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Service from '../components/service'
import { useState } from 'react'

type formResType = {
  success: boolean
}

export default function Home() {
  const [formState, setFormState] = useState({
    fname:'',
    lname: '',
    cname:'',
    country:'',
    email:'',
    phone:'',
    preferredContact:'',
    message:''
  })
  const [formRes, setFormRes] = useState<formResType|null>(null);
  const handleChange = (e:any, value:any) => {
    let current:any = formState;
    current[value] = e.target.value;
    setFormState(current);
    console.log(formState);
  }
  async function handleSubmit(e:any) {
    e.preventDefault();
    const response = await fetch("/api/form", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(formState)
    });
    const json = await response.json();
    setFormRes(json)
  }
  return (
    <div className='bg-gradient-to-r from-blue-400 to-blue-800'>
      <Head>
        <title>Full Stack Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100vh] flex ">
        <div className='my-24 mx-[23rem] flex flex-col'>
          <Navbar />
          <div className='flex h-full'>
            <div className='stroke flex flex-col my-auto main-title'>
              <div>WEB</div>
              <div>MADE</div>
              <div>SIMPLE</div>
            </div>
            <div className="my-auto w-1/3 ml-auto">
              <Image
                className=""
                src="/robot.png"
                alt="Cute Robot"
                width={800}
                height={800}
                priority
              />
            </div> 
          </div>
        </div>
      </main>
      <section className='min-h-[50vh] h-fit bg-gradient-to-b from-transparent to-blue-800 flex flex-col'>
       
        <div className=' h-fit my-auto mx-44 flex gap-4 justify-center text-white'> 
        <div className='flex flex-col w-1/5 justify-center text-left'>
          <h1 className="font-bold text-3xl underline">Services</h1>
          <p>We offer a full range of services to take your website or app from an idea, to fruition.
          </p>
        </div>
          <Service name={"Design"} />
          <Service name={"Develop"} />
          <Service name={"Optimize"} />
          <Service name={"Deploy"} />
        </div>
      </section>
      <section className='h-[60vh] bg-blue-800 relative'>
        <div className=' bg-blue-200 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[90%] lg:w-[60%]'>
          <form className='flex flex-col m-12 gap-4' onSubmit={handleSubmit}>
          {formRes && formRes.success == true && 
            <div className='h-[391px] flex'>
              <div className='flex-col my-auto'>
                <h1 className='mr-auto w-fit font-bold text-5xl mb-2'>Thank you!</h1>
                <h2 className='my-auto mx-auto w-fit font-bold relative mb-2'>
                We have received your submission and are looking it over. We will reach out to you within 24 hours via your preferred contact method.
              </h2>
              <button type="button" className='py-2 px-4 bg-blue-600 rounded-sm font-semibold' onClick={() =>setFormRes(null)}>Submit another message</button>
              </div>
               <Image 
                className=""
                src="/robot-reading.png"
                alt="Cute Robot"
                width={250}
                height={600}
                priority
              />
            </div>
          }
          {formRes == null &&
          <>
            <h1 className='font-bold text-3xl'>Let&apos;s Work Together</h1>
            <div className='flex gap-4'>
              <input type="text" id="fname" onChange={(e)=>handleChange(e,"fname")} name="fname" placeholder=" First Name" className="w-1/3 h-10 rounded-sm"/>
              <input type="text" id="lname" onChange={(e)=>handleChange(e,"lname")} name="lname" placeholder=" Last Name" className="w-1/3 h-10 rounded-sm"/>
              <input type="text" id="country" onChange={(e)=>handleChange(e,"country")} name="country" placeholder=" Country" className="w-1/3 h-10 rounded-sm"/>
            </div>
            <div className='flex gap-4'>
              <input type="text" id="cname" onChange={(e)=>handleChange(e,"cname")} name="cname" placeholder=" Company Name" className="w-1/3  h-10 rounded-sm"/>
              <input type="text" id="email" onChange={(e)=>handleChange(e,"email")} name="email" placeholder=" Email" className="w-1/3 h-10 rounded-sm"/>
              <input type="text" id="phone" onChange={(e)=>handleChange(e,"phone")} name="phone" placeholder=" Phone" className="w-1/3 h-10 rounded-sm"/>
            </div>
            
            <textarea rows={6} cols={3} id="message" onChange={(e)=>handleChange(e,"message")} name="message" className='rounded-sm p-2' placeholder="Please leave a brief description of what you are looking to create, we will be in touch within 24 hours via your preferred contact method." />
            <div className='flex'>
              Preferred Contact Method:&nbsp;
              <input type="radio" id="via_email" onChange={(e)=>handleChange(e,"preferredContact")} value="email" name="fav_contact" />
              <label htmlFor="via_email" className='mx-1'>Email</label>
              <input type="radio" id="via_phone" onChange={(e)=>handleChange(e,"preferredContact")} value="phone" name="fav_contact" />
              <label htmlFor="via_phone" className='mx-1'>Phone</label>
            </div>
            <button type="submit" className='py-2 px-4 bg-blue-700 w-44 text-white font-bold rounded-sm'>Submit</button>
            </>
          }

          </form>
        </div>
      </section>
    </div>
  )
}
