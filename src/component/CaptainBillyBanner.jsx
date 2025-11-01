import React from 'react';

// Assuming these images are available in your project structure
import messageIcon from '../assets/message.png';
import aboutUsImage from '../assets/aboutus.png';

const CaptainBillyBanner = () => {
    // Handler function for the button's action
    const handleDiscussClick = () => {
        // Since the original HTML relied on a global function 'setButtonURL()' 
        // and data-modal attributes, in React, you'd typically handle this 
        // using state management or a proper modal component library.
        // For this conversion, we'll log a message and assume a modal handler 
        // will be passed down or managed elsewhere.
        console.log("Discuss button clicked. Modal toggle functionality is handled via data attributes or props.");

        // If 'setButtonURL()' is required, define it here or import it.
        // Example: if (typeof setButtonURL === 'function') { setButtonURL(); }
    };

    return (
        <section className="bg-[#f9f9f9] w-full pt-14 pb-[10%] px-2 about_banner">
            <div className="container mx-auto flex justify-center md:justify-between">

                {/* Text Content */}
                <div className="w-full max-w-[680px] md:pt-20 pt-0">
                    <h1 className="xl:text-[60px] lg:text-[40px] md:text-[40px] text-[30px] luxury-regular text-black leading-tight text-balance">
                        Captain Billy - Continuing the Legacy of Nexora Publishers
                    </h1>
                    <p className="md:text-[18px] text-[16px] manifest-regular font-medium text-[#BEBEBE] text-balance pt-3">
                        In the early 20th century, a visionary named Wilford Hamilton Fawcett, better known as Captain
                        Billy, left on an adventurous journey that would leave an indelible mark on the world of publishing.
                        And Fawcett Publication s intend to follow
                        that mark and uphold the publication revolution Captain Billy introduced.
                    </p>

                    {/* Button */}
                    <button
                        data-modal-target="static-modal"
                        data-modal-toggle="static-modal"
                        onClick={handleDiscussClick}
                        className="luxury-regular cursor-pointer mt-10 flex justify-center items-center xl:w-[325px] w-[220px] ease-in duration-300 bg-gradient-to-t from-[#EB420A] to-[#FB7A4F] rounded-full py-2 xl:py-4 text-white xl:text-2xl text-lg hover:scale-105 bx_sh"
                    >
                        <img
                            src={messageIcon}
                            alt="message"
                            className="xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] xl:mx-6 mx-4"
                        />
                        Let's Discuss!
                    </button>
                </div>

                {/* Image */}
                <img
                    src={aboutUsImage}
                    className="w-full max-w-[686px] lg:flex hidden h-full mb-[-50rem] object-cover"
                    alt="Image depicting the about section theme"
                />
            </div>
        </section>
    );
};

export default CaptainBillyBanner;