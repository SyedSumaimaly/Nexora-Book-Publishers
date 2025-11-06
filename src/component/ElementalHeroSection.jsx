import React from 'react';
import InnerBanner from "../assets/inner-banner.png";
import chatIconSrc from "../assets/chating-icon.png";
import csuitSrc from "../assets/csuit.png";
import readersFavoriteSrc from "../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png";
import awardTwoSrc from "../assets/award-two.png";


const ElementalHeroSection = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${InnerBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="lg:pt-10 pt-20 bg-[url('/images/inner-banner.png')] bg-center-bottom bg-no-repeat flex justify-center bg-cover"
        >
            <div className="container mx-auto py-10">
                <div className="md:flex items-center">
                    <div className="w-full lg:px-56 px-6 2xl-px-0 text-center">
                        {/* Main Heading: Elemental */}
                        <h1
                            className="luxury-regular text-[#1D1D1F] text-4xl leading-[40px] lg:text-5xl lg:leading-[64px] md:text-4xl md:leading-[40px] xl:text-8xl xl:leading-[80px] font-normal mb-5"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Elemental
                        </h1>
                        {/* Sub-paragraph */}
                        <p
                            className="manifest-regular text-[#8C8C8C] leading-5 font-normal my-14 text-lg"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Get Feedback And Publishing Consultation From Big-5 Publishing Executives And Acquisitions Editors
                        </p>
                        {/* Button */}
                        <div className="w-full flex justify-center space-x-4 mt-12">
                            <li className="list-none">
                                <a
                                    href="#"
                                    data-modal-target="static-modal"
                                    data-modal-toggle="static-modal"
                                    className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-105 hover:text-white"
                                >
                                    <img
                                        src={chatIconSrc}
                                        alt="Chatting Icon"
                                    />
                                    Let's Discuss!
                                </a>
                            </li>
                        </div>
                        {/* Badges/Awards Section */}
                        <div className="flex justify-center items-center gap-5 mt-12">
                            <a href="#">
                                <img src={csuitSrc} alt="C-Suite Badge" className="w-[81px] h-[81px]" />
                            </a>
                            <a href="#">
                                <img
                                    src={readersFavoriteSrc}
                                    alt="Readers Favorite Award"
                                    className="w-[81px] h-[81px]"
                                />
                            </a>
                            <a href="#">
                                <img src={awardTwoSrc} alt="Award Badge" className="w-[81px] h-[81px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElementalHeroSection;