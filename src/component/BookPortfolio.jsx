import React, { useState } from 'react';
import InitialImage1 from '../assets/portfolio-book/port-1.webp'
import InitialImage2 from '../assets/portfolio-book/port-2.webp'
import InitialImage3 from '../assets/portfolio-book/port-3.webp'
import InitialImage4 from '../assets/portfolio-book/port-4.webp'
import InitialImage5 from '../assets/portfolio-book/port-5.webp'
import InitialImage6 from '../assets/portfolio-book/port-6.webp'
import InitialImage7 from '../assets/portfolio-book/port-7.webp'
import InitialImage8 from '../assets/portfolio-book/port-8.webp'
import InitialImage9 from '../assets/portfolio-book/port-9.webp'
import InitialImage10 from '../assets/portfolio-book/port-10.webp'
import InitialImage11 from '../assets/portfolio-book/port-11.webp'
import InitialImage12 from '../assets/portfolio-book/port-12.webp'


const initialPortfolio = [
   InitialImage1,
   InitialImage2,
   InitialImage3,
   InitialImage4,
   InitialImage5,
   InitialImage6,
   InitialImage7,
   InitialImage8,
   InitialImage9,
   InitialImage10,
   InitialImage11,
   InitialImage12,
   
];


const BookPortfolio = () => {
   

    return (
        <section className="bg-[#F9F9F9] w-full py-20">
            <div className="mx-auto container px-2">
          
                <h1 className="md:text-[64px] text-[44px] md:text-start text-center luxury-regular text-[#1D1D1F]">
                    Our Portfolio!
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 gap-y-5 lg:gap-x-32 gap-x-5 mt-14">
                    {initialPortfolio.map((src, index) => (
                        <div key={`port-${index}`} className="w-full max-w-[300px]">
                            <img src={src} className="w-full" alt={`Book cover ${index + 1}`} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BookPortfolio;