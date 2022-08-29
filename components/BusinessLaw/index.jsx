import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'

const BusinessLawHomeComp = () => {
    return (
        <section className="grid px-2 mx-auto pt-[136px] max-w-section">
            <h2 className='text-center text-section-h2'>Business Law</h2>
            <div className='flex flex-col items-center justify-between pt-8 lg:flex-row-reverse'>
                <Image src="/business-law.jpeg" width="500" height="500" className="rounded-lg" />
                <div className='relative'>
                    <p className='max-w-3xl text-xl'>Business law is the law that contains regulations and policies that govern
                        the actions of a business.</p>
                    <ul className='pt-5 pl-4 list-disc'>
                        <li>Business Formation</li>
                        <li>Business Operations</li>
                        <li>Business Succession Planning</li>
                        <li>Non-profit Businesses</li>
                        <li>Merges and Acquisitions</li>
                        <li>Funding</li>
                        <li>Escrow Services</li>
                    </ul>
                    <div className='before:absolute before:shadow-contentShadow before:bottom-20 before:rounded-full before:right-20 before:opacity-20 lg:before:hidden' />

                </div>
            </div>
            <Link href="/business-law"><a className='px-3 py-2 mx-auto mt-10 text-lg text-center border rounded-lg w-52'>Learn More</a></Link>
        </section>
    )
}

export default BusinessLawHomeComp