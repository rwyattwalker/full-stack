import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100vh] flex bg-[#222222]">
        <div className="my-auto ml-32">
          <Image
            className=""
            src="/robot.png"
            alt="Cute Robot"
            width={400}
            height={800}
            priority
          />
        </div>
        <div className='stroke flex flex-col my-auto ml-auto mr-[20rem] main-title'>
          <div>TECH</div>
          <div>MADE</div>
          <div>SIMPLE</div>
        </div>
      </main>
    </>
  )
}
