import React from 'react';

const OpeningHours = () => {
    return (
        <div>
            <div className='relative w-3/4 mx-auto border-[0.5px] mainColorFixed rounded-2xl p-5 text-center'>
                <h2 className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#222]' style={{ fontFamily: '"Luxurious Script", cursive' }}>Opening hours</h2>
                <div className='flex items-center justify-between'>
                    <h5 className='font-[200]'>Monday - Friday</h5>
                    <h6 className='font-[200]'>8:00 AM - 5:00 PM</h6>
                </div>
                <div className='flex items-center justify-between'>
                    <h5 className='font-[200]'>Saturday</h5>
                    <h6 className='font-[200]'>10:00 AM - 3:00 PM</h6>
                </div>
                <h5 className='flex justify-between font-[200]'><span>Sanday</span>Closed</h5>
                <div className='absolute flex gap-3 bottom-0 left-1/2 translate-y-1/2 -translate-x-[50%] bg-[#222]'>
                    <i className="fa-solid fa-phone text-lg"></i>
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <i className="fa-brands fa-facebook-messenger text-lg"></i>
                </div>
            </div>
        </div>
    )
}

export default OpeningHours;