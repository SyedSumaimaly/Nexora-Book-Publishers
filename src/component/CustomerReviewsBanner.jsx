import React from 'react';
import InnerBanner from "../assets/bg-reviews.png";
import csuitSrc from "../assets/csuit.png";
import readersFavoriteSrc from "../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png";
import awardTwoSrc from "../assets/award-two.png";

const CustomerReviewsBanner = () => {
    return (
        <section

            style={{
                backgroundImage: `url(${InnerBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}

            className="2xl:pt-96 xl:pt-64 md:pt-40 2xl:pb-40 xl:pb-20 pt-20 pb-20 bg-center-bottom bg-no-repeat flex justify-center bg-cover relative z-10 after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 w-full after:bg-[#fff] after:opacity-80 lg:after:opacity-0 after:-z-10"
        >
            <div className="container mx-auto py-20">
                <div className="md:flex items-center justify-center">
                    <div className="w-full lg:w-1/2 text-center">
                        <h1
                            className="luxury-regular text-[#1D1D1F] text-2xl sm:text-3xl leading-[30px] lg:text-5xl lg:leading-[60px] md:text-4xl md:leading-[40px] xl:text-7xl xl:leading-[80px] font-normal mb-5"
                            data-cursor="-opaque -mb -color-white"
                        >
                            These Folks Love Us
                        </h1>
                        <p
                            className="manifest-regular text-[#8C8C8C] leading-5 text-[15px] xl:w-2/3 mx-auto"
                            data-cursor="-opaque -mb -color-white"
                        >
                            They’re real words from people like you who had big ideas and needed a little help and we’re
                            lucky to be a part of it. Check out what they’re saying about working with us!
                        </p>
                        <div className="flex justify-center items-center xl:gap-20 gap-8 mt-12">
                            <a href="void:;">
                                <img
                                    src={awardTwoSrc}
                                    alt="Award badge"
                                    className="lg:w-[111px] lg:h-[111px] w-[68px] h-[68px]"
                                />
                            </a>
                            <a href="void:;">
                                <img
                                    src={readersFavoriteSrc}
                                    alt="Award badge"
                                    className="lg:w-[111px] lg:h-[111px] w-[68px] h-[68px]"
                                />
                            </a>
                            <a href="void:;">
                                <img
                                    src={csuitSrc}
                                    alt="Award badge"
                                    className="lg:w-[111px] lg:h-[111px] w-[68px] h-[68px]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviewsBanner;