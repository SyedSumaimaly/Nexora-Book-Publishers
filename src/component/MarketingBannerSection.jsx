import React, { useEffect } from 'react';
import Badge1 from '../assets/award-one.png';
import Badge2 from '../assets/award-two.png';
import Badge3 from '../assets/award-three.png';
import SendIcon from '../assets/icons/send.png'

// Utility classes to simulate custom fonts
const LUXURY_REGULAR = 'font-serif font-bold tracking-tight'; 
const MANIFEST_REGULAR = 'font-sans font-light'; 

const MarketingBannerSection = () => {
    // Note: In a real React application, you would handle form submission
    // and form field state (e.g., city, country, ip, zip_code) using useState/useEffect 
    // and client-side logic, not relying on hidden inputs populated by external scripts 
    // as suggested by the original HTML. We'll include the hidden inputs for structural 
    // fidelity to the original HTML form action/method, but their functionality will be inert here.

    return (
        <section className="bg-[#F9F9F9] pt-20 pb-20 px-2">
            <div className="container mx-auto marketing_banner">
                <div className="flex items-center justify-between lg:flex-row flex-col">
                    
                    {/* ========== Left Content (Text and Badges) ========== */}
                    <div className="content w-full lg:w-[45%] lg:pr-10" data-cursor="-opaque -mb -color-white">
                        <h4 className={`${LUXURY_REGULAR} text-4xl md:text-6xl lg:text-5xl xl:text-7xl leading-tight text-gray-900`}>
                            Book Writing Wizards - Your Ideas, Our Words
                        </h4>
                        <p className={`${MANIFEST_REGULAR} mt-6 text-sm text-[#BEBEBE] leading-6`}>
                            Partner up with our talented word smiths who specialize in taking your genius and converting it into entertaining and top-selling reading experiences.
                        </p>
                        
                        {/* Trust Badges */}
                        <ul className="flex items-center space-x-10 my-10">
                            <li><img src={Badge1} alt="Trusted badge 1" className="w-24" /></li>
                            <li><img src={Badge2} alt="Trusted badge 2" className="w-24" /></li>
                            <li><img src={Badge3} alt="Trusted badge 3" className="w-24" /></li>
                        </ul>
                    </div>

                    {/* ========== Right Content (Form) ========== */}
                    <div className="images w-full lg:w-[55%] flex justify-center mt-10 lg:mt-0">
                        <div
                            className="relative bg-[#212121] z-100 md:w-[90%] lg:w-[90%] xl:w-[80%] rounded-[27px] pb-6 py-5 px-5 md:px-5 lg:px-5 border-[#212121] border-solid border-2"
                        >
                            <form action="https://leads.infinityprojectmanager.com/brand/fawcettpublications/lead" method="GET">
                                
                                {/* Hidden Inputs (for lead tracking) */}
                                <input type="hidden" name="brand_name" value="fawcettpublications.com" />
                                <input type="hidden" id="lead_area" name="lead_area" value="https://fawcettpublications.com//book-writing" />
                                <input type="hidden" name="city" id="city" />
                                <input type="hidden" name="country" id="country" />
                                <input type="hidden" name="ip" id="ip" />
                                <input type="hidden" name="zip_code" id="zip_code" />

                                {/* Book Type Select */}
                                <select 
                                    name="plan-on-writing" 
                                    aria-label="What type of book do you plan on writing?"
                                    className={`
                                        w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 
                                        ${LUXURY_REGULAR} text-sm sm:text-base font-medium px-4 h-[60px] text-white 
                                        focus:ring-0 focus:border-white appearance-none
                                    `}
                                >
                                    <option value="" disabled>What type of book do you plan on writing?</option>
                                    <option value="Business">Business</option>
                                    <option value="Biography">Biography</option>
                                    <option value="Inspirational">Inspirational</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="How-To">How-To</option>
                                    <option value="Autobiography/Memoir">Autobiography/Memoir</option>
                                    <option value="Self-Help">Self-Help</option>
                                    <option value="Children">Children</option>
                                    <option value="Spiritual/Religious">Spiritual/Religious</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Art/Photography">Art/Photography</option>
                                    <option value="Cookbook">Cookbook</option>
                                    <option value="Other">Other</option>
                                </select>
                                
                                {/* Outline Ready Select - Fixed broken HTML classes/attributes */}
                                <select 
                                    name="outline-ready"
                                    aria-label="Do you have an outline ready?"
                                    className={`
                                        w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 
                                        ${LUXURY_REGULAR} text-sm sm:text-base font-medium px-4 h-[60px] text-white 
                                        focus:ring-0 focus:border-white appearance-none
                                    `}
                                >
                                    <option value="" disabled>Do you have an outline ready?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                
                                {/* Name and Phone Number */}
                                <div className="md:flex md:space-x-4 lg:space-x-6 mt-4">
                                    <div className="w-full md:w-1/2">
                                        <input 
                                            className={`
                                                w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0
                                                ${LUXURY_REGULAR} text-base font-medium px-4 h-[60px] text-white
                                                placeholder:text-white placeholder:text-opacity-80 focus:ring-0 focus:border-white
                                            `} 
                                            type="text" 
                                            name="name" 
                                            placeholder="Name" 
                                            required 
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <input 
                                            className={`
                                                w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0
                                                ${LUXURY_REGULAR} text-base font-medium px-4 h-[60px] text-white
                                                placeholder:text-white placeholder:text-opacity-80 focus:ring-0 focus:border-white
                                            `} 
                                            type="tel" // Changed to 'tel' for better mobile UX
                                            name="number" 
                                            placeholder="Phone No" 
                                            required 
                                        />
                                    </div>
                                </div>
                                
                                {/* Email Address */}
                                <input 
                                    className={`
                                        w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0
                                        ${LUXURY_REGULAR} text-base font-medium px-4 h-[60px] text-white
                                        placeholder:text-white placeholder:text-opacity-80 focus:ring-0 focus:border-white
                                    `} 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email Address" 
                                    required 
                                />
                                
                                {/* Query/Message Area */}
                                <textarea 
                                    name="message" 
                                    placeholder="Query" 
                                    className={`
                                        w-full mb-4 pt-4 bg-transparent border-b-2 border-solid border-white border-0
                                        ${LUXURY_REGULAR} text-base font-medium px-4 h-[140px] text-white
                                        placeholder:text-white placeholder:text-opacity-80 focus:ring-0 focus:border-white resize-none
                                    `}
                                ></textarea>
                                
                                {/* Checkbox and Terms */}
                                <div className="flex items-start my-2 checkbox-terms-main">
                                    <input 
                                        type="checkbox" 
                                        name="recieve-updates" 
                                        value="Recieve Updates" 
                                        id="recieveUpdates" 
                                        className="border border-[#E9E7E7] p-2 rounded mt-1 mr-2 cursor-pointer outline-none shadow-none text-white bg-transparent" 
                                    />
                                    <label htmlFor="recieveUpdates" className={`text-white text-[10px] leading-[19px] font-normal cursor-pointer ${MANIFEST_REGULAR} text-opacity-70`}>
                                        Please check the box to receive updates via SMS and email. By opting in, you agree to our 
                                        <a href="https://fawcettpublications.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white underline ml-1">Privacy Policy</a> 
                                        and 
                                        <a href="https://fawcettpublications.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white underline mx-1">Terms &amp; Conditions</a>. 
                                        Standard carrier charges may apply for SMS. You can unsubscribe at any time by replying with 'STOP' or 'UNSUBSCRIBE'.
                                    </label>
                                </div>

                                {/* Captcha Placeholder */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="form-group">
                                        <p className="captcha_validation text-red-500 text-sm mt-2" style={{ display: 'none' }}>
                                            <i className="fa fa-exclamation-triangle mr-1" aria-hidden="true"></i> Captcha Required
                                        </p>
                                        <div className="sbx-g-recaptcha bg-gray-700 h-10 my-4 flex items-center justify-center text-white text-xs rounded" id="RecaptchaField1">
                                            Recaptcha Placeholder
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Submit Button */}
                                <div className="flex justify-center mt-6">
                                    <button 
                                        type="submit" 
                                        id="bannerFormSubmit" 
                                        className={`
                                            header-btn ${LUXURY_REGULAR} flex justify-center items-center w-[60%] ease-in duration-300 
                                            bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-3 text-white 
                                            text-xl lg:text-2xl border-white border-solid border-2 hover:opacity-90
                                        `}
                                    >
                                        <img className="mr-3 w-5 h-5" src={SendIcon} alt="Send icon" /> 
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingBannerSection;