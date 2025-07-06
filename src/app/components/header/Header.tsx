'use client';
import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useRouter, usePathname } from 'next/navigation';

interface navProps {
    id: string
    title: string
    icon: string
    target: string
}

const navList: navProps[] = [
    {
        id: '1',
        title: 'Home',
        icon: 'fa-solid fa-house',
        target: '/',
    },
    {
        id: '6',
        title: 'Login',
        icon: 'fa-solid fa-user',
        target: '/login',
    },
    {
        id: '3',
        title: 'Contact',
        icon: 'fa-solid fa-phone-volume',
        target: '/contact',
    },
    {
        id: '2',
        title: 'Price list',
        icon: '',
        target: '/prices',
    },
    {
        id: '4',
        title: 'About us',
        icon: '',
        target: '/about',
    },
    {
        id: '5',
        title: 'Special deals',
        icon: '',
        target: '/deals',
    },
];

interface Props {
    laptop: boolean
}

const Header = ({ laptop }: Props) => {
    const [dark, setDark] = useState(true);
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkSize = () => {
          setNav(window.innerWidth >= 1024);
        }
        checkSize();
    
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark', dark);
        if (dark) {
            document.body.classList.add('darkMode');
            document.body.classList.remove('lightMode');
        } else {
            document.body.classList.remove('darkMode');
            document.body.classList.add('lightMode');
        }
    }, [dark]);

    return (
        <>
        <header className={`fixed z-[999] w-full border-b-[0.5px] border-[#00000077] dark:border-[#ffffff77] flex ${laptop ? 'flex-row justify-between items-center p-3' : 'flex-col'}`}>
            <div className={`${laptop ? 'p-2' : 'p-6'}`}>
                <div className='flex items-center justify-between'>
                    <div className='cursor-pointer flex items-center gap-7'>
                        <h5>Salon logo</h5>
                        {/* dark mode toggle */}
                        <div className='flex gap-2'>
                            <SunIcon className='w-4' onClick={() => setDark(false)} />
                            <div className='relative w-[32px] h-[20.5px] mainBg rounded-2xl dark:border-[0.5px]' onClick={() => setDark(!dark)}>
                                <div className={`absolute transition-left duration-300 w-[20.5px] h-[20.5px] dark:h-[20px] border-1 dark:border-0 border-[#a70] bg-white rounded-full ${dark ? 'left-3' : 'left-0'}`}></div>
                            </div>
                            <MoonIcon className='w-4' onClick={() => setDark(true)} />
                        </div>
                    </div>
                    {/* nav toggle */}
                    {!laptop &&
                    <div className='flex flex-col justify-between w-6 h-4' onClick={() => setNav(!nav)}>
                        <div className={`transition duration-500 w-full h-[1px] bg-black dark:bg-white ${nav ? 'rotate-z-45 translate-y-[7.5px]' : 'rotate-z-0'}`}></div>
                        <div className={`transition duration-500 w-full h-[1px] bg-black dark:bg-white ${nav ? 'opacity-0' : 'opacity-100'}`}></div>
                        <div className={`transition duration-500 w-full h-[1px] bg-black dark:bg-white ${nav ? '-rotate-z-45 -translate-y-[7.5px]' : 'rotate-z-0'}`}></div>
                    </div>}
                </div>
            </div>
            {/* nav */}
            <nav className={`overflow-y-hidden transition-all duration-700 ${nav ? 'max-h-110' : 'max-h-0'}`}>
                <ul className={`gap-0 flex-col text-center ${laptop && 'flex gap-3 flex-row'}`}>
                    {navList.map(item =>
                    <li
                        key={item.id}
                        className={`${!laptop && 'border-t-[0.5px] border-[#00000055] dark:border-[#ffffff55]'} ${laptop && 'rounded-xl'} ${laptop ? 'py-2 px-3' : 'p-6'} cursor-pointer dark:text-[#a70] hover:bg-[#a70] active:bg-[#a70] hover:text-white active:text-white ${pathname === item.target && 'bg-[#a70] text-white dark:text-white'}`}
                        onClick={() => router.push(item.target)}
                    >{item.icon && <i className={`${item.icon} mr-2`}></i>}{item.title}</li>)}
                </ul>
            </nav>
        </header>
        <div className={`${laptop ? 'h-[62px]' : 'h-[68px]'} mainBg`}></div>
        </>
    )
}

export default Header;