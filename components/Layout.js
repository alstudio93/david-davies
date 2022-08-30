import Footer from './Footer'
import Navbar from './Navigation'
import Head from 'next/head'

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{"Davies Law, PLLC | " + title || "Davies Law Firm"}</title>
                <meta name="description" content="Davies Law Firm, PLLC - Protecting and Providing for Those You Love" />
                <link rel="icon" href="/favicon/favicon.png" />

                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />

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