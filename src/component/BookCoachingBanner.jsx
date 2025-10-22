import React from 'react';
// Assuming these are the paths to your images. You will need to adjust them.
// For this example, I'll use simple placeholder names.
import InnerBannerBg from '../assets/inner-banner.png'; 
import ChatIcon from '../assets/message.png';
import CSuitBadge from '../assets/award-three.png';
import ReadersFavoriteBadge from '../assets/award-one.png';
import AwardTwoBadge from '../assets/award-two.png';

const BookCoachingBanner = () => {
    // Placeholder function for the 'Let's Discuss' button's functionality
    const handleDiscussClick = (e) => {
        e.preventDefault();
        // Here you would typically toggle your modal state or navigate
        console.log("Modal toggle requested for static-modal");
    };

    return (
        <section
            style={{ backgroundImage: `url(${InnerBannerBg})` }}
            className="lg:pt-10 pt-10 bg-center-bottom bg-no-repeat flex justify-center bg-cover"
        >
            <div className="container mx-auto py-20">
                {/* Removed 'md:flex items-center' from this div as the inner div handles centering/layout */}
                <div> 
                    {/* Centering all content */}
                    <div className="w-full lg:px-56 px-12 2xl:px-0 text-center">
                        
                        {/* Title */}
                        <h1 
                            className="luxury-regular text-[#1D1D1F] text-2xl sm:text-3xl leading-[30px] lg:text-5xl lg:leading-[60px] md:text-4xl md:leading-[40px] xl:text-7xl xl:leading-[80px] font-normal mb-5"
                           
                        >
                            Personalized Book Coaching Services
                        </h1>
                        
                        {/* Subtitle/Description */}
                        <p 
                            className="manifest-regular text-[#8C8C8C] leading-5 font-normal"
                           
                        >
                            Get Feedback And Publishing Consultation From Big-5 Publishing Executives And Acquisitions Editors
                        </p>
                        
                        {/* Button Wrapper */}
                        <div className="w-full flex justify-center space-x-4 mt-12">
                            {/* Replaced <li> with a regular <div>, as a standalone <li> should not be used outside a <ul> or <ol> */}
                            <div className="list-none"> 
                                <a 
                                    href="#contact" // Changed void:; to a more standard placeholder link
                                    onClick={handleDiscussClick}
                                    // Merged all the styling classes, adjusting the 2xl-px-0 to 2xl:px-0
                                    className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-110 hover:text-white"
                                >
                                    <img src={ChatIcon} alt="Chat icon" /> 
                                    Let's Discuss!
                                </a>
                            </div>
                        </div>
                        
                        {/* Badges/Awards Section */}
                        <div className="flex justify-center items-center gap-5 mt-12">
                            <a href="#badge1">
                                <img src={CSuitBadge} alt="C-Suite Award Badge" className="w-[81px] h-[81px]" />
                            </a>
                            <a href="#badge2">
                                <img
                                    src={ReadersFavoriteBadge}
                                    alt="Readers Favorite Award Badge"
                                    className="w-[81px] h-[81px]" 
                                />
                            </a>
                            <a href="#badge3">
                                <img src={AwardTwoBadge} alt="Award Badge Two" className="w-[81px] h-[81px]" />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookCoachingBanner;