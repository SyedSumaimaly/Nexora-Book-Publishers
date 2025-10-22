import React from 'react';

// Using a stable URL from a previous upload instead of a local file path (which would cause a build error).
// We're also replacing the placeholder with a more meaningful image.
import BACKGROUND_LOGO_URL from '../assets/logo-2.png'

const ConsultationCta = () => {
    // You would typically use a library like 'react-aos' for data-aos animations in a full project.
    // For this environment, we'll keep the styles without the AOS attributes.
    return (
        <section className="bg-[#1d1d1f] relative overflow-hidden">
            
            {/* Background Logo (Absolute positioning) */}
            <img 
                src={BACKGROUND_LOGO_URL} 
                alt="logo background" 
                // Increased opacity from opacity-10 to opacity-30 for better visibility
                className="absolute left-12 top-8 min-w-6/12 opacity-10  object-contain max-w-[300px] lg:max-w-[400px]"
            />

            <div
                // Removed lg:flex-row and related justify classes as there's only one main column now
                className="container mx-auto py-10 px-4 flex flex-col items-start"
            >
                {/* Left Content Area (Text) - Now takes full width */}
                <div 
                    // Changed max-width to w-full to utilize the whole container
                    className="w-full text-start space-y-6 z-10"
                >
                    <h1 className="xl:text-7xl text-balance lg:text-5xl text-3xl font-bold text-white">
                        Book a Free Consultation With Our Experts
                    </h1>
                    
                    <p className="md:text-lg text-balance leading-tight text-md font-regular text-gray-300 max-w-4xl"> 
                        Nexora Book Publishers is the only name you need to remember for your author journey. Once you partner up with us, we will take care of the rest!
                    </p>
                    
                    <h4 className="luxury-regular lg:text-3xl xl:text-3xl text-xl text-[#ef4f1b] pt-4">
                        What to expect?
                    </h4>
                    
                    {/* List with styling adjustments for better bullet visibility */}
                    <ul className="manifest-regular space-y-4 text-white list-disc list-inside max-w-4xl">
                        <li className="md:text-lg text-balance leading-tight text-md font-regular">
                            30 minutes of a one-to-one meeting to get your idea validated & clear all your doubts.
                        </li>
                        <li className="md:text-lg text-balance leading-tight text-md font-regular">
                            Detailed consultation regarding your project brief & complete roadmap till execution.
                        </li>
                        <li className="md:text-lg text-balance leading-tight text-md font-regular">
                            Personalized solution as per your needs and estimated quote to bring your Book idea to life.
                        </li>
                        <li className="md:text-lg text-balance leading-tight text-md font-regular">
                            We’re all about results, but they come with an investment. If that’s not in the cards right now, no worries—let’s save the call for when you’re ready to turn the page.
                        </li>
                    </ul>

                    {/* Added a call-to-action button to replace the removed Calendly section */}
                    <div className="pt-6">
                        <a 
                            href="#contact" 
                            className="inline-block bg-[#ef4f1b] hover:bg-[#db3e0e] text-white border-white border-solid border-2 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg uppercase tracking-wider"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationCta;
