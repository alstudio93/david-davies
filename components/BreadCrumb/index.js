import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { BsArrowLeftCircle } from 'react-icons/bs'

const Breadcrumb = ({ pageTitle }) => {
    const router = useRouter();
    console.log(router);
    return (
        <div id="breadcrumb" className='mx-auto lg:hidden'>
            <span className='flex items-center text-white gap-x-2'
                onClick={() => router.push("/")}>
                <BsArrowLeftCircle className='cursor-pointer arrow-icon' /> Back One Page / {pageTitle}</span>
        </div>
    )
}

export default Breadcrumb