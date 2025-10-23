import React from 'react';

// Dummy component for the arrow icon
const ArrowIcon = () => (
    <div className="bg-[#E3E3E3] block w-10 h-10 rounded-full flex items-center justify-center transition delay-250 duration-300 ease-in-out">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </div>
);

// FIX APPLIED HERE: Combining internal and external classes
const ServiceCard = ({ title, description, className = '' }) => (
    <div className={`crd px-8 ${className}`}> 
        <h4 className="relative luxury-regular text-[#1D1D1F] text-2xl">{title}</h4>
        <p className="manifest-regular text-md text-[#8F8F8F] my-6">{description}</p>
        <a href="#void" onClick={(e) => e.preventDefault()} aria-label={`View details for ${title}`}>
            <ArrowIcon />
        </a>
    </div>
);

const MarketingServicesSection = () => {
    // Data for the service cards
    const services = [
        {
            title: "Online Book Promotions",
            description: "We specialize in creating masterful book marketing campaigns that ensure your book goes viral in the online world."
        },
        {
            title: "Book Review",
            description: "Need help getting professional book reviews from popular readers around the world? We can help!"
        },
        {
            title: "Book Tours & Signings",
            description: "Count on our professionals to help you with your book tour and organize book signings to gain publicity."
        },
        {
            title: "Content Marketing",
            description: "Our in-house writing wizards can create an online buzz about your book through blogs, articles, and guest posts."
        },
    ];

    return (
        <section className="pt-28 relative">
            <div className="services_area marketing_service">
                {/* Header */}
                <div className="text-center">
                    <h3 className="luxury-regular text-5xl text-[#1D1D1F] flex items-center text-balance justify-center">
                        Book Marketing Services You Need!
                        <img 
                            src="images/services.webp" 
                            alt="services"
                            className="lg:block hidden w-[110px] mx-4" 
                        />
                    </h3>
                    <p className="manifest-regular w-full lg:w-3/5 m-auto text-lg text-balance text-[#8F8F8F] my-10">
                        At Fawcett Publications, you will find everything your book needs to trend around 
                        <span className="block">the world and steal the spotlight wherever it goes.</span>
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="service_crd p-12 mt-10">
                    <div className="container mx-auto" data-cursor="-opaque -mb -color-white">
                        <div className="grid grid-cols-1 lg:grid-cols-4 space-y-14 md:grid-cols-2 md:space-y-0 lg:space-y-0">
                            {services.map((service, index) => (
                                <ServiceCard 
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    className="border-2 border-black m-2 rounded-xl py-2" // This class is now correctly applied
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingServicesSection;