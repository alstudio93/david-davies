import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/about'
import EstatePlanningHomeComp from '../components/EstatePlanning'
import BusinessLawHomeComp from '../components/BusinessLaw'
import VeteransPlanningHomeComp from '../components/VeteransPlanning'
import ElderLawHomeComp from '../components/ElderLaw'
import VerticleDivider from '../components/VerticleDivider'

export default function Home() {
  return (
    <>

      <Layout >

        <Hero />

        <About />

        <VerticleDivider adjustedTopLargeScreen="lg:top-[905px]" adjustedTopMobile="top-[60px]" />


        {/* <div className='h-[100px] w-[1px] bg-slate-300 dark:bg-white mx-auto relative' /> */}

        <EstatePlanningHomeComp />

        <VerticleDivider />

        <BusinessLawHomeComp />

        <VerticleDivider />


        <ElderLawHomeComp />

        <VerticleDivider />


        <VeteransPlanningHomeComp />

      </Layout>
    </>
  )
}
