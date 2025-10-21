import React, { useState } from 'react';
import FlowImg from '../assets/flow.png'
import BlackTideImg from '../assets/blacktides.png'
import SuperFunFactImg from '../assets/superfunfacts.png'
import PalmattoImg from '../assets/palmetto.png'
import ArrowImg from '../assets/send-arrow.png'

// --- Heroicon Right Arrow SVG Component for the button ---
const ArrowRightIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 ml-2" // Added ml-2 back for spacing next to text
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

// Placeholder URLs for the small book covers
const BOOK_COVER_URLS = [
    FlowImg,
    SuperFunFactImg,
    PalmattoImg,
    BlackTideImg,
    "https://placehold.co/60x90/B5B5B5/333?text=Book3",
    "https://placehold.co/60x90/A3A3A3/333?text=Book4",
];

const SliderSection = () => {
    // State to simulate the current active slide index
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4; // Adjusted to 4 to match the number of thumbnails

    // Updated content to reflect a portfolio item
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
        { id: 4, title: "Black Tides", intro: "Our Portfolio", text: "Dive into a gripping thriller where dark secrets and relentless waves collide. Discover betrayal and redemption in the shadows of a coastal town.", detail: "The books we have written for our clients so far speak for themselves. Have a look at what we can do and then let's talk business!", coverImage: BOOK_COVER_URLS[3] },
    ];

    // Function to handle moving to the next slide
    const handleNext = () => {
        setCurrentSlide(prev => (prev % totalSlides) + 1);
    };

    // Get the content for the current slide
    const activeSlide = slides.find(slide => slide.id === currentSlide);
    const coverToDisplay = activeSlide.coverImage;

    // The positioning needs to be relative to the book covers now, so we adjust the layout
    const buttonPositioning = "flex items-center space-x-4"; // Updated to use flex for 'Next' and covers

    // Adjusted container styling to use grid/flex for the main content area
    return (
        <section className="bg-white min-h-screen flex items-center">
            <div className="slider md:py-20 py-16 w-full">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px] lg:space-x-12">

                        {/* Left Content Area (Text and Navigation) */}
                        <div className="slider__wrraper w-full lg:w-1/2 relative p-4 md:p-0">

                            {/* Main Title and Description */}
                            <div className="space-y-4 mb-12">
                                <h2 className="luxury-regular text-5xl lg:text-7xl font-extrabold text-[#1D1D1F]">
                                    {activeSlide.intro}
                                </h2>
                                <p className="manifest-regular text-lg text-gray-600 max-w-lg">
                                    {activeSlide.detail}
                                </p>
                            </div>

                            {/* Current Book/Flow Section */}
                            <div className="space-y-3">
                                <h3 className="luxury-regular text-3xl font-extrabold text-[#ef4f1b]">
                                    {activeSlide.title}
                                </h3>
                                <p className="manifest-regular text-md text-gray-600 max-w-xl">
                                    {activeSlide.text}
                                </p>
                            </div>

                            {/* Navigation (Next Button and Thumbnails) */}
                            <div className="mt-12">
                                <div className={buttonPositioning}>
                                    {/* Next Button */}
                                    <button
                                        data-type="next"
                                        onClick={handleNext}
                                        // Simplified button styling to match the image: text next to arrow
                                        className={`flex items-center text-[#1D1D1F] luxury-regular text-xl font-bold hover:text-[#ef4f1b] transition-colors`}
                                    >
                                        {/* Next
                                        <ArrowRightIcon className="text-current w-6 h-6" /> */}
                                        <img src={ArrowImg} alt="next-arrow" className='w-12 cursor-pointer' />
                                    </button>

                                    {/* Thumbnails */}
                                    <div className="flex space-x-2 ml-8">
                                        {slides.map((slide, index) => (
                                            <img
                                                key={slide.id}
                                                src={BOOK_COVER_URLS[index]} // Use generic placeholders for thumbs
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
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
                            <div className="relative w-full max-w-sm">
                                {/* Large Book Cover */}
                                <img
                                    src={coverToDisplay}
                                    alt={`${activeSlide.title} Book Cover`}
                                    className="w-full h-auto object-cover rounded-lg shadow-2xl transition-opacity duration-500"
                                />
                                {/* Example of the curved text overlay seen in the image (Styling is complex and simplified here) */}
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
