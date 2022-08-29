import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'

const ElderLawHomeComp = () => {
    return (
        <section className="grid px-2 pt-48 mx-auto max-w-section">
            <h2 className='text-center text-section-h2'>Elder Law</h2>
            <div className='flex flex-col items-center justify-between pt-8 lg:flex-row'>
                <Image src="/elder-law.jpeg" width="500" height="500" className="rounded-lg" />
                <div>
                    <p className='max-w-3xl text-xl'>Elder law is the field of law that covers the varied legal needs of aging
                        populations. Many people think this is an area of law that can be ignored until close to the
                        time of retirement, but it is always a good idea to create a plan early.</p>
                    <ul className='pt-5 pl-4 list-disc'>
                        <li>Business Formation</li>
                        <li>Business Operations</li>
                        <li>Business Succession Planning</li>
                        <li>Non-profit Businesses</li>
                        <li>Merges and Acquisitions</li>
                        <li>Funding</li>
                        <li>Escrow Services</li>
                    </ul>
                </div>
            </div>
            <Link href="/business-law"><a className='px-3 py-2 mx-auto mt-10 text-lg text-center border rounded-lg w-52'>Learn More</a></Link>
        </section>
    )
}

export default ElderLawHomeComp