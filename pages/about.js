import React from 'react'


const about = () => {
    return (
            <div className='rounded-lg p-0 lg:p-8 h-screen bg-gradient-to-r from-blue-100 to-transparent'>
            <div className="relative bg-white overflow-hidden shadow-md pb-80 mb-6">
                <img 
                src='/public/hero.jpg' 
                alt='post'
                className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                />
            </div>
            <h1 className='transition duration-100 text-center mb-8 cursor-pointer
            hover:text-gray-600 text-3xl font-semibold
            '>
 
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img 
                     src='/public/bg2.jpg'
                    alt='post'
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full"
                    />
                    <p className='inline align-middle text-gray-700 ml-2 text-lg'>Name</p>
                </div>
                <div className='font-medium text-gray-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2      
                    text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>  
                <span>
            
                </span>
                </div>
            </div>
            <p className='text-center text-lg text-gray-700 font-normal px-4
            lg:px-20 mb-8'></p>
            <div className="text-center">

            </div>

        </div>
    )
}

export default about
