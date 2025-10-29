import React from 'react';
import MessageIcon from '../assets/message.png';
import DiscoveringImage from '../assets/discovering.png';

const PolishingDiamondsSection = () => {
    // Function to handle button click, mimicking the original onclick behavior
    const handleDiscussClick = () => {
        // Replace with your actual modal and URL setting logic
        // console.log("Let's Discuss button clicked!");
        // setButtonURL() and modal logic would go here in a full React app
    };

    return (
        <section className="bg-[#1D1D1F] py-16 my-10 overflow-hidden px-3">
            <div className="container mx-auto">
                <div className="flex items-center lg:justify-between justify-center lg:flex-row flex-col">

                    {/* Left Content Area */}
                    <div className="content w-full lg:w-1/2 pr-0 px-2 lg:pr-24">
                        <h4
                            className="font-serif xl:text-6xl lg:text-5xl text-4xl leading-tight text-white"
                        // Removed data-cursor attributes as they are non-standard HTML/Tailwind
                        >
                            Polishing Your Diamonds
                            {/* Adjusted br for better responsiveness: hidden on small, block on medium+ */}
                            <br className="sm:hidden lg:block" /> in the Rough
                        </h4>
                        <p
                            className="font-sans mt-6 text-base text-balance text-[#BEBEBE] leading-6"
                        // Removed data-cursor attributes
                        >
                            Writing a rough manuscript is a massive feat that requires a lot of hard work. We fully
                            understand and respect that. That's why when you trust us with your hard work, we don't add,
                            subtract, reshape, or convert it in any way. Otherwise, the book that
                            comes out at the end of the tunnel will be entirely different.
                            <br /> No. At Nexora Book Publishers, we always preserve the vision, idea, plot, tone, style,
                            character, and personal touch you added to your manuscript. We merely ensure that it contains no
                            grammatical errors, is free from plot
                            holes, and offers a complete banging reading experience.
                        </p>

                        {/* Button */}
                        <button
                            onClick={handleDiscussClick}
                            className="font-serif cursor-pointer mt-20 flex justify-center items-center xl:w-[325px] w-[220px] transition-all duration-300 bg-gradient-to-t from-[#EB420A] to-[#FB7A4F] rounded-full py-2 xl:py-4 text-white xl:text-2xl text-lg hover:scale-105 shadow-2xl" // bx_sh approximated as shadow-2xl and hover:scale-110
                        // Removed non-Tailwind/React modal attributes (data-modal-target, data-modal-toggle)
                        >
                            <img
                                src={MessageIcon} // Placeholder for your image source
                                alt="message icon"
                                className="xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] xl:mx-6 mx-4"
                            />
                            Let's Discuss!
                        </button>
                    </div>

                    {/* Right Image Area */}
                    <div className="images w-full pt-16 lg:pt-0 max-w-[550px] relative">
                        <img
                            src={DiscoveringImage}
                            alt="about"
                            className="w-full object-cover mx-auto relative z-20 rounded"
                        />
                        {/* The commented out grid images are omitted as per the original HTML */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolishingDiamondsSection;