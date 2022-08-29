import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center py-5 dark:bg-black dark:text-slate-200 font-garamond'>
            <span>Copyright &copy; {new Date().getFullYear()} David Davies Law, PLLC</span>
        </footer>
    )
}

export default Footer