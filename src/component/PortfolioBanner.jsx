import React from 'react';
// Assuming 'images/portfoliobanner-img-new.png' is in your public directory 
// or imported if you're using a bundler (like Vite/Webpack) with asset imports.
import MessageIcon from '../assets/message.png'
import PortfolioBannerImage from '../assets/portfoliobanner-img-new.png'

const PortfolioBanner = () => {
    const setButtonURL = () => {
        console.log("Button clicked, setting URL and toggling modal.");
    };

    return (
        <section className="bg-[#f9f9f9] w-full pt-10 px-2">
            <div className="container mx-auto flex justify-center md:justify-between md:flex-row flex-col">
                <div className="w-full max-w-[680px] md:pt-20 pt-0">
                    <h1 className="lg:text-[80px] md:text-[50px] text-[30px] luxury-regular text-black leading-tight text-balance">
                        Our Epic Book Collection
                    </h1>
                    <p className="text-[18px] manifest-regular font-medium text-[#BEBEBE] text-balance pt-3">
                        Check out some of our best works and find out why we are the perfect option to hire for your book.
                    </p>

                    <button
                        data-modal-target="static-modal"
                        data-modal-toggle="static-modal"
                        onClick={setButtonURL}
                        className="luxury-regular cursor-pointer mt-20 flex justify-center items-center xl:w-[325px] w-[220px] ease-in duration-300 bg-gradient-to-t from-[#EB420A] to-[#FB7A4F] rounded-full py-2 xl:py-4 text-white xl:text-2xl text-lg hover:scale-105 bx_sh"
                    >
                        <img
                            src={MessageIcon}
                            alt="message"
                            className="xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] xl:mx-6 mx-4"
                        />
                        Let's Discuss!
                    </button>
                </div>
                {/* Image tags must be self-closing in React */}
                <img
                    src={PortfolioBannerImage}
                    className="w-full max-w-[700px] pt-14"
                    alt="Portfolio banner image"
                />
            </div>
            {/* The closing div from your HTML was outside the section, so it's placed here 
                to maintain the original structure, though it seems extraneous and might be removed.
            */}
            <div />
        </section>
    );
};

export default PortfolioBanner;