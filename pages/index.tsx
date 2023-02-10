import type { NextPage } from 'next'
import Head from 'next/head'
//import Image from 'next/image'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-roboto',
})


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.variable} font-sans`}>
          <div className="text-3xl font-bold underline">Hello World!!!</div>
      </main>
    </>
  )
}
export default Home
