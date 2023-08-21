import React, { useState } from 'react';
import { intro } from '../constants'

const Intro = () => {

    const [introMenu, setIntroMenu] = useState(false)

    const handleClick = () => {
        setIntroMenu(!introMenu)
        console.log(introMenu)
    }

    return (
        <section className='flex justify-between items-center py-2 px-[26px] w-full max-w-[1440px] mx-auto fixed sm:relative top-0 left-0 z-20 bg-white'>
            <a href="/" className='ml-7 sm:ml-0 whitespace-nowrap'>
                <span className='font-bold text-blue-700 text-3xl'>T</span><span className='font-bold text-2xl text-black'>raveler</span> <span className='font-bold text-blue-700 text-3xl'>Go.</span>
            </a>


            <div className='hidden sm:flex items-center justify-center gap-4'>
                <p className='text-[14px] whitespace-nowrap'>
                    {intro.schedule.text}
                </p>
                <p className='text-sm whitespace-nowrap text-blue-400 font-semibold hover:text-blue-700 hover:underline hover:underline-offset-2'>
                    <a href="/" >
                        {intro.phone.text}
                    </a>
                </p>
                <button className='text-white text-[14px] font-semibold py-1 px-3 rounded-xl bg-blue-700 border border-transparent hover:border-blue-700 hover:text-blue-700 hover:bg-transparent'>
                    {intro.btn.text}
                </button>
            </div>


            <div className='block sm:hidden cursor-pointer relative' onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 hover:fill-blue-700">
                    <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                </svg>
            </div>

            {introMenu && <div className='flex sm:hidden flex-col gap-2 items-start absolute right-0 top-[52px] z-20 md:hidden border p-4 rounded-xl bg-white  border-blue-600 bg-gradient-to-tl from-blue-100 to-blue-200'>
                <p className='text-[14px] whitespace-nowrap'>
                    {intro.schedule.text}
                </p>
                <p className='text-[14px] whitespace-nowrap text-blue-400 font-semibold hover:text-blue-700 hover:underline hover:underline-offset-2'>
                    <a href="/" >
                        {intro.phone.text}
                    </a>
                </p>
                <button className='text-white text-[14px] font-semibold py-1 w-full rounded-xl bg-blue-700 border border-transparent hover:border-blue-700 hover:text-blue-700 hover:bg-transparent' 
                onClick={handleClick}
                >
                    {intro.btn.text}
                </button>
            </div>}

        </section>
    );
}

export default Intro;
