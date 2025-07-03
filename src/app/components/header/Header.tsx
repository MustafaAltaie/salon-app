'use client';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark', dark);
    }, [dark]);

    return (
        <header className='bg-white dark:bg-black dark:text-white'>
            <p>Logo</p>
            <p onClick={() => setDark(!dark)}>{dark ? 'light' : 'Dark'}</p>
        </header>
    )
}

export default Header;