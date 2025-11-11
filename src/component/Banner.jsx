import React from 'react';
// FIX: Removed local file imports as they cause "Could not resolve" errors in this environment.
 import SIDE_IMAGE_1 from '../assets/banner-side1.png'
 import SIDE_IMAGE_2 from '../assets/banner-side2.png'
 import MESSAGE_ICON from '../assets/message.png'
 import MOUSE_ICON from '../assets/mouse.png'

// --- Utility Component ---

// Utility component to handle custom fonts (like 'luxury-regular' and 'manifest-regular')
// Exported for use in other components if needed.
export const CustomText = ({ children, fontClass, tag: Tag = 'p', className = '' }) => (
    <Tag className={`${fontClass} ${className}`}>{children}</Tag>
);

// --- Constants: Using Placeholders to replace missing local assets ---
// const SIDE_IMAGE_1_URL = "https://placehold.co/450x600/1D1D1F/FFDAB9?text=ABSTRACT+BOOK+1";
// const SIDE_IMAGE_2_URL = "https://placehold.co/450x600/1D1D1F/FFDAB9?text=ABSTRACT+BOOK+2";
// const MESSAGE_ICON_URL = "https://placehold.co/25x25/ffffff/000000?text=MSG";
// const MOUSE_ICON_URL = "https://placehold.co/20x30/FFFFFF/1D1D1F?text=Scroll";

// Fallback constants (kept for the onerror attribute, though the main URLs are now placeholders too)
const FALLBACK_BOOK_1 = SIDE_IMAGE_1;
const FALLBACK_BOOK_2 = SIDE_IMAGE_2;
const FALLBACK_MESSAGE = MESSAGE_ICON;
const FALLBACK_MOUSE = MOUSE_ICON;


// --- Banner Component ---

const Banner = ({ openModal }) => {
    
    return (
        <section className="bg-white text-[#1D1D1F] overflow-x-hidden xl:overflow-x-clip">
            <div className="container mx-auto text-center md:py-36 py-14 xl:py-0 xl:h-screen flex justify-center items-center flex-col relative">

                {/* Main Heading */}
                <CustomText
                    tag="h3"
                    fontClass="luxury-regular"
                    className="2xl:mt-32 xl:mt-40 mt-32 2xl:text-[92px] xl:text-[72px] lg:text-[80px] md:text-[80px] sm:text-[60px] text-[40px] leading-[1.1] w-full lg:w-11/12 xl:w-[60%] text-[#1D1D1F] relative z-20"
                >
                    They Turn Pages, We Turn Heads!
                </CustomText>

                {/* Subheading */}
                <CustomText
                    fontClass="manifest-regular"
                    className="lg:text-[25px] text-[20px] text-[#8C8C8C] text-balance mt-4 relative z-20"
                >
                    Converting Stories Into Unforgettable Reading Experiences!
                </CustomText>

                {/* Abstract Background Images: Sizing adjusted for better responsiveness */}
                <div className="abs_img overflow-hidden w-full h-full absolute top-0 left-0">
                    
                    {/* Image 1 (Left) - Now uses placeholder URL */}
                    <img
                        src={SIDE_IMAGE_1} // Use placeholder URL
                        alt="Abstract Side Decoration 1"
                        className="zoom1 z-10 absolute top-1/4 sm:top-[30%] lg:top-[16%] left-0 sm:left-[-10%] lg:left-[-12%] 
                                   w-[300px] sm:w-[350px] md:w-1/3 xl:w-[581px] max-w-none 
                                   object-cover h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg opacity-80 shadow-2xl"
                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_BOOK_1; }}
                    />

                    {/* Image 2 (Right) - Now uses placeholder URL */}
                    <img
                        src={SIDE_IMAGE_2} // Use placeholder URL
                        alt="Abstract Side Decoration 2"
                        className="zoom2 absolute z-10 top-[30%] sm:top-[34%] lg:top-[17%] right-0 sm:right-[-10%] lg:right-[-16%] 
                                   w-[250px] sm:w-[300px] md:w-1/3 xl:w-[581px] max-w-none 
                                   object-cover h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg opacity-80 shadow-2xl"
                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_BOOK_2; }}
                    />
                </div>

                {/* CTA Button */}
                <button
                    onClick={ openModal }
                    className="luxury-regular mt-20 flex justify-center items-center w-[220px] xl:w-[325px] ease-in duration-300 bg-gradient-to-t from-[#EB420A] to-[#FB7A4F] rounded-full py-2 xl:py-4 text-white text-lg xl:text-2xl hover:scale-105 transition-transform shadow-xl shadow-[#EB420A]/50 z-20"
                >
                    <img
                        src={MESSAGE_ICON} // Use placeholder URL
                        alt="Message Icon"
                        className="w-[20px] xl:w-[25px] h-[20px] xl:h-[25px] mx-4 xl:mx-6 object-contain"
                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_MESSAGE; }}
                    />
                    Let's Discuss!
                </button>

            </div>
        </section>
    );
};

export default Banner;
