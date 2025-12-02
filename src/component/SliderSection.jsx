import React, { useState } from 'react';
import FlowImg from '../assets/flow.png'
import BlackTideImg from '../assets/blacktides.png'
import SuperFunFactImg from '../assets/superfunfacts.png'
import PalmattoImg from '../assets/palmetto.png'
import ArrowImg from '../assets/send-arrow.png'


const BOOK_COVER_URLS = [
    FlowImg,
    SuperFunFactImg,
    PalmattoImg,
    BlackTideImg,
    "https://placehold.co/60x90/B5B5B5/333?text=Book3",
    "https://placehold.co/60x90/A3A3A3/333?text=Book4",
];

const SliderSection = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4; 

    const slides = [
        {
            id: 1,
            title: "Flow",
            intro: "Our Portfolio",
            text: "Immerse yourself in a tale of transformation and resilience. Follow a protagonist's journey through life's ebbs and flows in this deeply moving novel.",
            detail: "The books we have written for our clients so far speak for themselves. Have a look at what we can do and then let's talk business!",
            coverImage: BOOK_COVER_URLS[0]
        },
        { id: 2, title: "You Gotta Be Kidding", intro: "Our Portfolio", text: "Super Fun Facts for Curious Kids: Spark young minds with explosive facts and incredible discoveries. Perfect for curious kids eager to learn and laugh in equal measure.", detail: "The books we have written for our clients so far speak for themselves. Have a look at what we can do and then let's talk business!", coverImage: BOOK_COVER_URLS[1] },
        { id: 3, title: "Palmetto", intro: "Our Portfolio", text: "Unravel the mysteries of Palmetto, where Southern charm meets chilling suspense. Every twist and turn in this thriller is as unpredictable as a swamp's path.", detail: "The books we have written for our clients so far speak for themselves. Have a look at what we can do and then let's talk business!", coverImage: BOOK_COVER_URLS[2] },
        { id: 4, title: "Black Tides", intro: "Our Portfolio", text: "Dive into a gripping thriller where dark secrets and relentless waves collide. Discover betrayal and redemption in the shadows of a coastal town.", detail: "The books we have written for our clients so far speak for themselves. Have a look at what we can can do and then let's talk business!", coverImage: BOOK_COVER_URLS[3] },
    ];


    const handleNext = () => {
        setCurrentSlide(prev => (prev % totalSlides) + 1);
    };


    const activeSlide = slides.find(slide => slide.id === currentSlide);
    const coverToDisplay = activeSlide.coverImage;


    const navigationStyling = "flex items-center space-x-4";

    return (
        <section className="bg-white min-h-screen flex items-center overflow-x-hidden">
            <div className="slider py-16 w-full">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px] lg:space-x-12">
                        <div className="slider__wrraper w-full lg:w-1/2 p-4 md:p-0 order-2 lg:order-1 text-center lg:text-left"> 

                            {/* Main Title and Description */}
                            <div className="space-y-4 mb-12">
                                <h2 className="luxury-regular text-5xl lg:text-7xl font-extrabold text-[#1D1D1F]">
                                    {activeSlide.intro}
                                </h2>
                                {/* Centering text blocks for small screens */}
                                <p className="manifest-regular text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                                    {activeSlide.detail}
                                </p>
                            </div>

                            {/* Current Book/Flow Section */}
                            <div className="space-y-3">
                                <h3 className="luxury-regular text-3xl font-extrabold text-[#ef4f1b]">
                                    {activeSlide.title}
                                </h3>
                                {/* Centering text blocks for small screens */}
                                <p className="manifest-regular text-md text-gray-600 max-w-xl mx-auto lg:mx-0">
                                    {activeSlide.text}
                                </p>
                            </div>

                            {/* Navigation (Next Button and Thumbnails) */}
                            {/* Ensured navigation is centered on small screens */}
                            <div className="mt-12 flex justify-center lg:justify-start">
                                <div className={navigationStyling}>
                                    {/* Next Button (Arrow) */}
                                    <button
                                        data-type="next"
                                        onClick={handleNext}
                                        className={`flex items-center text-[#1D1D1F] luxury-regular text-xl font-bold hover:text-[#ef4f1b] transition-colors`}
                                    >
                                        <img src={ArrowImg} alt="next-arrow" className='w-12 cursor-pointer' />
                                    </button>

                                    {/* Thumbnails */}
                                    <div className="flex space-x-2 ml-8">
                                        {slides.map((slide, index) => (
                                            <img
                                                key={slide.id}
                                                src={BOOK_COVER_URLS[index]} 
                                                alt={`Cover ${slide.id}`}
                                                className={`w-12 h-18 object-cover rounded-sm shadow-md cursor-pointer transition-all duration-300
                                                    ${slide.id === currentSlide ? 'border-2 border-[#ef4f1b] scale-110' : 'opacity-50 hover:opacity-100'}`}
                                                onClick={() => setCurrentSlide(slide.id)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Area (Main Book Cover Image) */}
                        {/* Moved to the first position on small screens for better visual hierarchy (order-1) */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 order-1 lg:order-2">
                            <div className="relative w-full max-w-sm">
                                {/* Large Book Cover */}
                                <img
                                    src={coverToDisplay}
                                    alt={`${activeSlide.title} Book Cover`}
                                    // Added an explicit height (e.g., h-[500px]) to prevent image resizing on slide change if dimensions vary
                                    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-2xl transition-opacity duration-500" 
                                />
                                {/* Overlay text positioning remains */}
                                <div className="absolute top-0 right-0 transform translate-x-1/2 translate-y-1/4">
                                    <span className="text-gray-200 text-sm rotate-90 origin-top-left hidden md:block">
                                        Our Portfolio
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderSection;