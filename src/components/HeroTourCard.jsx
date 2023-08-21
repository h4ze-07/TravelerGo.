import React from 'react';

const HeroTourCard = ({img, title}) => {
    return (
        <div className='flex flex-col justify-center items-center rounded-xl overflow-hidden'>
            <div className='overflow-hidden'>
                <img src={img} alt={title} className='min-w-[230px] w-[420px] sm:w-[220px] sm:h-[240px] h-[280px] lg:w-[320px] lg:h-[350px] object-cover hover:scale-[1.1] transition-all cursor-pointer'/>
            </div>
            <p className='bg-blue-400 text-white font-bold w-full text-center py-3'>{title}</p>
        </div>
    );
}

export default HeroTourCard;
