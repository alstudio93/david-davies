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

      <Layout >
        <Hero />
        <About />

        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-[60px] lg:top-[85px]' />
        <EstatePlanningHomeComp />
        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-20 lg:top-[108px]' />

        <BusinessLawHomeComp />
        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-20 lg:top-[108px]' />

        <ElderLawHomeComp />
        <div className='h-[100px] w-[1px] bg-black dark:bg-white mx-auto relative top-20 lg:top-[108px]' />

        <VeteransPlanningHomeComp />
      </Layout>
    </>
  )
}
