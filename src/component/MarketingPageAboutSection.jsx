import React from 'react';
import MarketingImage from '../assets/marketing-about2.png';
import MessageIcon from '../assets/message.png'


const MarketingPageAboutSection = () => {

    const handleDiscussionClick = () => {
        console.log("Let's Discuss button clicked.");
    };

    return (
        <section className="bg-[#1D1D1F] py-16 overflow-hidden px-3">
            <div className="container m-auto marketing_about">
                <div className="flex items-center lg:justify-between justify-center lg:flex-row flex-col">
                    
                    {/* Content Section */}
                    <div className="content w-full lg:w-1/2 pr-0 px-2 lg:pr-24">
                        <h4 
                            data-cursor="-opaque -mb -color-white"
                            className="luxury-regular xl:text-6xl text-5xl leading-tight text-white"
                        >
                            All Eyes on You <span className="block">& Your Book</span>
                        </h4>
                        
                        <p 
                            data-cursor="-opaque -mb -color-white"
                            className="manifest-regular mt-6 text-md text-balance text-[#BEBEBE] leading-6"
                        >
                            Has this ever happened to you? You walked into a bookstore while window shopping and randomly picked up a book
                            for a quick look. But that quick look becomes an hour-long session because the book is just that
                            good. You think it's even
                            'Best-Seller' material. So why is it lying on a shelf in the unknown section collecting dust?
                            Because it never got the marketing a book needs to make its mark. To become a best-selling
                            author, you need two things. One, a genius
                            book idea. Two, a headstrong book marketing campaign. If you think you already have the first
                            half, then all you are missing is our book marketing services! So, what's the wait up for?
                        </p>
                        
                        <button 
                            data-modal-target="static-modal" 
                            data-modal-toggle="static-modal" 
                            onClick={handleDiscussionClick} // Using onClick in React
                            className="luxury-regular cursor-pointer mt-10 flex justify-center items-center xl:w-[325px] w-[220px] ease-in duration-300 bg-gradient-to-t from-[#EB420A] to-[#FB7A4F] rounded-full py-2 xl:py-4 text-white xl:text-2xl text-lg hover:scale-105 bx_sh"
                        >
                            <img
                                src={MessageIcon}
                                alt="message"
                                className="xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] xl:mx-6 mx-4"
                            />
                            Let's Discuss!
                        </button>
                    </div>
                    
                    {/* Image Section */}
                    <div className="images w-full pt-16 lg:pt-0 lg:w-1/2 relative">
                       
                        <img 
                            src={MarketingImage}
                            alt="about"
                            className="w-full object-cover m-auto relative z-20 rounded" 
                            data-tilt 
                            data-tilt-glare="true"
                            data-tilt-scale="0.9"
                        />
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingPageAboutSection;