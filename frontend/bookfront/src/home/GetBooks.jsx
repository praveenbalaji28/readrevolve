import React from 'react'
import aha from "../assets/banner-background/6906617.jpg"
import { Link } from 'react-router-dom';

const GetBooks = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-40'>
        <div className='md:w-1/2'>
            <img src={aha} alt='chumma'></img>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favotite <span className='text-blue-700'>Book Here
            </span></h2>
            <p className='mb-10 text-lg md:w-5/6'>
                yjrtmj rymyy ryj rtj  rtj  tjtjr tj rt jzr tjtjztjztj
                tjrtj ryj ryj ryj r j rj r yjxr ym xrym rxy mx,y, rx mztm
                wrhetdj ejtzdgxfhm eetjdgfxm ryjmhtjrdg ntjtdgnryj etej 
            </p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>!2000+</h3>
                    <p className='text-base'>Pdf Downloads</p>
                </div>
            </div>
                <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
        
    </div>
  )
}

export default GetBooks;