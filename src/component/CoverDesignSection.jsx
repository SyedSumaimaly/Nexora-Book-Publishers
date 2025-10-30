import React from 'react';

import innerBannerBg from '../assets/inner-banner.png';
import chattingIcon from '../assets/message.png';
import csuitImg from '../assets/csuit.png';
import readersFavoriteImg from '../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png';
import awardTwoImg from '../assets/award-two.png';

const CoverDesignSection = () => {

    return (
        <section
            className="lg:pt-6 pt-10 bg-center-bottom bg-no-repeat flex justify-center bg-cover"
            style={{ backgroundImage: `url(${innerBannerBg})` }}
        >
            <div className="container mx-auto py-20">
                <div className="md:flex items-center">
                    <div className="w-full lg:px-6 px-6 2xl-px-0 text-center">
                        <h1
                            className="luxury-regular text-[#1D1D1F] text-4xl leading-[40px] lg:text-5xl lg:leading-[64px] md:text-4xl md:leading-[40px] xl:text-8xl xl:leading-[80px] font-normal mb-5"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Cover Design
                        </h1>
                        <p
                            className="manifest-regular text-[#8C8C8C] leading-5 font-normal my-14 text-lg"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Get Feedback And Publishing Consultation From Big-5 Publishing Executives And Acquisitions Editors
                        </p>
                        <div className="w-full flex justify-center space-x-4 mt-12">
                            {/* The original used <li> inside the flex container for the button, 
                                which is unconventional but I've kept the list-none class 
                                and structure for fidelity. */}
                            <li className="list-none">
                                <a
                                    href="void:;"
                                    data-modal-target="static-modal"
                                    data-modal-toggle="static-modal"
                                    className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-110 hover:text-white"
                                >
                                    {/* Replace src with the correct image path or imported variable */}
                                    <img src={chattingIcon} alt="Chat Icon" />
                                    Let's Discuss!
                                </a>
                            </li>
                        </div>
                        <div className="flex justify-center items-center gap-5 mt-12">
                            <a href="void:;">
                                {/* Replace src with the correct image path or imported variable */}
                                <img src={csuitImg} alt="C-Suite Badge" className="w-[81px] h-[81px]" />
                            </a>
                            <a href="void:;">
                                {/* Replace src with the correct image path or imported variable */}
                                <img
                                    src={readersFavoriteImg}
                                    alt="Readers Favorite Award"
                                    className="w-[81px] h-[81px]"
                                />
                            </a>
                            <a href="void:;">
                                {/* Replace src with the correct image path or imported variable */}
                                <img src={awardTwoImg} alt="Award Badge Two" className="w-[81px] h-[81px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverDesignSection;