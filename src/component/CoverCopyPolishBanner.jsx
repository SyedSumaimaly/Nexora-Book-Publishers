import React from 'react';
import InnerBanner from '../assets/inner-banner.png';
import csuitImage from '../assets/csuit.png';
import bestsellingIcon from '../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png'
import awardIcon from '../assets/award-two.png';
import chatIcon from '../assets/chating-icon.png';


const CoverCopyPolishBanner = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${InnerBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="lg:pt-10 pt-20 bg-[url(./images/inner-banner.png)] bg-center-bottom bg-no-repeat flex justify-center bg-cover"
        >
            <div className="container mx-auto py-20">
                <div className="md:flex items-center">
                    <div className="w-full lg:px-56 px-6 2xl-px-0 text-center">

                        {/* Title */}
                        <h1
                            className="luxury-regular text-[#1D1D1F] text-2xl leading-[30px] lg:text-5xl lg:leading-[64px] md:text-4xl md:leading-[40px] xl:text-8xl xl:leading-[80px] font-normal mb-5"
                            data-cursor="-opaque -mb -color-white" 
                        >
                            Cover Copy Polish
                        </h1>

                        {/* Subtitle/Description */}
                        <p
                            className="manifest-regular text-[#8C8C8C] leading-5 font-normal my-14 text-lg"
                            data-cursor="-opaque -mb -color-white" 
                        >
                            Before the readers read what's written inside, they will read what's on the outside. So let's
                            make sure it's epic enough to grab their attention.
                        </p>

                        {/* CTA Button */}
                        <div className="w-full flex justify-center space-x-4 mt-12">
                            <a
                                href="void:;"
                                data-modal-target="static-modal"
                                data-modal-toggle="static-modal"
                                className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-105 hover:text-white"
                            >
                                <img src={chatIcon} alt="Chat icon" /> Let's Discuss!
                            </a>
                        </div>

                        {/* Award Badges */}
                        <div className="flex justify-center items-center gap-5 mt-12">
                            <a href="void:;">
                                <img src={csuitImage} alt="badge" className="w-[81px] h-[81px]" />
                            </a>
                            <a href="void:;">
                                <img
                                    src={bestsellingIcon}
                                    alt="badge"
                                    className="w-[81px] h-[81px]"
                                />
                            </a>
                            <a href="void:;">
                                <img src={awardIcon} alt="badge" className="w-[81px] h-[81px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoverCopyPolishBanner;