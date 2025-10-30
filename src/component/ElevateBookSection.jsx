import React from 'react';

// Assuming you have these images in your project's assets or public directory
// and can import/reference them correctly.
import sendArrow from '../assets/send-arrow.png';
import chattingIcon from '../assets/chating-icon.png';
import dcImage from '../assets/dc.png';

const ElevateBookSection = () => {
    return (
        <section className="xl:py-12 xl:pb-12 lg:pb-12 2xl:px-0 py-12 pb-0 px-4 bg-[#1D1D1F] rev-consult-sec">
            <div className="container mx-auto">
                <div className="flex items-start lg:items-center justify-between lg:flex-row flex-col">

                    {/* Left Content Column */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="luxury-regular text-white lg:text-[53px] leading-tight mb-4 text-[25px]">
                            Let’s Elevate Your Book
                        </h2>
                        <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                            A Web-optimized, professionally written press release distributed to as many as 30,000 opt-in
                            journalists and more than 250,000 news subscribers through our newswire service PRWeb,
                            plus one month of news tracking.
                        </p>

                        {/* Email Subscription Form */}
                        <div className="w-full max-w-[310px] my-10">
                            <h2 className="text-[25px] text-white luxury-regular">Join Us Through E-Mail</h2>
                            <form
                                method="GET"
                                action="https://leads.infinityprojectmanager.com/brand/fawcettpublications/lead"
                                className="border-b border-[#767677] pb-2 pt-3 flex justify-between"
                            >
                                <input type="hidden" name="brand_name" value="fawcettpublications.com" />
                                <input
                                    type="hidden"
                                    id="lead_area"
                                    name="lead_area"
                                    value="https://fawcettpublications.com/"
                                />
                                <input type="hidden" name="city" id="city" />
                                <input type="hidden" name="country" id="country" />
                                <input type="hidden" name="ip" id="ip" />
                                <input type="hidden" name="zip_code" id="zip_code" />

                                <input
                                    type="email"
                                    // Note: Tailwind uses placeholder-opacity-100 or a specific color for placeholders.
                                    // The original class "text-[#767677]::placeholder" is non-standard Tailwind syntax, 
                                    // I'll correct it slightly for better compatibility while retaining the color intent.
                                    // Using a standard placeholder color class is safer.
                                    className="bg-transparent w-full placeholder-[#767677] outline-none border-0 font-light text-white manifest-regular"
                                    placeholder="your email"
                                />

                                <button type="submit" className="hover:bg-transparent">
                                    <img
                                        src={sendArrow}
                                        className="w-[40px]"
                                        alt="Send Arrow"
                                    />
                                </button>
                            </form>
                        </div>

                        {/* Discussion Button */}
                        <a
                            href="void:;"
                            data-modal-target="static-modal"
                            data-modal-toggle="static-modal"
                            className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-110 hover:text-white"
                        >
                            <img src={chattingIcon} alt="Chat icon" />
                            Let's Discuss!
                        </a>
                    </div>

                    {/* Right Image Column */}
                    <div className="w-full md:w-2/3 lg:w-2/5 pt-10 md:pt-0">
                        <img src={dcImage} alt="Book cover design image" className="w-full" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ElevateBookSection;