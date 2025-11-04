import React from 'react';
import ReviewConsultImage from '../assets/review-consultation-services-image.png';
import chatIcon from '../assets/chating-icon.png'

const ExpertEyeSection = () => {
    // Data for the checklist items
    const checklist = [
        "We don't sugarcoat. Our reviews are brutally honest, but always constructive.",
        "We live, eat, and sleep books. Our passion is your advantage - Book nerds unite!",
        "Our in-depth reviews save you valuable time and energy.",
        "You need a fresh pair of eyes. “Us” we meant. We offer a unique outlook on your work.",
        "A polished book is more likely to attract readers and boost your sales."
    ];

    return (
        <section className="lg:py-16 2xl:px-0 py-8 px-8 bg-[#1D1D1F] rev-consult-sec">
            <div className="container mx-auto">
                <div className="flex items-start lg:items-center justify-between lg:flex-row flex-col">

                    {/* Left Column: Text Content and List */}
                    <div className="w-full lg:w-1/2 sm:text-left text-center">
                        <h2 className="luxury-regular text-white xl:text-[53px] text-[30px] leading-tight mb-4">
                            Why You Need Our Expert Eye
                        </h2>
                        <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                            You’ve written a draft and now you’re wondering if:
                        </p>

                        {/* Bulleted List */}
                        {/* Added sm:inline-block to correctly align the list on smaller screens if text-center is applied globally */}
                        <ul className="list-disc pl-5 mt-4 sm:text-left text-center sm:inline-block">
                            {checklist.map((item, index) => (
                                <li
                                    key={index}
                                    className="manifest-regular text-[#A7A7A7] text-base leading-[28px] mb-2"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Call-to-Action Button */}
                        <div className="w-full flex sm:justify-start justify-center space-x-4 mt-12">

                            <a
                                href="void:;"
                                data-modal-target="static-modal"
                                data-modal-toggle="static-modal"
                                className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-105 hover:text-white"
                            >

                                <img src={chatIcon} alt="Chat icon" /> Let's Discuss!
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full md:w-2/3 lg:w-2/5 relative pt-10 md:pt-0 flex justify-center lg:justify-end">
                        {/* Note: Ensure 'images/review-consultation-services-image.png' is correctly accessible */}
                        <img
                            src={ReviewConsultImage}
                            alt="Review and Consultation Services Image"
                            className="w-[512px] max-w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertEyeSection;