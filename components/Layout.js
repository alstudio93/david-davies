import React from 'react'
import Footer from './Footer'
import Navbar from './Navigation'
import Head from 'next/head'

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{"Davies Law, PLLC | " + title || "Davies Law Firm"}</title>
                <meta name="description" content="Davies Law Firm, PLLC - Protecting and Providing for Those You Love" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className='dark:bg-black dark:text-slate-200 font-garamond'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout