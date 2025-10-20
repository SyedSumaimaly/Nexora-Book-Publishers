import React from 'react';
import logo from '../assets/logo-2.png'

 // --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-[#1D1D1F] py-10 px-4 lg:px-2 relative overflow-hidden">
            <div className="mx-auto container max-w-7xl">

                {/* --- Top Section: Logo & Newsletter --- */}
                <div className="flex flex-wrap justify-start md:justify-between items-end pb-14 border-b border-[#C1C1C1]/20 mb-8">

                    {/* Logo */}
                    <div className="mb-8 md:mb-0 w-1/3 lg:w-auto">
                        {/* Placeholder for logo */}
                        <img
                            src={logo}
                            className="w-[170px] object-contain"
                            alt="Nexora Book Publishers Logo"
                        />
                    </div>

                    {/* Newsletter / Stay Informed */}
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <h2 className="text-3xl text-white font-serif mb-2">Stay Informed!</h2>
                        <p className="text-gray-400 mb-4 text-sm">
                            Subscribe to our newsletter for expert insights and the latest industry updates.
                        </p>

                        {/* Form */}
                        <form
                            action="https://leads.infinityprojectmanager.com/brand/fawcettpublications/lead"
                            method="GET"
                            className="flex"
                        >
                            <input name="brand_name" type="hidden" value="nexorabookpublishers.com" />
                            <input name="modal_form" type="hidden" value="https://nexorabookpublishers.com/" />

                            <div className="flex w-full">
                                <input
                                    type="email"
                                    className="flex-grow px-4 py-3 text-sm text-gray-900 bg-white rounded-l-md focus:ring-red-600 focus:border-red-600 border-none outline-none"
                                    placeholder="Enter your email"
                                    required
                                />
                                <button
                                    className="bg-red-600 text-white font-medium px-6 py-3 rounded-r-md hover:bg-red-700 transition duration-150 text-sm flex-shrink-0"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* --- Middle Section: Address, Phone, Socials, Contact --- */}
                <div className="flex justify-start md:justify-between items-start flex-wrap">

                    {/* Group: Address, Phone, Socials */}
                    <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0 w-full lg:w-3/5">

                        {/* Address */}
                        <div className="w-full lg:w-1/4">
                            <h2 className="text-xl text-white font-medium mb-3">Address</h2>
                            <p className="text-sm text-gray-400 leading-relaxed text-balance">
                                <b className="text-[#eb4209]">Regional Office:</b> 1760 n ridge rd apt 7103 mckinney tx 75071
                            </p>
                            <p className="text-sm text-gray-400 pt-3 leading-relaxed text-balance">
                                <b className="text-[#eb4209]">Regional Office:</b> 7901 4th St N Ste 29006 St. Petersburg, FL 33702
                            </p>
                        </div>

                        {/* Phone Number */}
                        <div className="w-full lg:w-1/4">
                            <h2 className="text-xl text-white font-medium mb-3">Phone Number</h2>
                            <a
                                href="callto:+1-(972) 301-7543"
                                className="text-sm text-white hover:text-gray-400 transition-colors underline-offset-4"
                            >
                                +1-(972) 301-7543
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="w-full lg:w-auto">
                            <h2 className="text-xl text-white font-medium mb-3">Socials</h2>
                            <div className="flex space-x-4">
                                {/* Facebook Placeholder SVG */}
                                <a href="#" target="_blank" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.083h2.616l.384-3.917h-3l.002-1.977c0-1.018.156-1.523 1.523-1.523h1.474v-3.486c-.266-.027-.887-.091-2.544-.091-2.733 0-4.08 1.439-4.08 4.394v2.583h-2v3.917h2v8.083z" /></svg>
                                </a>
                                {/* Instagram Placeholder SVG */}
                                <a href="# " target="_blank" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.772 1.677 4.924 4.924.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.25-1.677 4.772-4.924 4.924-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.148-4.77-1.677-4.924-4.924-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.25 1.677-4.77 4.924-4.924 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.204-6.793 2.639-7.006 7.006-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.204 4.357 2.64 6.792 7.006 7.006 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.354-.204 6.786-2.636 7.006-7.006.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.206-4.356-2.638-6.792-7.006-7.006-1.28-.058-1.688-.072-4.947-.072zM12 7.378c-2.51 0-4.551 2.041-4.551 4.55s2.041 4.551 4.551 4.551 4.551-2.041 4.551-4.551-2.041-4.55-4.551-4.55zm0 7.378c-1.554 0-2.827-1.273-2.827-2.827s1.273-2.827 2.827-2.827 2.827 1.273 2.827 2.827-1.273 2.827-2.827 2.827zm6.406-11.845c-.687 0-1.242.556-1.242 1.242s.555 1.242 1.242 1.242 1.242-.556 1.242-1.242-.555-1.242-1.242-1.242z" /></svg>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Contact Links (Right side) */}
                    <div className="flex flex-col pt-8 lg:pt-0 space-y-2 text-white text-lg font-serif">
                        <a href="/contact-us.html" className="text-base hover:text-gray-400 transition-colors">Contact</a>
                    </div>
                </div>

                <hr className="w-full mt-4 lg:hidden h-px bg-[#C1C1C1]/20 border-0" /> {/* Separator for mobile view */}

                {/* --- Bottom Section: Service Links & Let's Talk Email --- */}
                <div className="flex justify-between items-end mt-8 flex-wrap">

                    {/* Service Links (Left side - Multi-column list) */}
                    <div className="w-full lg:w-3/5 order-2 lg:order-1 pt-8 lg:pt-0">
                        <ul className="columns-1 md:columns-2 xl:columns-3 space-y-2 text-sm font-serif">
                            <li className="break-inside-avoid"><a href="/book-editing.html" className="text-white hover:text-gray-400 transition-colors">Book Editing</a></li>
                            <li className="break-inside-avoid"><a href="/book-publishing.html" className="text-white hover:text-gray-400 transition-colors">Book Publishing</a></li>
                            <li className="break-inside-avoid"><a href="/book-marketing.html" className="text-white hover:text-gray-400 transition-colors">Book Marketing</a></li>
                            <li className="break-inside-avoid"><a href="/cover-design.html" className="text-white hover:text-gray-400 transition-colors">Cover Design</a></li>
                            <li className="break-inside-avoid"><a href="/screenplay.html" className="text-white hover:text-gray-400 transition-colors">Screen play</a></li>
                            <li className="break-inside-avoid"><a href="/book-coaching.html" className="text-white hover:text-gray-400 transition-colors">Book Coaching</a></li>
                            <li className="break-inside-avoid"><a href="/business-and-leadership-book.html" className="text-white hover:text-gray-400 transition-colors">Business And Leadership Book</a></li>
                            <li className="break-inside-avoid"><a href="/review-consultation-services.html" className="text-white hover:text-gray-400 transition-colors">Review Consultation Services</a></li>
                            <li className="break-inside-avoid"><a href="/interior-black-and-white-Illustration.html" className="text-white hover:text-gray-400 transition-colors">Interior Black & White Illustration</a></li>
                            <li className="break-inside-avoid"><a href="/developmental-editing.html" className="text-white hover:text-gray-400 transition-colors">Developmental Editing</a></li>
                            <li className="break-inside-avoid"><a href="/cover-copy-polish.html" className="text-white hover:text-gray-400 transition-colors">Cover Copy Polish</a></li>
                            <li className="break-inside-avoid"><a href="/editorial-assessment.html" className="text-white hover:text-gray-400 transition-colors">Editorial Assesments</a></li>
                            <li className="break-inside-avoid"><a href="/small-book-review-editing.html" className="text-white hover:text-gray-400 transition-colors">Small Book Review</a></li>
                            <li className="break-inside-avoid"><a href="/copyediting.html" className="text-white hover:text-gray-400 transition-colors">Copy Editing</a></li>
                            <li className="break-inside-avoid"><a href="/line-editing.html" className="text-white hover:text-gray-400 transition-colors">Line Editing</a></li>
                            <li className="break-inside-avoid"><a href="/content-editing.html" className="text-white hover:text-gray-400 transition-colors">Content Editing</a></li>
                            <li className="break-inside-avoid"><a href="/starter.html" className="text-white hover:text-gray-400 transition-colors">Starter</a></li>
                            <li className="break-inside-avoid"><a href="/essential.html" className="text-white hover:text-gray-400 transition-colors">Essential</a></li>
                            <li className="break-inside-avoid"><a href="/plus.html" className="text-white hover:text-gray-400 transition-colors">Plus</a></li>
                            <li className="break-inside-avoid"><a href="/elemental.html" className="text-white hover:text-gray-400 transition-colors">Elemental</a></li>
                            <li className="break-inside-avoid"><a href="/professional-audiobook-package.html" className="text-white hover:text-gray-400 transition-colors">Professional Audiobook</a></li>
                            <li className="break-inside-avoid"><a href="/softcover-publishing.html" className="text-white hover:text-gray-400 transition-colors">Softcover</a></li>
                            <li className="break-inside-avoid"><a href="/color-hardcover-add-on.html" className="text-white hover:text-gray-400 transition-colors">Hardcover Add-On</a></li>
                            <li className="break-inside-avoid"><a href="/publicity-campaigns.html" className="text-white hover:text-gray-400 transition-colors">Publicity Campaigns</a></li>
                            <li className="break-inside-avoid"><a href="/publicity-services.html" className="text-white hover:text-gray-400 transition-colors">Publicity</a></li>
                            <li className="break-inside-avoid"><a href="/internet-marketing.html" className="text-white hover:text-gray-400 transition-colors">Internet Marketing</a></li>
                            <li className="break-inside-avoid"><a href="/interior-color-Illustration.html" className="text-white hover:text-gray-400 transition-colors">Interior Color Illustration</a></li>
                            <li className="break-inside-avoid"><a href="/interior-page-layout.html" className="text-white hover:text-gray-400 transition-colors">Interior Page Layout</a></li>
                        </ul>
                    </div>

                    {/* Let's Talk Email (Right side) */}
                    {/* <div className="w-full lg:w-auto text-start lg:text-end order-1 lg:order-2">
                <h1 className="text-5xl lg:text-[54px] pb-2 text-white font-serif">Let's Talk</h1>
                <a 
                  href="mailto:info@nexorabookpublishers.com" 
                  className="text-[#767677] text-xl lg:text-[30px] underline hover:text-[#767677]/70 cursor-pointer transition-colors"
                >
                  info@nexorabookpublishers.com
                </a>
              </div> */}
                </div>

                {/* The complex absolute line structure was removed for simplicity and stability in a Tailwind/React environment. */}

            </div>
        </footer>
    );
};

export default Footer;
