import React from 'react';
import BookEditingImage from '../assets/book-editing.png'

// Data structure for the editing services
const editingServices = [
    {
        title: "Developmental Editing",
        description: "Need help with the big picture aspects of your manuscript, including structure, pacing, character development, plot, and thematic coherence? Our book editing wizards have you covered!",
        link: "developmental-editing.php",
    },
    {
        title: "Copy Editing",
        description: "Copy editing involves our pros conducting a detailed review of the text to correct grammar, spelling, punctuation, and syntax errors. Let's not forget the consistency in style, formatting, and factual accuracy.",
        link: "copyediting.php",
    },
    {
        title: "Line Editing",
        description: "Count on our line editors to refine sentences and paragraphs, enhance word choice, and eliminate redundancy to improve the readability and engagement of the text.",
        link: "line-editing.php",
    },
    {
        title: "Proofreading",
        description: "The final step, proofreading, involves a thorough scan of the completed manuscript to catch any lingering typographical errors, misspellings, or minor grammar issues so that your book is fully ready for the big stage.",
        link: "void:;",
    },
];

// NOTE on Fonts: For 100% accuracy, you must embed the specific custom fonts
// used in the design (likely a serif for the header/titles and a simple sans-serif for body).
// We use font-serif and font-sans as approximations.

const BookEditingFullSection = () => {
    return (
        <section className="bg-white py-20 px-4 md:px-0">
            <div className="container mx-auto max-w-7xl">
                
                {/* // =================================================================
                // HEADER AREA (Matching {C6BB4E9C-BBC5-414A-9F69-998EF5722761}.png) 
                // =================================================================
                */}
                <div className="text-center mb-20">
                    <h3 className="font-serif text-5xl md:text-6xl text-[#1D1D1F] flex items-center justify-center tracking-normal">
                        Our Book Editing Expertise
                        {/* The image component with rounded edges to match the design */}
                        <img 
                            src={BookEditingImage} 
                            alt="Book Editing Image"
                            className="w-[100px] h-10 ml-4 rounded-full object-cover" 
                            // w-24 h-10 ml-4 rounded-full are approximations for the image size and shape
                        />
                    </h3>
                    {/* Adjusted text color and size to match the light gray, center-aligned text in the image */}
                    <p className="font-sans text-lg text-[#B8B8B8] w-full md:w-3/5 mx-auto mt-6">
                        No matter what stage of book writing you are in, you will
                        find our book editing services perfect for every situation.
                    </p>
                </div>

                {/* // =================================================================
                // SERVICES GRID (Matching {A9D5C178-6617-4BAA-9F69-998EF5722761}.png) 
                // =================================================================
                */}
                <div>
                    {/* Border setup: border-t and border-l on the container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-300">
                        
                        {editingServices.map((service, index) => (
                            <div 
                                key={index} 
                                // Each card has a border-b and border-r
                                className="p-8 border-b border-r border-gray-300 flex flex-col justify-between"
                            >
                                {/* Title: Font-serif, dark, large size */}
                                <h4 className="font-serif text-3xl text-black mb-6">
                                    {service.title}
                                </h4>
                                
                                {/* Description: Font-sans, light gray, medium size */}
                                <p className="font-sans text-base text-gray-600 leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                
                                {/* Arrow Button: Light gray circle with dark gray arrow */}
                                <a 
                                    href={service.link}
                                    className="mt-auto block w-10 h-10 rounded-full bg-gray-200 items-center justify-center text-gray-700 transition duration-300 ease-in-out hover:bg-gray-300"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    {/* SVG for a crisp right arrow icon */}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5" 
                                        stroke="currentColor" 
                                        className="w-5 h-5"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                                        />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookEditingFullSection;