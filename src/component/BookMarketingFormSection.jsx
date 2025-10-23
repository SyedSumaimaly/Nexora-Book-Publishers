import React from 'react';
import SendIcon from '../assets/icons/send.png'

const BookMarketingFormSection = () => {
  
    const handleSubmit = (e) => {
       
        e.preventDefault();
        
        console.log('Form Submitted (simulated)');
        
    };

    return (
        <section className="bg-[#F9F9F9] md:pt-14 pt-10 pb-10 px-2">
            <div className="container m-auto marketing_banner ">
                <div className="flex items-center justify-between md:flex-row flex-col">
                    {/* Content Section */}
                    <div className="content w-full md:w-[45%]" data-cursor="-opaque -mb -color-white">
                        <h4 className="luxury-regular lg:text-6xl xl:text-8xl text-4xl leading-tight textmarket">
                            Ready to Meet Your Readers?
                        </h4>
                        <p className="manifest-regular md:mt-6 mt-2 text-lg text-[#BEBEBE] leading-6">
                            Trust the book marketing wizards to do their magic and ensure your hard work lands in the right
                            hands! It's time your book met the right audience.
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-1/2 md:flex justify-center px-2 md:px-0 ">
                        <div
                            className="relative bg-[#212121] z-100 md:w-[90%] lg:w-[90%] xl:w-[80%] rounded-[27px] py-5 px-5 md:px-5 lg:px-5 border-[#212121] border-solid border-2"
                        >
                            <form 
                                action="https://leads.infinityprojectmanager.com/brand/fawcettpublications/lead"
                                method="GET"
                                onSubmit={handleSubmit} // Using onSubmit in React
                            >
                                {/* Hidden Inputs */}
                                <input type="hidden" name="brand_name" value="fawcettpublications.com" />
                                <input type="hidden" id="lead_area" name="lead_area"
                                    value="https://fawcettpublications.com/book-marketing/" />
                                <input type="hidden" name="city" id="city" />
                                <input type="hidden" name="country" id="country" />
                                <input type="hidden" name="ip" id="ip" />
                                <input type="hidden" name="zip_code" id="zip_code" />

                                {/* Select: Book Type */}
                                <select name="plan-on-marketing" aria-label="Default select example"
                                    className="w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 luxury-regular text-[12px] sm:text-[16px] font-medium px-4 h-[60px] text-white placeholder:text-[#fff]">
                                    <option value="" selected disabled>What type of book do you plan on marketing?</option>
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

                                {/* Select: Already Published */}
                                <select name="ready-published"
                                    className="w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 luxury-regular text-[12px] sm:text-[16px] font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                                    aria-label=" Default select example">
                                    <option value="" selected disabled>Is your Book already published?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No,">No</option>
                                </select>

                                {/* Select: Marketing Before */}
                                <select name="marketing-before"
                                    className="w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 luxury-regular text-[12px] sm:text-[16px] font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                                    aria-label="Default select example">
                                    <option value="" selected disabled>Have you avail book marketing services before?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                                {/* Name and Phone Inputs */}
                                <div className="md:flex md:space-x-4 lg:space-x-6 mt-4">
                                    <div className="w-full md:w-1/2">
                                        <input
                                            className="w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0 luxury-regular text-base font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                                            type="text" name="name" placeholder="Name" required />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <input
                                            className="w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0 luxury-regular text-base font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                                            type="number" name="number" placeholder="Phone No" required />
                                    </div>
                                </div>
                                
                                {/* Email Input */}
                                <input
                                    className="w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0 luxury-regular text-base font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                                    type="email" name="email" placeholder="Email Address" required />

                                {/* Checkbox and Terms */}
                                <div className="flex items-start my-2 checkbox-terms-main">
                                    <input type="checkbox" name="recieve-updates" value="Recieve Updates"
                                        id="recieveUpdates"
                                        className="border border-[#E9E7E7] p-2 rounded mt-1 mr-2 cursor-pointer outline-none shadow-none" />
                                    <label htmlFor="recieveUpdates"
                                        className="text-white text-[10px] leading-[19px] font-normal cursor-pointer manifest-regular text-opacity-70">
                                        Please check the box to receive updates via SMS and email. By opting in, you agree
                                        to our
                                        <a href="https://fawcettpublications.com/privacy-policy" target="_blank"
                                            className="text-blue-600 hover:text-white" rel="noopener noreferrer">Privacy Policy</a>
                                        and
                                        <a href="https://fawcettpublications.com/terms-conditions" target="_blank"
                                            className="text-blue-600 hover:text-white" rel="noopener noreferrer">Terms &amp; Conditions</a>.
                                        Standard carrier charges may apply for SMS. You can unsubscribe at any time by
                                        replying with 'STOP' or 'UNSUBSCRIBE.
                                    </label>
                                </div>
                                
                                {/* Captcha Placeholder */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="form-group">
                                        <p className="captcha_validation" style={{ display: 'none' }}><i
                                                className="fa fa-exclamation-triangle" aria-hidden="true"></i> Captcha Required
                                        </p>
                                        {/* This div likely requires external script/component integration for reCAPTCHA */}
                                        <div className="sbx-g-recaptcha" id="RecaptchaField3"></div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center ">
                                    <button type="submit" id="bannerFormSubmit"
                                        className="header-btn cursor-pointer luxury-regular flex justify-center items-center w-[60%] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl border-[#fff] border-solid border-2">
                                        {/* Image source needs to be managed in a React project (e.g., imported or from public folder) */}
                                        {/* Assuming 'send.png' is accessible or replaced with an icon component */}
                                        <img className="mr-3 " src={SendIcon} alt="Send icon" /> Send
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

export default BookMarketingFormSection;