import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import Image from 'next/image'
import HeaderLogo from '../public/Final-logo1.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'





const Header = () => {
    
        const [categories, setCategories] = useState([]);
    
        useEffect(() => {
            getCategories()
             .then((newCategories) => setCategories(newCategories))
        }, [])
        
        const [nav, setNav] = useState(false)

        const handleNav = () => {
           setNav(!nav) 
        };



    return (
        <div className='container mx-auto px-10 md:justify-between'>
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href='/'>
                        <Image 
                            unoptimized
                            alt='logo'
                            height={125}
                            width={125}
                            className='rounded-full text-shadow drop-shadow-md hover:scale-.05'              
                            src={HeaderLogo} 
                        />
                    </Link>
                </div>
                <div className='hidden md:float-right md:contents'>
                    <ul className='flex md:float-right items-center mt-8'>
                        <li>
                            <Link  rel="noreferrer" href='/' className="lg:text-xl font-medium mr-8 text-blue-900 hover:text-gray-900 md:text-sm">Home</Link>
                        </li>
                        <li>
                            <Link rel="noreferrer" href='post/about' className="lg:text-xl font-medium mr-8 text-blue-900 hover:text-gray-900 md:text-sm">About</Link>
                        </li>
                        <li>
                            <Link rel="noreferrer" href='/post/gallery' className="lg:text-xl font-medium mr-8 text-blue-900 hover:text-gray-900 md:text-sm">Gallery</Link>
                        </li>
                        <li>
                            <Link rel="noreferrer" href='/all-blogs' className="lg:text-xl font-medium mr-8 text-blue-900 hover:text-gray-900 md:text-sm">All-Blogs</Link>
                        </li>
                        <li>
                            <Link rel="noreferrer" href='/contact' className="lg:text-xl font-medium mr-16 text-blue-900 hover:text-gray-900 md:text-sm">Sponsor</Link>
                        </li>

                        <button className='md:px-4 transition duration-500 transform hover:-translate-y-1
                            inline-block bg-blue-500 md:text-sm lg:text-xl font-medium rounded-lg text-white px-10 py-3 cursor-pointer'>
                            <Link rel="noreferrer" href='/contact'>Book A Hike</Link>
                        </button>
                    </ul>
                    
                </div>
                    {/* Mobile Button */}
                    <div onClick={handleNav} className='block md:hidden float-right cursor-pointer z-20 absolute top-10 right-10 h-14 w-14'>
                        {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
                    </div>

                    {/* Mobile Menu */}
                    <div className={ nav ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white z-10 text-center ease-in duration-300' : 'md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white z-10 text-center ease-in duration-300' }>
                        <ul>
                            <li className="p-4 text-4xl text-blue-900 hover:text-gray-900">
                                <Link onClick={handleNav} rel="noreferrer" href='/'>Home</Link>
                            </li>
                            <li className="p-4 text-4xl text-blue-900  hover:text-gray-900">
                                <Link onClick={handleNav} rel="noreferrer" href='/post/about'>About</Link>
                            </li>
                            <li className="p-4 text-4xl text-blue-900 hover:text-gray-900">
                                <Link onClick={handleNav} rel="noreferrer" href='/gallery'>Gallery</Link>
                            </li>
                            <li className="p-4 pb-8 text-4xl font-medium text-blue-900 hover:text-gray-900">
                                <Link onClick={handleNav} rel="noreferrer" href='/all-blogs'>All-Blogs</Link>
                            </li>
                            <li className="p-4 pb-8 text-4xl font-medium text-blue-900 hover:text-gray-900">
                                <Link onClick={handleNav} rel="noreferrer" href='/contact'>Sponsor</Link>
                            </li>
                            <li>
                        </li>

                            <button className='py-4 transition duration-500 transform hover:-translate-y-1
                                inline-block bg-blue-500 text-4xl rounded-lg text-white px-8 py-3 cursor-pointer'>
                                <Link onClick={handleNav} rel="noreferrer" href='/contact'>Book A Hike</Link></button>
                        </ul>
                    </div>












            </div>
        </div>
    )
    
}

export default Header
