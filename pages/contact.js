import React from 'react'
import Image from '/public/contact-image.jpg'


const contact = () => {
    return (
        <div className='bg-gradient-to-r from-blue-100 to-transparent lg:p-8'>
            <div className='h-screen'>
                <div className='container pt-36 mx-auto'>
                    <div className='flex w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
                        <div className='w-1/2' style={{
                        backgroundImage: `url(${Image.src})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        }}>
                        </div>
                        <div className='w-1/2 py-16 px-12'>
                            <h2 className='text-3xl mb-4'>Book a Hike!</h2>
                            <p className='mb-6'>Sign up below to book a spot for the next guided hike!</p>
                            <form action="https://formsubmit.co/your@email.com" method="POST">
                                <div className='grid grid-cols-2 gap-5'>
                                    <input placeholder='First Name' type="text" className='border border-gray-400 rounded py-1 px-2'/>
                                    <input placeholder='Last Name' type="text" className='border border-gray-400 rounded py-1 px-2'/>
                                </div>
                                <div className='mt-8'>
                                    <input placeholder='E-Mail' type="text" className='border border-gray-400 rounded py-1 px-2 w-full'/>
                                </div>
                                <div className='mt-8'>
                                    <input placeholder='Phone Number' type="tel" className='border border-gray-400 rounded py-1 px-2 w-full'/>
                                </div>
                                <div className='mt-8'>
                                    <input type="date" className='border border-gray-400  rounded py-1 px-2 w-full text-gray-400'/>
                                </div>
                                <div className='mt-8 flex flex-col'>
                                            <select  className='border border-gray-400 rounded py-1 py-2 cursor-pointer' name="select-where" id="select-where" required>
                                                <option className='pl-4' value="">Choose an Option &darr;</option>
                                                <option value="Subscribe to Newsletter">Subscribe to Newsletter</option>
                                                <option value="Sponsor">Sponsor</option>
                                                <option value="Book A Hike">Book A Hike</option>
                                                <option value="Other">Other</option>
                                            </select>
                                    </div>
                                <div className='mt-8'>
                                    <textarea placeholder='Write a message' className='border border-gray-400 rounded px-1 py-2 w-full' name="" id="" cols="26" rows="5"></textarea>
                                </div>
                                <button className='py-4 mt-10 transition duration-500 transform hover:-translate-y-1
                                inline-block bg-blue-500 rounded-lg text-white py-1.5 px-4 cursor-pointer w-full'>
                                Submit</button>
                                <input type="hidden" name="_next" value="https://www.google.com"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
