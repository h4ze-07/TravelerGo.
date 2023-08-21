import React from 'react';

const ServiceCard = ({svg, title, desc}) => {
    return (
        <div className='flex flex-col sm:flex-row sm:items-start items-center gap-2 max-w-[300px] sm:max-w-sm md:max-w-md hover:shadow-xl p-3'>
            <div>
                <img src={svg} alt="service icon" className='w-10 h-10 sm:w-20'/>
            </div>
            <div className='flex flex-col items-center sm:items-start gap-2'>
                <h3 className='text-xl font-semibold text-blue-800 hover:text-blue-500 hover: cursor-pointer
                '>{title}</h3>
                <p className='text-center text-slate-600 sm:text-start cursor-default'>{desc}</p>
            </div>
            
        </div>
    );
}

export default ServiceCard;
