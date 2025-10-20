import React, { useState, useEffect } from 'react';
import AWARD_ONE from '../assets/award-one.png';
import AWARD_TWO from '../assets/award-two.png';
import AWARD_THREE from '../assets/award-three.png';
import BOOK_ONE from '../assets/charttopperbook-one.png';
import BOOK_TWO from '../assets/charttopperbook-two.png';
import BOOK_THREE from '../assets/charttopperbook-three.png';
import PROFILE_ONE from "../assets/reviewprofileimg-one.png";
import PROFILE_TWO from "../assets/reviewprofileimg-three.png";
import PROFILE_THREE from "../assets/reviewprofileimg-two.png";
import AWARD_ONE_URL from "../assets/award-one.png";
import AWARD_TWO_URL from "../assets/award-two.png";
import AWARD_THREE_URL from "../assets/award-three.png";



const StarRating = () => (
    <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-[18px] h-[18px] text-[#FFB80C] fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.487 7.21l6.568-.955L10 1l2.945 5.255 6.568.955-4.758 4.635 1.123 6.545z" />
            </svg>
        ))}
    </div>
);



const slides = [

    {

        title: "What's So Special About Nexora Book Publishers?",

        text: "Being strongly inspired by the high writing and printing standards set by Wilford Hamilton, Nexora Book Publishers s aims to not just maintain the premium quality set by Captain Billy, but improve upon it. We all have a dream and we all deserve a fair chance to achieve them. That's exactly what we are offering. A fair and solid chance for an aspiring author to take the first step and make their mark in the book industry all around the globe. If you have a genius story idea in your head, then this is the right place to make it all happen!",

        bookUrl: BOOK_ONE,

        reviewName: "– James Patterson",

        reviewText: " Nexora Book Publishers s was a game-changer for my writing career. The team was supportive and incredibly professional. My book's quality surpassed my expectations, and the sales followed! ",

        profileUrl: PROFILE_ONE,

        visible: true, 

    },

    {

        title: "Industry Experience",

        text: "At Nexora Book Publishers s, our extensive history in book publishing sets us apart. We blend traditional craftsmanship with modern innovation to bring stories to life. Our dedication to quality has made us a trusted name, with decades of delivering outstanding books that captivate and inspire audiences.",

        bookUrl: BOOK_TWO,

        reviewName: "- Sarah Johnson",

        reviewText: "The attention to detail by Fawcett's team from editing to publication was phenomenal. They made my dream of becoming a published author a reality. Their process is transparent and highly effective.",

        profileUrl: PROFILE_TWO,

        visible: true, 

    },

    {

        title: "Industry Network",

        text: "Our vast network within the publishing industry opens doors for our authors. Nexora Book Publishers s collaborates with leading distributors, retailers, and marketers to ensure maximum exposure for each book. This extensive reach helps us place your work in the hands of eager readers worldwide.",

        bookUrl: BOOK_THREE,

        reviewName: "– Michael Thompson",

        reviewText: "I was amazed by how Nexora Book Publishers s managed every aspect of the publishing process with such care and expertise. They truly made my book shine in a crowded market.",

        profileUrl: PROFILE_THREE,

        visible: true, 

    },

];

const ChartTopperSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 8000);
        return () => clearInterval(interval);
    }, []);

    const sliderTrackStyle = {
        transform: `translateY(-${activeIndex * 100}%)`,
        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    return (
        <section className="bg-[#F9F9F9] w-full lg:px-4 px-2">
            <div className="bg-right bg-no-repeat bg-cover">
                <div className="vertical_slider overflow-hidden relative h-[100vh] lg:h-[800px] w-full">
                    {/* Slides Container */}
                    <div style={sliderTrackStyle} className="w-full h-full flex flex-col">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="h-[100vh] lg:h-[800px] flex justify-center lg:flex-row flex-col lg:justify-between items-center container mx-auto py-10 lg:py-24 xl:py-20 px-2 flex-shrink-0"
                            >
                                {/* Left Text Content */}
                                <div className="w-full xl:max-w-[530px] lg:max-w-[450px] md:text-left text-center sm:block hidden">
                                    <h1 className="xl:text-[40px] lg:text-[30px] text-[20px] text-[#EB4209] font-serif">
                                        Chart Topper
                                    </h1>
                                    <div>
                                        <h2 className="xl:text-[60px] lg:text-[45px] md:text-[35px] text-[25px] font-serif leading-tight text-[#1D1D1F]">
                                            {slide.title}
                                        </h2>
                                        <p className="xl:text-[15px] text-[13.5px] text-[#8C8C8C] font-sans">
                                            {slide.text}
                                        </p>
                                    </div>
                                    <div className="flex md:justify-start justify-center xl:space-x-7 space-x-3 xl:pt-20 pt-10">
                                        <img src={AWARD_ONE} className="xl:w-1/5 w-[90px] rounded-lg" alt="Award 1" onError={(e) => e.target.src = AWARD_ONE_URL} />
                                        <img src={AWARD_TWO} className="xl:w-1/5 w-[90px] rounded-lg" alt="Award 2" onError={(e) => e.target.src = AWARD_TWO_URL} />
                                        <img src={AWARD_THREE} className="xl:w-1/5 w-[90px] rounded-lg" alt="Award 3" onError={(e) => e.target.src = AWARD_THREE_URL} />
                                    </div>
                                </div>

                                {/* Right Image & Review */}
                                <div className="xl:pt-0 pt-14 relative">
                                    <img
                                        src={slide.bookUrl}
                                        className="xl:w-[500px] lg:w-[w-350px] w-full object-contain rounded-lg shadow-2xl"
                                        alt={`Book Cover ${index + 1}`}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = BOOK_ONE_URL;
                                        }}
                                    />

                                    <div className="w-full xl:max-w-[480px] lg:max-w-[580px] h-auto md:block hidden py-3 px-4 rounded-3xl bg-white/70 backdrop-blur-lg absolute bottom-0 lg:left-[-13rem] left-[-10rem] shadow-xl">
                                        <div className="flex space-x-3 items-center">
                                            <img src={slide.profileUrl} className="w-[50px] h-[50px] rounded-full object-cover" alt={`Profile ${index + 1}`} />
                                            <div className="leading-8">
                                                <h1 className="xl:text-[28px] text-[24px] font-serif text-[#1D1D1F]">{slide.reviewName}</h1>
                                                <StarRating />
                                            </div>
                                        </div>
                                        <p className="xl:text-[16px] text-[14px] text-[#8C8C8C] font-sans pt-3">{slide.reviewText}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10 lg:flex">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? 'bg-[#EB4209] w-4 h-4 ring-2 ring-black'
                                    : 'bg-[#EB4209]/40 hover:bg-[#EB4209]/70'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChartTopperSlider;
