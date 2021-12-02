import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <footer className=' w-100 text-center bg-light'> &copy; {date} All Rights Reserved</footer>
        </>
    )
}

export default Footer
