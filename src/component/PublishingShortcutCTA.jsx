import React from 'react';
import sendArrow from "../assets/send-arrow.png"; 
import chatIcon from "../assets/chating-icon.png";
import mainImage from "../assets/dg.png";

const PublishingShortcutCTA = () => {
     
    const handleDiscussClick = (e) => {
        e.preventDefault();
        console.log("Open Modal/Discussion form logic triggered");
    };

    return (
        <section
            className="xl:py-12 xl:pb-12 lg:pb-12 2xl:px-0 py-12 pb-0 px-4 bg-[#1D1D1F] rev-consult-sec"
        >
            <div className="container mx-auto">
                <div className="flex items-start lg:items-center justify-between lg:flex-row flex-col">
                    
                    {/* Text and Form Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="luxury-regular text-white lg:text-[53px] leading-tight mb-4 text-[25px]">
                            Shortcut to Published Author!
                        </h2>
                        <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                            Endless formatting, confusing platforms, and cover designs that make you cringe. Sound familiar?
                            Our Starter Package is your escape plan. Now no subpar publishing process can hold you back.
                            Hurry up. Don't let another day slip by. **Contact us today!**
                        </p>
                        
                        {/* Email Subscription Form */}
                        <div className="w-full max-w-[310px] my-10">
                            <h2 className="text-[25px] text-white luxury-regular">Join Us Through E-Mail</h2>
                            <form
                                method="GET"
                                action="https://leads.infinityprojectmanager.com/brand/fawcettpublications/lead"
                                className="border-b border-[#767677] pb-2 pt-3 flex justify-between"
                            >
                                {/* Hidden fields for lead tracking */}
                                <input type="hidden" name="brand_name" value="fawcettpublications.com" />
                                <input type="hidden" id="lead_area" name="lead_area" value="https://fawcettpublications.com/" />
                                <input type="hidden" name="city" id="city" />
                                <input type="hidden" name="country" id="country" />
                                <input type="hidden" name="ip" id="ip" />
                                <input type="hidden" name="zip_code" id="zip_code" />
                                
                                <input
                                    type="email"
                                    // Adjusted placeholder class to standard Tailwind format
                                    className="bg-transparent w-full outline-none border-0 font-light text-white manifest-regular placeholder-opacity-50 placeholder-[#767677]"
                                    placeholder="your email"
                                />
                                <button type="submit" className="hover:bg-transparent">
                                    <img src={sendArrow} className="w-[40px]" alt="Send Arrow" />
                                </button>
                            </form>
                        </div>
                        
                        {/* Discussion/CTA Button */}
                        <a 
                            href="#discuss" 
                            onClick={handleDiscussClick}
                            className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-110 hover:text-white"
                        >
                            <img src={chatIcon} alt="icon" /> 
                            Let's Discuss!
                        </a>
                    </div>
                    
                    {/* Image Section */}
                    <div className="w-full md:w-2/3 lg:w-2/5 pt-10 md:pt-0">
                        <img src={mainImage} alt="image" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PublishingShortcutCTA;