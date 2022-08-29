import React from 'react'
import Footer from './Footer'
import Navbar from './Navigation'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='dark:bg-black dark:text-slate-200 font-garamond'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout