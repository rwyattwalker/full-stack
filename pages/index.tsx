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
      <section className='min-h-[50vh] h-fit bg-red-200 flex flex-col'>
       
        <div className='bg-blue-200 h-fit my-auto mx-44 flex gap-4 justify-center'> 
        <div className='flex flex-col w-1/5 justify-center text-left'>
          <h1 className="font-bold text-3xl underline">Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea rerum minus est. Magni exercitationem, voluptates expedita sed nam quibusdam sunt unde dignissimos molestias ratione eligendi quia hic suscipit provident.</p>
        </div>
          <Service name={"Design"} />
          <Service name={"Develop"} />
          <Service name={"Optimize"} />
          <Service name={"Deploy"} />
        </div>
      </section>
      <section className='h-[100vh] bg-blue-200'>
        Contact
      </section>
    </>
  )
}
