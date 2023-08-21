import React from 'react';
import { navLinks } from '../constants';

const StickyNav = () => {
    return (
        <section className='w-full bg-blue-400 sticky top-0 left-0 z-30'>
            <ul className='hidden sm:flex gap-1 items-center justify-start px-5  max-w-[1440px] mx-auto'>
                {navLinks.map((link) => (
                    <li key={link.label} className='text-white font-bold text-[18px]  hover:bg-blue-300 whitespace-nowrap text-left'>
                        <a href={link.href} className='block w-full h-full py-3 px-3 border-t-4 border-b-4 border-transparent hover:border-t-blue-600'>{link.label}</a>
                    </li>
                    )    
                )}
            </ul>
        </section>

    );
}

export default StickyNav;
