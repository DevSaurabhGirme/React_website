import React from 'react';

const Hero = () => {
    return (
        <div className='w-full h-screen parallax-bg'>
            <div className='bg-black/50 absolute top-0 left-0 w-full h-screen'/>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white font-montserrat'>
                <div className='md:left-[10%] max-width-w-[1100px] m-auto absolute p-4'>
                    <p className='text-gray-300 text-lg'>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl text-white'>Private Beaches and Getaways</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl text-gray-300'>
                        Escape to paradise with our exclusive all-inclusive packages. Enjoy pristine private beaches, luxurious accommodations, and world-class amenities. Whether you're seeking adventure or relaxation, we have everything you need for an unforgettable vacation. Book your dream getaway now and experience the ultimate in luxury and comfort.
                    </p>
                    <button className='bg-white text-black font-bold py-2 px-4 mt-4'>Reserve Now</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
