import React from 'react';
import chatIcon from '../assets/chating-icon.png';
import csuitImage from '../assets/csuit.png'
import bestselligimage from '../assets/104-1044471_readers-favorite-silver-best-selling-author-award.png'
import awardIconTwo from '../assets/award-two.png'
import InnerBanner from '../assets/inner-banner.png'

const BookReviewBanner = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${InnerBanner})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
            className="lg:pt-10 pt-20 bg-center-bottom bg-no-repeat flex justify-center bg-cover"
        >
            <div className="container mx-auto py-20">
                <div className="md:flex items-center">
                    <div className="w-full lg:px-56 px-12 2xl-px-0 text-center">

                        <h1
                            className="luxury-regular text-[#1D1D1F] text-2xl sm:text-3xl leading-[30px] lg:text-5xl lg:leading-[60px] md:text-4xl md:leading-[40px] xl:text-7xl xl:leading-[80px] font-normal mb-5"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Book Review & Consultation
                        </h1>


                        <p
                            className="manifest-regular text-[#8C8C8C] leading-5 font-normal"
                            data-cursor="-opaque -mb -color-white"
                        >
                            Only if you think we just "read" books, you're wrong here pal. We literally dissect them. Our
                            expert reviews will blow your mind. Get the razor-sharp insights you need to game up your
                            masterpiece.
                        </p>


                        <div className="w-full flex justify-center space-x-4 mt-12">

                            <a
                                href="void:;"
                                data-modal-target="static-modal"
                                data-modal-toggle="static-modal"
                                className="header-btn luxury-regular flex justify-center items-center gap-5 lg:w-[330px] w-[200px] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl hover:scale-105 hover:text-white"
                            >

                                <img src={chatIcon} alt="icon" /> Let's Discuss!
                            </a>
                        </div>


                        <div className="flex justify-center items-center gap-5 mt-12">
                            <a href="void:;">

                                <img src={csuitImage} alt="badge" className="w-[81px] h-[81px]" />
                            </a>
                            <a href="void:;">
                                <img
                                    src={bestselligimage}
                                    alt="badge"
                                    className="w-[81px] h-[81px]"
                                />
                            </a>
                            <a href="void:;">
                                <img src={awardIconTwo} alt="badge" className="w-[81px] h-[81px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookReviewBanner;