import React from 'react';
import SERVICE_VIDEO_URL from '../assets/service-video.mp4';
import SERVICES_IMAGE_URL from '../assets/services.webp';


const ChevronDownIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);


const serviceData = [
    {
        title: "Book Writing",
        text: "Can't get a clever book idea out of your head but also can't find the time to pen it down on paper? We got you covered.",
        link: "/book-writing.html",
        target: "_writing"
    },
    {
        title: "Book Publishing",
        text: "Have a rough manuscript at hand? Don't worry, our in-house pros will polish it up and publish it in all the right places.",
        link: "/book-publishing.html",
        target: "_publishing"
    },
    {
        title: "Book Cover Design",
        text: "Nobody will be turning the pages if your book can't turn their heads. Hire our book cover designers and they won't be able to resist!",
        link: "/cover-design.html",
        target: "_cover"
    },
    {
        title: "Book Marketing",
        text: "Is your book's release date nearby or is it sitting in a corner collecting dust? Our book marketing can turn things around.",
        link: "/book-marketing.html",
        target: "_marketing"
    },
];

const ArrowRightIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);


const BORDER_COLOR = 'border-[#434343]';
const TEXT_COLOR = 'text-[#8F8F8F]';


const ServiceCard = ({ title, text, link, target, index }) => (
    // Apply padding and a right border (except the last one on large screens)
    <div className={`crd px-8 py-10 lg:py-0 border-b lg:border-r ${BORDER_COLOR} 
                    ${index === serviceData.length - 1 ? 'lg:border-r-0' : ''}
                    ${index === 0 || index === 1 ? 'md:border-b lg:border-b-0' : 'md:border-b-0'} relative`}
    >
        <h4 className="relative pt-4 luxury-regular text-white lg:text-3xl text-2xl mb-4">
            {title}
        </h4>
        <p className={`manifest-regular text-sm ${TEXT_COLOR} my-6`}>
            {text}
        </p>

        {/* Arrow Button */}


        <a
            href={link}
            target={target}

            className="bg-[#3b3b3b] block w-10 h-10 p-2 rounded-full items-center justify-center transition duration-300 ease-in-out hover:bg-white group"
        >

            <ArrowRightIcon className="text-white transition duration-300 group-hover:text-black" />
        </a>

        {index === 0 && (
            <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-1 transform translate-y-1/2">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-[#434343] rounded-full"></div>
                ))}
            </div>
        )}
    </div>
);

// --- 3. Main Component ---
const ServicesArea = () => {
    return (
        <section

            className="md:py-28 py-14 relative overflow-hidden bg-[#1e1e1e]"
        >

            <video
                src={SERVICE_VIDEO_URL}
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70 -z-10" 
            />

            <div className="services_area relative z-10">

                {/* Header Content */}
                <div className="text-center container mx-auto px-4">

                    <div className="flex justify-center mb-4">
                        <span className="text-white text-3xl tracking-widest leading-none">////////</span>
                    </div>

                    <h3 className="luxury-regular lg:text-5xl md:text-4xl text-3xl text-white flex items-center justify-center text-balance mb-6">
                        Everything An Aspiring Author Needs!
                        <img
                            src={SERVICES_IMAGE_URL}
                            alt="services icon"
                            className="w-[110px] mx-4 xl:block hidden"
                        />
                    </h3>
                    <p className={`manifest-regular text-lg w-full lg:w-3/5 m-auto text-balance ${TEXT_COLOR} mb-12`}>
                        Nexora Book Publishers is the only name you need to remember for your author journey.
                        <span className="block">Once you partner up with us, we will take care of the rest!</span>
                    </p>
                </div>



                {/* Service Cards Grid Wrapper */}
                <div className="service_crd pt-12 md:mt-20">
                    <div className="container mx-auto">
                        <div className={`grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 divide-x ${BORDER_COLOR} border-t`}>

                            {serviceData.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    title={service.title}
                                    text={service.text}
                                    link={service.link}
                                    target={service.target}
                                    index={index}

                                />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesArea;