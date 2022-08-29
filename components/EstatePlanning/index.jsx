import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import FAQ from '../FAQ'

const EstatePlanningHomeComp = () => {
    const router = useRouter();
    const page = router.pathname;
    return (
        <section id="estateplanning" className="grid px-2 mx-auto pt-[132px] lg:pt-44 max-w-section ">
            <h2 className='text-center text-section-h2'>Estate Planning</h2>
            <div className='flex flex-col items-center justify-between pt-8 gap-y-10 lg:flex-row'>
                <Image src="/estate-planning.jpg" width="500" height="500" className="rounded-lg" />
                <div className='relative'>
                    <p className='max-w-3xl text-xl'>Estate Planning is the practice of making it plainly understood how you want your
                        estate to be managed after your death or if you no longer have capacity and are unable to deal
                        with things for yourself.</p>
                    <ul className='pt-5 pl-4 list-disc'>
                        <li>Last Wills and Testaments</li>
                        <li>Trusts</li>
                        <li>Revocable Trusts</li>
                        <li>Irrevocable Trusts</li>
                        <li>Powers of Attorneys</li>
                        <li>Health Care Directives</li>
                        <li>Beneficiary Deeds</li>
                        <li>Contracts (several types)</li>
                        <li>Mortgages</li>
                    </ul>
                    <div className='before:absolute before:shadow-contentShadow before:bottom-20 before:rounded-full before:right-20 before:blur before:opacity-20 lg:before:hidden' />
                </div>
            </div>

            {page !== "/estateplanning" && <Link id="estateplanning" href="/estateplanning"><a className='px-3 py-2 mx-auto mt-10 text-lg text-center border rounded-lg w-52 border-slate-400 dark:border-slate-200'>Learn More</a></Link>}


            {page === "/estateplanning" && <FAQ />}
        </section>
    )
}

export default EstatePlanningHomeComp