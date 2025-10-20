import React, { useRef, useEffect } from 'react';
// Assuming these paths are correct for your project structure
import STATUS_IMAGE_URL from '../assets/status.png';
import HOME_ABOUT_IMAGE_URL from '../assets/home-about.png';
import VanillaTilt from 'vanilla-tilt';

// --- Component Data ---
const aboutContent = {
    title: "We Are Book Lovers Ourselves",
    text: "Normally, when a company hires its workforce, the requirements revolve around skills, qualifications, and experience. But we aren't normal. There is an extra tick you need to have if you want to work at Nexora Book Publishers s! You need to be a book lover. Only a true book lover will go far above and beyond to ensure a book they are working on achieves its best version before its release date. That's when hiring our services, you can be well assured that your book is in the best of hands.",
    reviewer: {
        name: 'Charlotte Evans',
        title: 'Senior Editor, The Times Literary',
        image: STATUS_IMAGE_URL,
    },
    mainImage: HOME_ABOUT_IMAGE_URL,
};

// --- CORRECTED ImageWithTilt Component ---
const ImageWithTilt = ({ imageUrl }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            // Initialization targets the ref element (the <div> wrapper)
            VanillaTilt.init(tiltRef.current, {
                max: 25, 
                speed: 400, 
                glare: true, 
                'max-glare': 0.5, 
                scale: 1.05, 
            });
        }
        
        return () => {
            // Cleanup function to destroy the instance on unmount
            if (tiltRef.current && tiltRef.current.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        // The wrapper div holds the ref and the styling for the tilt effect area.
        <div 
            ref={tiltRef}
            // Classes for size, position, and rounded corners are applied here
            className="w-full h-auto m-auto relative z-20 rounded" 
        >
            <img 
                // The image tag no longer needs the ref.
                src={imageUrl} 
                alt="about" 
                // Image sizing classes ensure it fills the wrapper div.
                className="w-full h-auto rounded"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400' }}
            />
        </div>
    );
};

// --- AboutArea Component ---
const AboutArea = () => {
    return (
        <section className="bg-[#F9F9F9] py-4 lg:px-4 px-2">
            <div className="container mx-auto about_area">
                <div className="flex items-start lg:items-center justify-between lg:flex-row flex-col">

                    {/* --- Left Column (Content) --- */}
                    <div className="content w-full lg:w-1/2 pr-0 md:pr-24">
                        <h4
                            className="luxury-regular xl:text-6xl lg:text-5xl text-balance md:text-4xl text-3xl leading-tight"
                        >
                            {aboutContent.title.split(' ').map((word, index) => (
                                <React.Fragment key={index}>
                                    {word}
                                    {/* The line break logic */}
                                    {index === 2 && <br className="lg:block hidden" />}
                                    {' '}
                                </React.Fragment>
                            ))}
                        </h4>

                        <p
                            className="manifest-regular mt-6 text-md text-[#BEBEBE] leading-6"
                        >
                            {aboutContent.text}
                        </p>

                        {/* --- Reviewer/Status Card --- */}
                        <div className="crd flex items-center mt-10">
                            <img
                                src={aboutContent.reviewer.image}
                                alt="status"
                                className="w-18 shadow-2xl"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/72x72' }}
                            />
                            <div className="mx-4">
                                <h5 className="manifest-regular md:text-2xl text-lg text-[#EB4209]">
                                    {aboutContent.reviewer.name}
                                </h5>
                                <p className="manifest-regular text-md text-[#BEBEBE]">
                                    {aboutContent.reviewer.title}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column (Image) --- */}
                    <div className="images w-full md:w-2/3 lg:w-2/5 relative pt-10 md:pt-0">
                        {/* This div handles the overall position/spacing, while the inner component handles the tilt effect */}
                        <ImageWithTilt imageUrl={aboutContent.mainImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;