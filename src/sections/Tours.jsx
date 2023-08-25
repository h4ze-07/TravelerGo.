import React from 'react';
import { hotTours } from '../constants';
import TourCard from '../components/TourCard';

const Tours = () => {
    return (
        <section className='max-w-[1240px] mt-[86px] mx-auto' id='tours'>
            <h1 className='text-[35px] sm:text-[45px] font-bold mx-auto w-full text-center mb-8'>Discover our Hot Tours</h1>

            <div className='flex flex-col gap-5'>
                {hotTours.map((tour) => (
                    <TourCard 
                        key={tour.title}

                        img={tour.imgURl}
                        title={tour.title}
                        desc={tour.description}
                        price={tour.price}
                    />
                ))}
            </div>

        </section>
    );
}

export default Tours;
