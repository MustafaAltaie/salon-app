import Staf from '@/app/reusableComponents/Staf';
import React from 'react';

const Section2 = () => {
    return (
        <section className='text-center bg-[#EEE8DC]'>
            <div className='bg-[#222] py-10 px-18 border-t-[0.5px] mainBorder'>
                <h2 className='mainColor' style={{ fontFamily: '"Luxurious Script", cursive' }}>Ready for a fresh look?</h2>
                <h6 className='text-white opacity-70 mt-1 mb-3 lg:px-70 lg:font-[200]'>Booking your next appointment has never been easier. Whether you are planning a quick trim, a fresh color, or a full day of pampering, our simple booking system lets you choose the perfect time, service, and stylist — all in just a few taps.</h6>
                <h6 className='border-[0.5px] mainColor py-1 px-3 w-fit mx-auto'>Book now. Shine later</h6>
            </div>
            <div className='bg-[#EEE8DC] py-10 lg:w-[500px] lg:mx-auto'>
                <h2 className='text-black' style={{ fontFamily: '"Luxurious Script", cursive' }}>Meet the artists</h2>
                <h6 className='text-black'>Passionate about beauty. Experts in precision</h6>
                <Staf laptop={undefined} />
            </div>
        </section>
    )
}

export default Section2;