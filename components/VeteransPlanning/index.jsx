import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'

const VeteransPlanningHomeComp = () => {
    return (
        <section className="grid px-2 py-[145px] mx-auto max-w-section">
            <h2 className='text-center text-section-h2'>Veterans&#39; Planning</h2>
            <div className='flex flex-col items-center justify-between pt-8 lg:flex-row-reverse'>
                <Image src="/veterans-planning.jpeg" width="500" height="500" className="rounded-lg" />
                <div>
                    <p className='max-w-3xl text-xl'>Veterans’ planning is the field of law that covers the varied legal needs of those
                        who have served our country.</p>
                    <ul className='pt-5 pl-4 list-disc'>
                        <li>War-time Veteran’s Benefits</li>
                    </ul>
                </div>
            </div>
            <Link href="/business-law"><a className='px-3 py-2 mx-auto mt-10 text-lg text-center border rounded-lg w-52'>Learn More</a></Link>
        </section>
    )
}

export default VeteransPlanningHomeComp