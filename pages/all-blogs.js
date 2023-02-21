import React from 'react'
import { getAllPosts } from '../services'
import { PostCard } from '../components'

const AllBlogs = ( { posts }) => {
    return (
      <>

        <h1 className='border-red text-7xl text-white font-bold pl-36'>All Hikes</h1>
        <div className="lg:p-8 pb-12 mb-8 m-24">
             <div className='flex flex-wrap'>
             <div className="grid lg:grid-cols-12 gap-1">
                <div className='lg:col-span-12 col-span-1 gap-10 flex flex-wrap px-4'>
                      {posts.map((post, i) => <PostCard post={post} key={i} />)}
                </div>
              </div>
             </div>
        </div>
      </>
    )
}

export async function getStaticProps() {
    const posts = (await getAllPosts()) || [];
  
    return {
      props: { posts },
      revalidate: 10,
    }
  
  }

export default AllBlogs