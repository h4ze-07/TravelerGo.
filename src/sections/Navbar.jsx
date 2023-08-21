import React, { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <section>
            
            <div className='fixed cursor-pointer top-4 left-3 block sm:hidden z-20' onClick={handleClick}>


                {!nav ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-black hover:fill-blue-600">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-black hover:fill-blue-600">
                    <path fill-rule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clip-rule="evenodd" />
                </svg>}
                <div className='relative'>
                    {nav && <ul className='flex flex-col gap-2 absolute top-3 -left-3 h-[100vh] z-10 w-[200px] bg-white border-t border-r border-blue-800 rounded-tr-lg rounded-br-lg overflow-hidden'>
                    {navLinks.map((link) => (
                        <li key={link.label} className='text-black font-bold w-full p-3 text-lg hover:text-white hover:bg-blue-700'>
                            <a href={link.href} onClick={handleClick} className='block'>{link.label}</a>
                        </li>
                    )    
                    )}
                    </ul>}
                </div>

            </div>

            
            
        </section>
    );
}

export default Navbar;
