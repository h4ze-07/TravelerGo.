import React from 'react';
import video from '../../src/assets/video.mp4'
import { heroTours, ourServices } from '../constants';
import HeroTourCard from '../components/HeroTourCard';
import ServiceCard from '../components/ServiceCard';
import { aboutUs } from '../assets/images';

const Hero = () => {
    return (
        <section className='relative mt-[50px] sm:mt-0' id='home'>
            <div className='bg-black '>
                <video src={video} muted loop autoPlay className=' h-[100vh] w-full object-cover z-[-1]'/>
            </div>
            

            <div className='flex flex-col items-center gap-3 sm:gap-3 absolute z-[1] top-0 mx-auto w-full mt-[200px] sm:mt-[210px] lg:mt-[220px]'>
                <h1 className='text-white text-center font-bold text-[34px] extraSmall:text-[48px] sm:text-[60px] md:text-[74px] lg:text-[98px]'>
                    Nature is beatiful
                </h1>
                <p className='text-white text-center font-semibold text-xs extraSmall:text-base sm:text-xl md:text-2xl lg:text-3xl mb-1'>You have all world outside windows!</p>
                <button className='text-white text-center text-xs extraSmall:text-base font-bold border px-3 py-1 rounded-xl hover:bg-white hover:text-blue-600 
                sm:text-xl 
                md:py-2.5 md:px-7 md:text-2xl'>Contact us</button>
            </div>

            <div className='flex flex-col gap-4 mt-8 sm:flex-row items-center justify-center px-4 '>
                {heroTours.map((tour) => (
                    <HeroTourCard
                        key={tour.title} 
                        img={tour.imgURL}
                        title={tour.title}
                    />
                ))}
            </div>

            <div className='flex justify-center items-center mt-[70px]'>
                <a href="#tours" className='text-black font-semibold text-2xl hover:text-blue-700'>
                    Other tours
                </a>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[80px] px-4 max-w-[1050px] mx-auto justify-center'>
                <div className='cursor-pointer overflow-hidden'>
                    <img src={aboutUs} alt="about us" className=' object-cover w-full h-full hover:scale-[1.1] transition-transform'/>
                </div>
                <div className='flex flex-col justify-center items-start gap-3'>
                    <h2 className='font-bold text-2xl mb-3 sm:text-[26px]'>
                        Discover New Horizons
                    </h2>
                    <p className='text-slate-600 md:text-[20px]'>
                        <span className='text-blue-700 font-bold text-xl '>T</span>raveler.<span className='text-xl text-blue-700 font-bold'>Go</span> Agency is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.
                    </p>
                    <div className='flex gap-4'>
                        <button className='py-2 px-4 font-bold border border-blue-700 text-white bg-blue-700 hover:bg-white hover:text-black hover:border-black'>Get in touch</button>
                        <button className='py-2 px-4 font-bold border border-black hover:border-blue-700 hover:bg-blue-700 hover:text-white'>Read more</button>
                    </div>
                </div>
            </div>


            <div className='max-w-[1240px] mt-[50px] mx-auto flex flex-col justify-center items-center px-4'>
                <h2 className='font-bold text-3xl'>Our services</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-7'>
                    {ourServices.map((service) => (
                        <ServiceCard key={service.title} svg={service.svgURL} title={service.title} desc={service.desc} />
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Hero;
