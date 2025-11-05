import React from 'react';

import sendArrow from '../assets/send-arrow.png';
import chatIcon from '../assets/chating-icon.png';
import bestselleingimage from '../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png'
import awardIconnTwo from '../assets/award-two.png'
import MainImage from '../assets/db.png'

const EditorialAssessmentSignup = () => {

    const handleDiscussClick = (e) => {
        e.preventDefault();
        console.log("Open Modal/Discussion form logic triggered");
    };

    return (
        <section
            className="xl:py-20 xl:pb-32 lg:pb-12 2xl:px-0 py-12 pb-0 px-4 bg-[#1D1D1F] rev-consult-sec relative overflow-hidden"
        >
            <div className="container mx-auto">
                <div className="flex items-start lg:items-center justify-between lg:flex-row flex-col">
                    {/* Text and Form Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="luxury-regular text-white lg:text-[53px] leading-tight mb-4 text-[25px]">
                            Book Your Assessment Today!
                        </h2>
                        <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                            Want to unlock your book's full potential? Our **editorial assessment** is the key. Get **expert
                            insights**, clear direction, and a **roadmap to publication success**. Don't wait, your readers are
                            counting on you and we’re waiting for your call!!
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
                    
                    {/* Image Section (Absolute Positioning) */}
                    <div className="w-full md:w-2/3 lg:w-2/5 lg:absolute bottom-0 right-0 pt-10 md:pt-0">
                        <img src={MainImage} alt="image" className="w-[539px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditorialAssessmentSignup;