import React from 'react'
import Image from 'next/image'
import instagram from '/public/instagram48.png'
import meta from '/public/meta48.png'
import tictok from '/public/tictok48.png'
import youtube from '/public/youtube48.png'



const Hero = () => {
    return (
        <div className='py-30 pb-32 mt-10'>
            <div className="flex flex-row">
                <div className='w-full'>
                    <span className='text-7xl text-orange-500 font-bold pb-10 drop-shadow-md'>Sertan Hikes</span>
                    <br/>
                    <br/>
                    <span className='text-2xl  font-bold'>A blog of all my adventures</span>
                    <br/>
                    <div className='pt-8 container px-1 py-2'>
                        <p className='text-xl leading-8 font-medium text-white'>
                        Sertan Usanmaz is a passionate Turkish-American mountain climber and hiker who lives in the State of California. He climbs and hikes mountains from around the world with the ambitious goal of conquering the 7 summits. He has tackled and conquered several prominent mountain summits in California such as Mount Whitney, Mount Langley and Mount Shasta, along with Mount Hood and Mount Rainier in the Cascade region. He has also summited Western Europe&apos;s tallest mountain, Mont Blanc along with Mount Ararat in Turkey. If you are an avid hiker or climber or simply just enjoy backpacking adventures in California then you&apos;ve come to the right spot! If you enjoy reading about my hiking adventures, then use the &quot;Book a Hike&quot; button at the top right corner to go hiking with me on a guided trip in California 😁✌🏻🏔️🥾🌎 #HappyTrails
                        </p>
                    </div>
                    <div className='flex'>
                        <a rel="noreferrer" href='https://instagram.com/sertanhikes?igshid=YmMyMTA2M2Y=' target="_blank">
                            <Image 
                                unoptimized
                                alt='Instagram'
                                height={48}
                                width={48}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ instagram } 
                            />
                        </a>
                        <a rel="noreferrer" href='https://m.facebook.com/100089093135228/' target="_blank">
                            <Image 
                                unoptimized
                                alt='Meta'
                                height={48}
                                width={48}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ meta } 
                            />
                        </a>
                        <a rel="noreferrer" href='https://www.tiktok.com/@sertanusanmaz?_t=8YRJQHzpg1m&_r=1' target="_blank">
                            <Image 
                                unoptimized
                                alt='TicTok'
                                height={48}
                                width={48}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ tictok } 
                            />
                        </a>
                        <a rel="noreferrer" href='https://www.youtube.com/@sertanhikes' target="_blank">
                            <Image 
                                unoptimized
                                alt='TicTok'
                                height={48}
                                width={48}
                                className='text-shadow drop-shadow-md ease-in-out duration-300 hover:scale-125 mt-5 mr-5'              
                                src={ youtube } 
                            />
                        </a>

                    </div>
                </div>
            </div>

            

        </div>
        
    )
}

export default Hero
