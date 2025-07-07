import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

interface Props {
    laptop: boolean
}

const Footer = ({ laptop }: Props) => {
    return (
        <footer className='bg-[#222] overflow-x-hidden'>
            <div className={`${laptop ? 'w-[700px] mx-auto' : 'flex flex-col'}`}>
                <div className='text-center p-5'>
                    <h4 className='mainColor mb-1'>Welcome to our Salon</h4>
                    <h6 className='text-white opacity-70 px-5'>Where self-care meets style. Our team of expert stylists and beauty professionals is here to help you feel your absolute best — from the moment you walk in, to long after you leave. Book your next appointment and experience beauty, redefined.</h6>
                </div>
                <div className={`flex ${!laptop && 'flex-col algib'} gap-5 px-5 mb-5`}>
                    <div className={`${laptop ? 'w-[40%]' : 'w-full order-2 flex flex-col items-center'}`}>
                        <h5 className='mainColor mb-1'>Reach as directly</h5>
                        <div className={`${!laptop && 'flex gap-5'}`}>
                            <div className='flex gap-2'>
                                <PhoneIcon className='w-4 mainColor' />
                                <h5 className='text-white opacity-70'>Give us a call</h5>
                            </div>
                            <div className='flex gap-2'>
                                <EnvelopeIcon className='w-4 mainColor' />
                                <h5 className='text-white opacity-70'>Send us an email</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${laptop ? 'w-[35%]' : 'w-full flex flex-col items-center order-0'}`}>
                        <h5 className={`mainColor mb-1`}>Follow us on social media</h5>
                        <div className='flex gap-2'>
                            <a href="#">
                                <i className="fa-brands fa-twitter mainColor text-[14px]"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-facebook mainColor text-[14px]"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-instagram mainColor text-[14px]"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-pinterest mainColor text-[14px]"></i>
                            </a>
                        </div>
                    </div>
                    <div className={`${laptop ? 'w-[25%]' : 'w-full flex flex-col items-center order-1'}`}>
                        <h5 className='mainColor mb-2'>You can find us in</h5>
                        <div className='flex flex-wrap gap-1'>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColor'>Sweden</h6>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColor'>Denimark</h6>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColor'>UK</h6>
                            <h6 className='border-[0.5px] px-2 rounded-lg mainColor'>Germany</h6>
                        </div>
                    </div>
                </div>
                <div className='border-t-[0.5px] border-[#ffffff55] pt-3'>
                    <h6 className="text-white opacity-70 text-center pb-4">
                        &copy; {new Date().getFullYear()} Salon Name. All rights reserved.
                    </h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;