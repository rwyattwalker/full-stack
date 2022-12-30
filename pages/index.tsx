import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import Service from '../components/service'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100vh] flex bg-gradient-to-r from-blue-400 to-blue-800">
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
      <section className='min-h-[50vh] h-fit bg-blue-800 flex flex-col'>
       
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
          <form className='flex flex-col m-12 gap-4' action="/api/form" method='post'> 
          <h1 className='font-bold text-3xl'>Let&apos;s Work Together</h1>
            <div className='flex gap-4'>
              <input type="text" id="fname" name="fname" placeholder=" First Name" className="w-1/3 h-10 rounded-sm"/>
              <input type="text" id="lname" name="lname" placeholder=" Last Name" className="w-1/3 h-10 rounded-sm"/>
              <input type="text" id="country" name="country" placeholder=" Country" className="w-1/3 h-10 rounded-sm"/>
            </div>
            <div className='flex gap-4'>
              <input type="text" id="cname" name="cname" placeholder=" Company Name" className="w-1/3  h-10 rounded-sm"/>
              <input type="text" id="email" name="email" placeholder=" Email" className="w-1/3 h-10 rounded-sm"/>
              <input type="text" id="phone" name="phone" placeholder=" Phone" className="w-1/3 h-10 rounded-sm"/>
            </div>
            
            <textarea rows={6} cols={3} id="message" name="message" className='rounded-sm p-2' placeholder="Please leave a brief description of what you are looking to create, we will be in touch within 24 hours via your preferred contact method." />
            <div className='flex'>
              Preferred Contact Method:&nbsp;
              <input type="radio" id="via_email" value="email" name="fav_contact" />
              <label htmlFor="via_email" className='mx-1'>Email</label>
              <input type="radio" id="via_phone" value="phone" name="fav_contact" />
              <label htmlFor="via_phone" className='mx-1'>Phone</label>
            </div>
            <button type="submit" className='py-2 px-4 bg-blue-700 w-44 text-white font-bold rounded-sm'>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}
