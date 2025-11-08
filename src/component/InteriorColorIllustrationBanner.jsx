import React from 'react';
import InnerBanner from "../assets/inner-banner.png";
import chatIconSrc from "../assets/chating-icon.png";
import csuitSrc from "../assets/csuit.png";
import readersFavoriteSrc from "../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png";
import awardTwoSrc from "../assets/award-two.png";


const InteriorColorIllustrationBanner = () => {
    return (
        <section

            style={{
                backgroundImage: `url(${InnerBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

            className="lg:pt-10 pt-20 bg-center-bottom bg-no-repeat flex justify-center bg-cover"
        >
            <div className="container mx-auto py-10">
                <div className="md:flex items-center">
                    <div className="w-full lg:px-6 px-6 2xl-px-0 text-center">
                        <h1
                            className="luxury-regular text-[#1D1D1F] text-4xl leading-[40px] lg:text-5xl lg:leading-[64px] md:text-4xl md:leading-[40px] xl:text-8xl xl:leading-[80px] font-normal mb-5"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Interior Color Illustration
                        </h1>
                        <p
                            className="manifest-regular text-[#8C8C8C] leading-5 font-normal my-14 text-lg"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Get Feedback And Publishing Consultation From Big-5 Publishing Executives And Acquisitions Editors
                        </p>
                        <div className="w-full flex justify-center space-x-4 mt-12">
                            <li className="list-none">
                                <a
                                    href="void:;"
                                    data-modal-target="static-modal"
                                    data-modal-toggle="static-modal"
                                    className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-105 hover:text-white"
                                >
                                    {/* Note: Ensure the image path works in your React environment */}
                                    <img src={chatIconSrc} alt="icon" /> Let's Discuss!
                                </a>
                            </li>
                        </div>
                        <div className="flex justify-center items-center gap-5 mt-12">
                            <a href="void:;">
                                <img src={csuitSrc} alt="badge 1" className="w-[81px] h-[81px]" />
                            </a>
                            <a href="void:;">
                                <img
                                    src={readersFavoriteSrc}
                                    alt="badge 2"
                                    className="w-[81px] h-[81px]"
                                />
                            </a>
                            <a href="void:;">
                                <img src={awardTwoSrc} alt="badge 3" className="w-[81px] h-[81px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteriorColorIllustrationBanner;