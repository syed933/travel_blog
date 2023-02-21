import React, { useState, useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'
 
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
         .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Hiking Destinations
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='cursor-pointer block pb-3 mb-3'>
                        {category.name}
                    </span>
                </Link>
            ))}
            <div className='flex flex-col gap-4 col-span-3'>
                <button className='md:px-4 transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-500 md:text-sm lg:text-sm font-medium rounded-lg text-white px-10 py-3 cursor-pointer'>
                    <Link href='/contact'>Subscribe</Link>
                </button>
                <button className='md:px-4 transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-500 md:text-sm lg:text-sm font-medium rounded-lg text-white px-10 py-3 cursor-pointer'>
                    <Link href='/contact'>Sponsor</Link>
                </button>
                <button className='md:px-4 transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-500 md:text-sm lg:text-sm font-medium shadow-lg rounded-lg text-white px-10 py-3 cursor-pointer'>
                    <Link href='/contact'>Book A Hike</Link>
                </button>
            </div>
        </div>
    )
}

export default Categories
