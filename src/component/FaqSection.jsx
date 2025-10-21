import React, { useState } from 'react';

// Utility classes to simulate custom fonts
const LUXURY_REGULAR = 'font-serif tracking-tight'; 
const MANIFEST_REGULAR = 'font-sans font-light'; 

// Data for the FAQ Accordion
const faqItems = [
    {
        id: 1,
        question: "What types of book publishing services do you offer?",
        answer: "We provide comprehensive services including manuscript editing, cover design, book printing, e-book publishing, and post-publishing support to ensure your book reaches its full potential.",
    },
    {
        id: 2,
        question: "How do you handle cover design?",
        answer: "Our cover design process involves working closely with authors to understand the essence of their book. We then create a visually compelling cover that appeals to the target audience and enhances marketability.",
    },
    {
        id: 3,
        question: "Can you assist with both print and e-book formats?",
        answer: "Yes, we offer publishing in both print and digital formats. Our team handles everything from formatting and conversion for e-books to printing and binding for physical books.",
    },
    {
        id: 4,
        question: "What kind of marketing support do you provide after publishing?",
        answer: "Post-publishing, we offer marketing services that include creating detailed summaries, managing social media campaigns, arranging book signings, and securing spots in bookstores to maximize your book’s reach and impact.",
    },
    {
        id: 5,
        question: "How long does the publishing process take from manuscript submission to final product?",
        answer: "The timeline can vary based on several factors, including the length of the manuscript and the specific services required. Generally, the process takes anywhere from three to six months from manuscript submission to having a fully published book ready for distribution.",
    },
];

const FaqSection = () => {
    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <section className="bg-[#fafafa] relative z-[1000]">
            <div className="container mx-auto mt-0 py-20 px-4">
                {/* Section Title */}
                <h4 className={`${LUXURY_REGULAR} text-5xl text-black flex items-center justify-center mb-10`}>
                    FAQs
                </h4>
                
                {/* Accordion Container */}
                <div id="accordion-color" className="max-w-4xl mx-auto">
                    {faqItems.map((item) => {
                        const isOpen = openItemId === item.id;
                        
                        return (
                            <div key={item.id} className="border-b-2 border-gray-300">
                                
                                {/* Accordion Header/Button */}
                                <h2 id={`accordion-color-heading-${item.id}`}>
                                    <button 
                                        type="button" 
                                        className={`
                                            flex items-center justify-between w-full p-5 gap-3 transition duration-300 ease-in-out
                                            ${isOpen 
                                                ? 'bg-[#1D1D1F] text-white' 
                                                : 'text-[#A7A5A5] hover:bg-gray-100'
                                            }
                                        `}
                                        onClick={() => toggleItem(item.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={`accordion-color-body-${item.id}`}
                                    >
                                        <h5 className={`text-xl md:text-md ${MANIFEST_REGULAR}`}>
                                            {item.question}
                                        </h5>
                                        
                                        {/* Icon (Simulated Font Awesome fa-circle-plus/minus) */}
                                        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'text-white transform rotate-45' : 'text-[#A7A5A5]'}`}>
                                            {/* Using a simple plus sign to simulate the icon toggle */}
                                            {isOpen ? '✕' : '+'}
                                        </span>
                                    </button>
                                </h2>
                                
                                {/* Accordion Body/Content */}
                                <div 
                                    id={`accordion-color-body-${item.id}`} 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                                    aria-labelledby={`accordion-color-heading-${item.id}`}
                                >
                                    <div className="p-10 bg-white border-t border-gray-200">
                                        <p className={`text-gray-600 text-lg ${MANIFEST_REGULAR}`}>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;