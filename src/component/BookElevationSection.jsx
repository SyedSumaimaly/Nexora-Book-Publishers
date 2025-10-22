import React from 'react';
// Replace these with your actual image paths
import BookCoachingImage from '../assets/book-coaching-service-image.png'; 
import ChatIcon from '../assets/chating-icon.png';

const BookElevationSection = () => {
    
    const handleDiscussClick = (e) => {
        e.preventDefault();
        // Here you would typically toggle your modal state or navigate
        console.log("Modal toggle requested for static-modal");
    };
    
    // List of questions/points
    const bulletPoints = [
        "Your writing is clear and concise",
        "Content should be added or removed",
        "It’s well organized and structured effectively",
        "The beginning and end captures your reader’s attention",
        "It connects with your target audience and is timely and marketable",
    ];

    return (
        <section className="lg:py-16 2xl:px-0 py-8 px-8 bg-[#1D1D1F] rev-consult-sec">
            <div className="container mx-auto">
                <div className="flex items-start lg:items-center justify-between lg:flex-row flex-col">
                    
                    {/* Left Content Area (Text and Button) */}
                    <div className="w-full lg:w-1/2 sm:text-left text-center">
                        <h2 className="luxury-regular text-white xl:text-[53px] text-[30px] leading-tight mb-4">
                            Let’s Elevate
                            <br /> Your Book
                        </h2>
                        <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                            You’ve written a draft and now you’re wondering if:
                        </p>
                        
                        {/* Bullet Points */}
                        {/* On small screens, list-disc is left-aligned, but the parent text-center causes text alignment conflict. 
                            We use sm:text-left on the parent, so pl-5 works fine here. */}
                        <ul className="list-disc pl-5 mt-4 inline-block sm:block text-left">
                            {bulletPoints.map((point, index) => (
                                <li key={index} className="manifest-regular text-[#A7A7A7] text-base leading-[28px] mb-2">
                                    {point}
                                </li>
                            ))}
                        </ul>
                        
                        {/* Button Wrapper */}
                        <div className="w-full flex sm:justify-start justify-center space-x-4 mt-12  ">
                            {/* Replaced <li> with a regular <div> */}
                            <div> 
                                <a 
                                    href="#discuss" 
                                    onClick={handleDiscussClick}
                                    // Merged all the styling classes
                                    className="border-2 shadow-lg shadow-[rgba(235,66,12,0.5)] border-[#ffffffe6] header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-110 hover:text-white "
                                >
                                    <img src={ChatIcon} alt="Chat icon" /> 
                                    Let's Discuss!
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Image Area */}
                    {/* Uses pt-10 on small screens to separate it from the text above */}
                    <div className="w-full md:w-2/3 lg:w-2/5 relative pt-10 md:pt-0 mx-auto lg:mx-0">
                        <img 
                            src={BookCoachingImage} 
                            alt="Book Coaching Service Image" 
                            className="w-[512px] mx-auto" // Added mx-auto to center the image on small screens
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookElevationSection;