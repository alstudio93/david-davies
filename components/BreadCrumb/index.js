import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsArrowLeftCircle } from 'react-icons/bs'

const Breadcrumb = () => {
    const router = useRouter();

    return (
        <div id="breadcrumb">
            <span className='relative text-black top-10'
                onClick={() => router.back()}>
                <BsArrowLeftCircle className='arrow-icon' /> Back One Page</span>
        </div>
    )
}

export default Breadcrumb