import React, { useRef, useEffect } from 'react';
// Assuming these paths are correct for your project structure
import STATUS_IMAGE_URL from '../assets/status.png';
import HOME_ABOUT_IMAGE_URL from '../assets/marketing-about.png';
import VanillaTilt from 'vanilla-tilt';
import MessageIcon from '../assets/message.png'

const LUXURY_REGULAR = 'font-serif font-bold tracking-tight';
const MANIFEST_REGULAR = 'font-sans font-light';

// --- Component Data ---
const aboutContent = {
    title: "Nexora Book Publishers - The Premium Book Writing Experience",
    text: "At Nexora Book Publishers, we specialize in crafting compelling stories that captivate and connect with audiences. Whether you're stuck halfway or just starting out, our team of expert writers is here to help you cross the finish line. We understand your vision and translate it into words that engage, entertain, and inspire your readers. With us helping you out with your book, nothing is stopping it from making a buzz around the world and putting your name in the spotlight!",
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
            className={`${LUXURY_REGULAR} text-4xl lg:text-4xl xl:text-6xl leading-tight w-full h-auto m-auto relative z-20 rounded`}
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
const MarketingAboutSection = () => {

    const handleCtaClick = () => {
        // Example of what setButtonURL might do:
        // window.location.href = 'mailto:contact@nexorapublishers.com';
        // Or, toggle a modal state:
        // setModalOpen(true);
        console.log("CTA clicked: Opening modal for discussion.");
    };

    return (
        <section className="bg-[#F9F9F9] py-4 lg:px-4 px-2 overflow-x-hidden">
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
                        <button
                            type="button"
                            onClick={handleCtaClick}
                            // Replicating the large, gradient, rounded button style
                            className={`
                                ${LUXURY_REGULAR} mt-10 flex justify-center items-center
                                xl:w-[325px] w-[220px] transition-all duration-300 
                                bg-gradient-to-t from-[#EB420A] to-[#FB7A4F]
                                rounded-full py-2 xl:py-4 text-white xl:text-2xl text-lg 
                                hover:scale-105 shadow-xl hover:shadow-2xl
                            `}
                            // Custom attributes like data-modal-target/toggle would be handled by a React modal state
                            data-modal-target="static-modal"
                            data-modal-toggle="static-modal"
                        >
                            <img
                                src={MessageIcon}
                                alt="message icon"
                                className="cursor-pointer xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] xl:mx-6 mx-4"
                            />
                            Let's Discuss!
                        </button>
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

export default MarketingAboutSection;