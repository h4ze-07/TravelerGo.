import React from 'react';

const TourCard = ({img, title, desc, price}) => {
    return (
        <div className='flex flex-col items-center justify-center md:flex-row mx-auto px-4 gap-5 relative max-w-[450px] md:max-w-full'>
            <div className='overflow-hidden max-w-[450px] md:max-w-[400px]'>
                <img src={img} alt={title} className=' object-cover h-[355px] max-w-full hover:scale-[1.1] transition-all cursor-pointer'/>
            </div>

            <div className='absolute right-4 top-0 bg-blue-600 text-white font-bold py-2 px-5'>{price}</div>

            <div className='flex flex-col gap-2 md:w-1/2'>
                <h3 className='text-2xl font-bold mt-3'>{title}</h3>
                <p className='text-slate-500 md:text-md'>{desc}</p>
                <button className='w-fit font-semibold text-lg py-2 px-6 border border-black hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors'>Buy tour</button>
            </div>
        </div>
    );
}

export default TourCard;
