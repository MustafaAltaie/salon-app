import React from 'react';
import DirectContact from '@/app/reusableComponents/DirectContact';
import OpeningHours from '@/app/reusableComponents/OpeningHours';
import SocialIcons from '@/app/reusableComponents/SocialIcons';

interface Props {
    laptop: boolean | undefined
}

const Footer = ({ laptop }: Props) => {
    return (
        <footer className='bg-[#222] overflow-x-hidden border-t-[0.5px] border-[#ffffff55]'>
            <div className={`${laptop ? 'w-[700px] mx-auto' : 'flex flex-col'}`}>
                <div className='text-center p-5'>
                    <h4 className='mainColorFixed mb-1 font-[200]'>Welcome to our Salon</h4>
                    <h6 className='text-white opacity-70 px-5 font-[200]'>Where self-care meets style. Our team of expert stylists and beauty professionals is here to help you feel your absolute best — from the moment you walk in, to long after you leave. Book your next appointment and experience beauty, redefined.</h6>
                </div>
                <div className={`flex ${!laptop && 'flex-col algib'} gap-5 px-5 mb-5`}>
                    <DirectContact laptop={laptop} />
                    <div className={`${laptop ? 'w-[35%]' : 'w-full flex flex-col items-center order-0'}`}>
                        <h5 className='mainColorFixed mb-1 font-[200]'>Follow us on social media</h5>
                        <SocialIcons />
                    </div>
                    <div className={`${laptop ? 'w-[25%]' : 'w-full flex flex-col items-center order-1'}`}>
                        <h5 className='mainColorFixed mb-2 font-[200]'>You can find us in</h5>
                        <div className='flex flex-wrap gap-1'>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColorFixed font-[200]'>Sweden</h6>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColorFixed font-[200]'>Denimark</h6>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColorFixed font-[200]'>UK</h6>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColorFixed font-[200]'>Germany</h6>
                        </div>
                    </div>
                    {!laptop && <OpeningHours />}
                </div>
                {laptop &&
                <div className='mb-10 px-30'>
                    <OpeningHours />
                </div>}
            </div>
            <div className='border-t-[0.5px] border-[#ffffff55] pt-3'>
                <h6 className="text-white opacity-70 text-center pb-4 font-[200]">
                    &copy; {new Date().getFullYear()} Salon Name. All rights reserved.
                </h6>
            </div>
        </footer>
    )
}

export default Footer;