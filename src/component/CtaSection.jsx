import React from 'react';

const CtaSection = () => {
    return (
        <section className="bg-[#F9F9F9]">
            <div className="container mx-auto">
                <div
                    // The main content wrapper, handles flex layout and padding
                    className="cta_area flex items-center justify-center lg:justify-between lg:flex-row flex-col md:py-20 py-14 px-2"
                >
                    <h4 
                        // Note: data-cursor attributes are custom and will only work if you have a library set up for them.
                        data-cursor="-opaque -mb -color-white" 
                        className="luxury-regular xl:text-4xl lg:text-4xl md:text-3xl text-2xl leading-snug text-balance md:text-start text-center lg:pb-0 pb-10"
                    >
                        We Add Wings to Your Book So That Your <span className="block">Journey Becomes A Breeze!</span>
                    </h4>
                    
                    <a 
                        href="tel: +1-(972) 301-7543"
                        className="luxury-regular flex justify-center items-center xl:w-[300px] w-[200px] ease-in duration-300 
                                   bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl"
                    >
                        Call Now!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;