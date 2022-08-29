import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/about'
import EstatePlanningHomeComp from '../components/EstatePlanning'
import BusinessLawHomeComp from '../components/BusinessLaw'
import VeteransPlanningHomeComp from '../components/VeteransPlanning'
import ElderLawHomeComp from '../components/ElderLaw'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        <Hero />
        <About />

        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-[85px]' />
        <EstatePlanningHomeComp />
        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-[108px]' />

        <BusinessLawHomeComp />
        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-[108px]' />

        <ElderLawHomeComp />
        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-[108px]' />

        <VeteransPlanningHomeComp />
      </Layout>
    </>
  )
}
