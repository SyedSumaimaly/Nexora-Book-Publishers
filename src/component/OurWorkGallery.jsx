import React, { useEffect } from 'react';

import ActionBookImg from '../assets/Book-Categories/Action/1.png';
import ComicsBookImg from '../assets/Book-Categories/Comics/1.png';
import ChildrensBookImg from '../assets/Book-Categories/Childrens/1.png';
import NonFictionBookImg from '../assets/Book-Categories/NonFiction/1.png';
import AdultBookImg from '../assets/Book-Categories/AdultBooks/5.png';

const bookData = [
    {
        src: ActionBookImg,
        alt: "Action Book Cover",
        description: (
            <>
                Bestselling Author, <span className="block">Millions Of Copies Sold</span>
            </>
        ),
    },
    {
        src: ComicsBookImg,
        alt: "Comics Book Cover",
        description: (
            <>
                National & WSJ <span className="block">Bestseller</span>
            </>
        ),
    },
    {
        src: ChildrensBookImg,
        alt: "Children's Book Cover",
        description: (
            <>
                NYT Bestselling Series, <span className="block">Million+ Copies Sold</span>
            </>
        ),
    },
    {
        src: NonFictionBookImg,
        alt: "Non-Fiction Book Cover",
        description: (
            <>
                NYT Bestseller From Producer’s <span className="block"> Of Nbc’s The Office </span>
            </>
        ),
    },
    {
        src: AdultBookImg,
        alt: "Adult Book Cover",
        description: (
            <>
                WSJ And USA Today <span className="block">Bestseller</span>
            </>
        ),
    },
];

const OurWorkGallery = () => {
   
    useEffect(() => {
        // Example: Initialize AOS here if you have it installed
        // if (typeof window !== 'undefined' && window.AOS) {
        //     window.AOS.init();
        // }
        
        // Example: Initialize Fancybox/Lightbox here
        // if (typeof window !== 'undefined' && window.Fancybox) {
        //     window.Fancybox.bind("[data-fancybox]", {});
        // }
    }, []);

    return (
        <section className="py-8 pb-32 px-8">
            <div className="container mx-auto">
                
                <h3 className="text-center text-[#1D1D1F] luxury-regular xl:text-[64px] text-[30px] leading-tight">
                    Our Work
                </h3>

                
                <ul 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 aos-init aos-animate"
                    data-aos="zoom-in" 
                    data-aos-duration="1500"
                >
                    {bookData.map((book, index) => (
                        <li
                            key={index}
                            className="flex justify-center items-center flex-col hover:scale-110 transition duration-500 ease-in-out"
                        >
                            <a 
                                href={book.src} 
                                data-fancybox="gallery"
                            >
                                <img
                                    src={book.src}
                                    alt={book.alt}
                                    className="rounded-lg drop-shadow-md"
                                />
                            </a>
                            <p className="pt-4 luxury-regular text-center text-lg">
                                {book.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OurWorkGallery;