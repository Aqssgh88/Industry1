import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { ThemeController } from './ThemeController';
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
// import { BsMoonFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";


const Navbar = () => {

    const [isScrolled, setIsScrolled] = React.useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0rem)';
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        })
    }, []);

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                {/* <Image src={assets.header_bg_color} alt='header background' className='w-full ' /> */}
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? "bg-gray bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>

                <a href="#top" className="flex items-center cursor-pointer mr-14 text-gray-400">
                    <h1 className="text-[32px] font-bold tracking-wide">
                        <span style={{ fontFamily: "'Ovo', serif" }}>Faizi Industry</span>
                        <span className="text-[#e642a3]">.</span>
                    </h1>
                </a>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
    ${isScrolled ? "" : "  shadow-sm dark:shadow-md bg-opacity-50 dark:bg-opacity-70"}`}>
                    <li><a className='font-Ovo text-black dark:text-white hover:font-semibold hover:underline hover:text-white underline-offset-8' href='#top'>Home</a></li>
                    <li><a className='font-Ovo text-black dark:text-white hover:font-semibold hover:underline hover:text-white underline-offset-8' href='#about'>About me</a></li>
                    <li><a className='font-Ovo text-black dark:text-white hover:font-semibold hover:underline hover:text-white underline-offset-8' href='#services'>Services</a></li>
                    <li><a className='font-Ovo text-black dark:text-white hover:font-semibold hover:underline hover:text-white underline-offset-8' href='#products'>My Collection</a></li>
                    <li><a className='font-Ovo text-black dark:text-white hover:font-semibold hover:underline hover:text-white underline-offset-8' href='#reviews'>Reviews</a></li>
                    <li><a className='font-Ovo text-black dark:text-white hover:font-semibold hover:underline hover:text-white underline-offset-8' href='#contact'>Contact me</a></li>
                </ul>


                {/* Right: Contact button */}
                <div className='flex items-center gap-4 '>

                    <ThemeController />



                    {/* Contact button - show on md and up */}
                    <a
                        href='#contact'
                        className='hidden md:flex font-Ovo items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 
                 text-black
       hover:bg-black hover:text-white
       dark:text-white dark:border-gray-400
       dark:hover:bg-white dark:hover:text-black
       transition duration-300'
                    >
                        Contact

                        <FaArrowRightLong className='text-sm' />
                    </a>


                    {/* Menu icon - show only on small screens */}
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <FiMenu className='text-2xl' />
                    </button>
                </div>

                <ul ref={sideMenuRef} className='flex md:hidden flex-col dark:bg-black gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <RxCross2 className='text-xl cursor-pointer' />
                    </div>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#services'>Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#products'>My Collection</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#reviews'>Reviews</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
                </ul>
            </nav>
        </>
    );

};

export default Navbar;
