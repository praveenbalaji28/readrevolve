import React from 'react'
import { Link } from 'react-router-dom';
import bookpic from "../assets/banner-background/771.jpg"

const PromoBanner = () => {
  return (
    <div className='mt-16 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Aha Oho oooo</h2>
                <Link to="/shop" className='block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black translate-all duration-300'>Vanakam</button></Link>
            </div>
            <div>
                <img src={bookpic} alt="bookda" className='w-96'></img>
            </div>
        </div>

        
    </div>
  )
}

export default PromoBanner;