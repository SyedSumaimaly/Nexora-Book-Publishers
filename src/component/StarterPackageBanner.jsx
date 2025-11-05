import React from 'react';
import InnerBanner from "../assets/inner-banner.png";
import chatIconSrc from "../assets/chating-icon.png";
import csuitSrc from "../assets/csuit.png";
import readersFavoriteSrc from "../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png";
import awardTwoSrc from "../assets/award-two.png";

const StarterPackageBanner = () => {

    const handleDiscussClick = (e) => {
        e.preventDefault();
        console.log("Open Modal/Discussion form logic triggered");
    };

    return (
        <section
            className="lg:pt-10 pt-20 bg-center-bottom bg-no-repeat flex justify-center bg-cover"
              style={{
                           backgroundImage: `url(${InnerBanner})`,
                           backgroundSize: 'cover', 
                           backgroundPosition: 'center' 
                       }}
        >
            <div className="container mx-auto py-10">
                <div className="md:flex items-center">
                    <div className="w-full lg:px-56 px-6 2xl-px-0 text-center">
                        {/* Title */}
                        <h1
                            className="luxury-regular text-[#1D1D1F] text-4xl leading-[40px] lg:text-5xl lg:leading-[64px] md:text-4xl md:leading-[40px] xl:text-8xl xl:leading-[80px] font-normal mb-5"
                        
                        >
                            Starter
                        </h1>

                        {/* Description */}
                        <p
                            className="manifest-regular text-[#8C8C8C] leading-5 font-normal my-14 text-lg"
                        >
                            Get your book out there without the hassle. Our **Starter Package** is your simple ticket to **book stardom**. We’re not putting false claims in here. We only say it because we MEAN it.
                        </p>

                        {/* Call to Action Button */}
                        <div className="w-full flex justify-center space-x-4 mt-12">
                            <li className="list-none">
                                <a
                                    href="#discuss"
                                    onClick={handleDiscussClick}
                                    className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-105 hover:text-white"
                                >
                                    <img src={chatIconSrc} alt="icon" />
                                    Let's Discuss!
                                </a>
                            </li>
                        </div>

                        {/* Award Badges */}
                        <div className="flex justify-center items-center gap-5 mt-12">
                            <a href="#badge1"><img src={csuitSrc} alt="badge" className="w-[81px] h-[81px]" /></a>
                            <a href="#badge2">
                                <img
                                    src={readersFavoriteSrc}
                                    alt="badge"
                                    className="w-[81px] h-[81px]"
                                />
                            </a>
                            <a href="#badge3"><img src={awardTwoSrc} alt="badge" className="w-[81px] h-[81px]" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StarterPackageBanner;