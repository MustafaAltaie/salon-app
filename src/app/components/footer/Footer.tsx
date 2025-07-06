import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

interface Props {
    laptop: boolean
}

const Footer = ({ laptop }: Props) => {
    return (
        <footer className='bg-[#222]'>
            <div className={`${laptop && 'w-1/2 mx-auto'}`}>
                <div className='text-center p-5'>
                    <p className='text-[#a70] mb-1'>Welcome to our Salin</p>
                    <h6 className='text-white opacity-70'>Where self-care meets style. Our team of expert stylists and beauty professionals is here to help you feel your absolute best — from the moment you walk in, to long after you leave. Book your next appointment and experience beauty, redefined.</h6>
                </div>
                <div className='flex gap-5 px-5 mb-7'>
                    <div className={`${laptop ? 'w-[25%]' : 'w-[40%]'}`}>
                        <h5 className='text-[#a70] mb-1'>You can reach as directly</h5>
                        <div>
                            <div className='flex gap-2'>
                                <PhoneIcon className='w-5 text-[#a70]' />
                                <h5 className='text-white opacity-70'>Give us a call</h5>
                            </div>
                            <div className='flex gap-2'>
                                <EnvelopeIcon className='w-5 text-[#a70]' />
                                <h5 className='text-white opacity-70'>Send us an email</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${laptop ? 'w-[50%]' : 'w-[20%]'}`}>
                        <h5 className='text-[#a70] mb-1'>Follow us on social media</h5>
                        <div className='flex gap-2 justify-center'>
                            <a href="#">
                                <i className="fa-brands fa-twitter text-[#a70]"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-facebook text-[#a70]"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-instagram text-[#a70]"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-pinterest text-[#a70]"></i>
                            </a>
                        </div>
                    </div>
                    <div className={`${laptop ? 'w-[25%]' : 'w-[40%]'}`}>
                        <h5 className='text-[#a70] mb-1'>You can find us in</h5>
                        <div className='flex flex-wrap gap-1'>
                            <h6 className='border-[0.5px] border-[#a70] px-2 rounded-lg text-[#a70]'>Sweden</h6>
                            <h6 className='border-[0.5px] border-[#a70] px-2 rounded-lg text-[#a70]'>Denimark</h6>
                            <h6 className='border-[0.5px] border-[#a70] px-2 rounded-lg text-[#a70]'>UK</h6>
                            <h6 className='border-[0.5px] border-[#a70] px-2 rounded-lg text-[#a70]'>Germany</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 className="text-white opacity-70 text-center pb-4">
                        &copy; {new Date().getFullYear()} Salon Name. All rights reserved.
                    </h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer;