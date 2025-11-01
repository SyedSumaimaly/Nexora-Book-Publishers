import React from 'react';
import awardImage from '../assets/award-one.png'
import awardImage2 from '../assets/award-two.png'
import awardImage3 from '../assets/award-three.png'

const StarRating = () => (
    <div className="flex space-x-1">
        <i className="fa-solid fa-star-sharp text-[#FFB80C] text-[18px]"></i>
        <i className="fa-solid fa-star-sharp text-[18px] text-[#FFB80C]"></i>
        <i className="fa-solid fa-star-sharp text-[18px] text-[#FFB80C]"></i>
        <i className="fa-solid fa-star-sharp text-[18px] text-[#FFB80C]"></i>
        <i className="fa-solid fa-star-sharp text-[18px] text-[#FFB80C]"></i>
    </div>
);

const SliderItem = ({ title, heading, paragraph, bookImage, reviewProfileImg, reviewerName, reviewText, animationClasses = {} }) => {
    const { headingDelay, headingAnim, paragraphDelay, paragraphAnim, bookDelay, bookAnim, reviewDelay, reviewAnim } = animationClasses;

    return (
        <div className="flex justify-center lg:flex-row flex-col lg:justify-between items-center container mx-auto py-10 lg:py-24 xl:py-20 px-2 item">
            <div className="w-full xl:max-w-[530px] lg:max-w-[450px] md:text-left text-center">
                <h1
                    className="xl:text-[40px] lg:text-[30px] text-[20px] text-[#EB4209] font-serif animated"
                    data-cursor="-opaque -mb -color-white"
                >
                    {title}
                </h1>
                <div className="slide__content--headings">
                    <h2
                        className="xl:text-[60px] lg:text-[45px] md:text-[35px] text-[25px] font-serif leading-tight text-[#1D1D1F] animated"
                        data-delay-in={headingDelay}
                        data-animation-in={headingAnim}
                    >
                        {heading}
                    </h2>
                    <p
                        className="xl:text-[15px] text-[13.5px] text-[#8C8C8C] font-normal text-balance animated mt-3"
                        data-delay-in={paragraphDelay}
                        data-animation-in={paragraphAnim}
                    >
                        {paragraph}
                    </p>
                </div>
                {/* Award Images */}
                <div className="flex md:justify-start justify-center xl:space-x-7 space-x-3 xl:pt-20 pt-10">
                    <img src={awardImage} className="xl:w-1/5 w-[90px]" alt="Award Icon 1" />
                    <img src={awardImage2} className="xl:w-1/5 w-[90px]" alt="Award Icon 2" />
                    <img src={awardImage3} className="xl:w-1/5 w-[90px]" alt="Award Icon 3" />
                </div>
            </div>

            {/* Image Column with Review Card */}
            <div className="xl:pt-0 pt-14 relative">
                <img
                    src={bookImage}
                    data-animation-in={bookAnim}
                    data-delay-in={bookDelay}
                    className="xl:w-[500px] lg:w-[w-350px] w-full"
                    alt={`${heading} Book Cover`}
                />
                
                {/* Floating Review Card */}
                <div
                    data-animation-in={reviewAnim}
                    data-delay-in={reviewDelay}
                    className="w-full xl:max-w-[480px] lg:max-w-[580px] h-auto py-3 px-2 rounded-3xl bg-white/70 backdrop-blur-lg absolute bottom-0 lg:left-[-14rem] left-[-10rem] ready md:block hidden"
                    data-aos="fade-left"
                >
                    <div className="flex space-x-3">
                        <img src={reviewProfileImg} className="w-[50px] h-[50px] object-cover rounded-full" alt={`${reviewerName} Profile`} />
                        <div className="leading-8">
                            <h1 className="xl:text-[28px] text-[24px] font-serif text-[#1D1D1F]">{reviewerName}</h1>
                            <StarRating />
                        </div>
                    </div>
                    <p className="xl:text-[16px] text-[14px] text-[#8C8C8C] font-normal pt-3">
                        {reviewText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;