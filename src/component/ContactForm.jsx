import React, { useState } from 'react';

const ContactForm = () => {
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the formData to an API endpoint
        console.log('Form Submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        // Reset form (optional)
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const inputClasses = "w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB4209] focus:border-[#EB4209] manifest-regular text-[#1D1D1F] placeholder-gray-500";
    const labelClasses = "block text-sm font-medium text-[#1D1D1F] manifest-regular mb-2";

    return (
        <section className="bg-[#F9F9F9] w-full py-10">
            <div className="mx-auto container px-4 max-w-4xl">
                
                {/* Section Title */}
                <h1 className="md:text-[64px] text-[44px] md:text-start text-center luxury-regular text-[#1D1D1F] mb-12">
                    Get In Touch
                </h1>
                
                {/* Contact Form Container */}
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 shadow-xl rounded-xl border border-gray-100">
                    
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className={labelClasses}>Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={inputClasses}
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className={labelClasses}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={inputClasses}
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label htmlFor="subject" className={labelClasses}>Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className={inputClasses}
                            placeholder="I have a question about publishing..."
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className={labelClasses}>Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={`${inputClasses} resize-none`}
                            placeholder="How can we help you?"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="
                            w-full 
                            bg-[#EB4209] 
                            text-white 
                            text-[20px] 
                            manifest-regular 
                            font-medium 
                            py-3 
                            px-8 
                            rounded-lg 
                            transition-colors 
                            duration-300 
                            hover:bg-[#E33501] 
                            focus:outline-none focus:ring-4 focus:ring-[#EB4209]/50
                        "
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;