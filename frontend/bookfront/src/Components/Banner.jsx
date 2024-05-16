import React from 'react';
import BannerCard from '../home/BannerCard';


const Banner = () => {
  return (
    <div className='px-4 lg:px-24  flex items-centern 'style={{ backgroundColor: '#ADBC9F' }}>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Exchange your Books here <span className='text-blue-700'> for the best prices</span>
                </h2>
                <p className='md:w-4/5'>etjrht aethaetj aetjjaejt
                aethjaeth aethaetjaeaej aetaee tjjaeaeeth ath at hae tj  j atj aee tja j aj ae tj at6j a j aryj atj  ae5htaetj5aej aetjatey aetjaryrsnrs jayjgfnsryjry oaurhoseipjiv apowirghpaeijb;parhgpiaewh aewewrph9u aprhh p9awh paw9wju
                aehij aepirhjh aephj perjh aeerpj</p>
                <div className="flex flex-col md:flex-row items-start"> {/* Adjust alignment here */}
                    <input type="search" name="search" id="search" placeholder='Search for book' className='py-2 px-9 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            <div>
                <BannerCard> </BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner;
