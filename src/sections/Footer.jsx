import React from 'react';
import { navLinks } from '../constants';

const Footer = () => {
    return (
        <div className='max-w-[1440px] py-[40px] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-1'>
                <h3 className='text-white font-bold text-[25px]'>Quick links</h3>
                {navLinks.map((link) => (
                    <a href={link.href} key={link.label} className='font-semibold py-3 px-4 w-[150px] border-y-2 border-transparent hover:border-b-white text-[20px] text-center hover:text-white hover:bg-blue-400'>{link.label}</a>
                ))}
            </div>
            <div className='text-center mt-[40px] font-bold'>&copy; All rights reserved.</div>
        </div>
    );
}

export default Footer;
