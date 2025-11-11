import React, { useState } from 'react';

const API_ENDPOINT = 'http://localhost:5000/submit-form';
const POPUP_BG_IMAGE = '../assets/popup.png'; 


const ContactModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('Submitting form...');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        if (typeof data.message === 'string') {
             data.message = data.message.trim();
        }

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatusMessage('Success! Your request has been sent to our team.');
                setTimeout(() => {
                    onClose(); 
                    setStatusMessage('');
                }, 2000); 
            } else {
                setStatusMessage(result.message || 'Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatusMessage('An unexpected error occurred. Check the console.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div 
            id="static-modal" 
            data-modal-backdrop="static" 
            tabIndex="-1" 
            aria-hidden={!isOpen}
            // Overlay and Modal Positioning
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-white bg-opacity-75 overflow-y-auto overflow-x-hidden p-4 sm:p-8"
        >
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl"> 
                {/* Modal content container */}
                <div
                    className="relative rounded-xl shadow-2xl w-full pt-[80px] sm:pt-[125px] pb-6 px-4 sm:px-[46px] h-auto mx-auto border-4 border-white backdrop-blur-sm"
                    style={{ 
                        backgroundImage: `url(${POPUP_BG_IMAGE})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        maxWidth: '685px' 
                    }}
                >
                    {/* Close Button */}
                    <div className="absolute top-0 right-0 mt-8 mr-8 sm:mt-12 sm:mr-12"> 
                        <button 
                            type="button"
                            onClick={onClose} 
                            className="bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full w-8 h-8 flex justify-center items-center text-white transition-transform hover:scale-110 shadow-lg"
                            aria-label="Close modal"
                        >
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    {/* Modal body (form) */}
                    <div className="p-4 space-y-4">
                        <form onSubmit={handleSubmit}>
                            {/* Hidden Fields (for lead tracking) */}
                            <input type="hidden" name="brand_name" value="nexorabookpublishers.com" />
                            <input type="hidden" name="lead_area" value="https://nexorabookpublishers.com/" />
                            <input type="hidden" name="city" value="Karachi" />
                            <input type="hidden" name="country" value="Pakistan" />
                            <input type="hidden" name="ipaddress" value="119.73.97.158" />
                            <input type="hidden" name="url" value="https://nexorabookpublishers.com/" />
                            <input type="hidden" name="clickid" value="" />

                            <h4
                                className="luxury-regular text-[#000] lg:text-5xl md:text-4xl text-3xl flex items-center justify-center text-balance font-extrabold">
                                Get in touch
                            </h4>
                            <p
                                className="manifest-regular text-md w-full text-center mx-auto text-balance text-lg text-[#8F8F8F] my-4">
                                To schedule a consultation, please send us your details.
                            </p>
                            
                            {/* Form Fields */}
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                                <input type="text" placeholder="Enter Your Name *" required name="name"
                                    className="w-full border-none rounded-full py-4 px-5 bg-[#2c4e8524] text-base focus:ring-2 focus:ring-[#FB7A4F]" />
                                <input type="email" placeholder="Enter Your Email *" required name="email"
                                    className="w-full border-none rounded-full py-4 px-5 bg-[#2c4e8524] text-base focus:ring-2 focus:ring-[#FB7A4F]" />
                            </div>
                            <div>
                                <input type="text" placeholder="Enter Phone Number *" required name="number"
                                    className="w-full border-none rounded-full py-4 px-5 my-4 bg-[#2c4e8524] text-base focus:ring-2 focus:ring-[#FB7A4F]" />
                            </div>
                            <div>
                                <textarea id="message-area" placeholder="Write a message" name="message" required
                                    className="w-full border-none rounded-2xl py-4 px-5 bg-[#2c4e8524] text-base min-h-[120px] focus:ring-2 focus:ring-[#FB7A4F]">
                                </textarea>
                            </div>
                            
                            {/* Status Message */}
                            {statusMessage && (
                                <p className={`text-center mt-3 text-sm font-semibold ${statusMessage.includes('Success') ? 'text-green-600' : 'text-red-500'}`}>
                                    {statusMessage}
                                </p>
                            )}
                            
                            {/* Submit Button */}
                            <div>
                                <button type="submit"
                                    disabled={isSubmitting}
                                    className="luxury-regular flex justify-center items-center w-full bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-3 py-2 text-white text-xl lg:text-2xl mt-3 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl">
                                    {isSubmitting ? 'Sending...' : 'Submit Now'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;