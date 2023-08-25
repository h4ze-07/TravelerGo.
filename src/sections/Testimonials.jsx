import React from 'react';
import { achievs, reviews } from '../constants';

import ReviewCard from '../components/ReviewCard';
import { NatureAchiev } from '../assets/images';

const Testimonials = () => {
    return (
        <div id='testimonials' className='max-w-[1340px] my-[50px] mx-auto'>
            
            <div>
                <h2 className='text-[35px] sm:text-[45px] font-bold mx-auto w-full text-center mb-8'>What People Say</h2>
                <div className='flex flex-col sm:flex-row gap-[30px] mx-[15px] justify-center items-center flex-wrap'>
                    {reviews.map((review) => (
                        <ReviewCard 
                            key={review.id}
                            img={review.img}
                            name={review.name}
                            text={review.text}
                        />
                        ))}

                </div>
            </div>

            <div className='mt-[70px]'>
                <h2 className='text-[35px] sm:text-[45px] font-bold mx-auto w-full text-center mb-8'>Our Achievments</h2>
                <div className='flex flex-wrap gap-[20px] justify-center items-center'>
                    {achievs.map((achiev) => (
                        <div key={achiev.id} className={`flex justify-center bg-black bg-[url('src/assets/images/natureAchiev.jpg')] bg-cover bg-no-repeat w-[320px] h-[300px] `}>
                            <div className='w-full m-5 bg-white z-10 flex items-center justify-center flex-col'>
                                <h3 className='font-bold text-[50px] text-blue-600'>{achiev.number}</h3>
                                <p className='font-semibold text-[25px]'>{achiev.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
