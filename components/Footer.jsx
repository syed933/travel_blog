import React from 'react'
import Image from 'next/image'
import HeaderLogo from '../public/Final-logo1.jpg'
import instagram from '/public/instagram48.png'
import meta from '/public/meta48.png'
import tictok from '/public/tictok48.png'
import youtube from '/public/youtube48.png'
import Link from 'next/link'

const today = new Date();

const Footer = () => {
    return (
        <div>
            <footer className="footer-1 bg-white py-8 sm:py-12 bottom-0">
              <div className="container mx-auto px-4">
                <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
                    <Image 
                            unoptimized
                            alt='logo'
                            height={200}
                            width={200}
                            className='-mt-8'             
                            src={HeaderLogo} 
                        />
                    <div className='flex pb-4'>
                        <a rel="noreferrer" href='https://instagram.com/sertanhikes?igshid=YmMyMTA2M2Y=' target="_blank">
                            <Image 
                                unoptimized
                                alt='Instagram'
                                height={30}
                                width={30}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ instagram } 
                            />
                        </a>
                        <a rel="noreferrer" href='https://m.facebook.com/100089093135228/' target="_blank">
                            <Image 
                                unoptimized
                                alt='Meta'
                                height={30}
                                width={30}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ meta } 
                            />
                        </a>
                        <a rel="noreferrer" href='https://www.tiktok.com/@sertanusanmaz?_t=8YRJQHzpg1m&_r=1' target="_blank">
                            <Image 
                                unoptimized
                                alt='TicTok'
                                height={30}
                                width={30}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ tictok } 
                            />
                        </a>
                        <a rel="noreferrer" href='https://www.youtube.com/@sertanhikes' target="_blank">
                            <Image 
                                unoptimized
                                alt='TicTok'
                                height={30}
                                width={30}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ youtube } 
                            />
                        </a>

                    </div>
                    <p className='text-xs text-center'>© {today.getFullYear()} SERTANHIKES. ALL RIGHTS RESERVED.</p>
                  </div>
                  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
                    <h5 className="text-xl font-bold mb-6">Address</h5>
                    <ul className="list-none footer-links">
                      <li className="mb-2 flex flex-col">
                        <span className="mb-2">Sertan Hikes</span>
                        <span className="mb-2">POBOX 1475,</span>
                        <span className="mb-2">Carmichael, CA 95609</span>
                      </li>
                    </ul>
                  </div>
                  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
                    <h5 className="text-xl font-bold mb-6">About</h5>
                    <ul className="list-none flex flex-col footer-links">
                    <Link className='mb-2 border-b border-solid border-transparent hover:text-blue-500' rel="noreferrer" href='post/about'>My Story</Link>
                      <Link className='mb-2 border-b border-solid border-transparent hover:text-blue-500' rel="noreferrer" href='all-blogs'>All Hikes</Link>
                      <Link className='mb-2 border-b border-solid border-transparent hover:text-blue-500' rel="noreferrer" href='post/gallery'>Gallery</Link>
                    </ul>
                  </div>
                  <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
                    <h5 className="text-xl font-bold mb-6">Contact</h5>
                    <ul className="list-none flex flex-col footer-links">
                      <Link className='mb-2 border-b border-solid border-transparent hover:text-blue-500' rel="noreferrer" href='/contact'>Book A Hike</Link>
                      <Link className='mb-2 border-b border-solid border-transparent hover:text-blue-500' rel="noreferrer" href='/contact'>Sponsors</Link>
                      <Link className='mb-2 border-b border-solid border-transparent hover:text-blue-500' rel="noreferrer" href='/contact'>Contact Us</Link>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
        </div>
    )
}

export default Footer
