import React from 'react';
import SendIcon from '../assets/icons/send.png'

const BookEditingSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., send data to an API
    console.log('Form submitted!');
  };

  return (
    <section className="bg-[#F9F9F9] xl:pt-32 pt-16 pb-10">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between lg:flex-row flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-x-20">
          
          {/* Left Content Area */}
          <div className="content w-full md:w-[40%] lg:w-[65%] mb-10 lg:mb-0">
            <h4 
              className="font-serif text-3xl lg:text-4xl xl:text-[64px] text-black" // Approximating 'luxury-regular' as 'font-serif' and 'textmarket' as black/default text
              style={{ lineHeight: '57px' }}
            >
              Your Book - The Art We - The Artists
            </h4>
            <p className="mt-6 text-[16px] text-[#8C8C8C] leading-6 font-sans">
              {/* Approximating 'manifest-regular' as 'font-sans' */}
              As book lovers and writers, we all know that no matter how often or how thoroughly an author
              edits and proofreads their written material, something will always need improvement or
              correction through a second expert perspective. We are that second expert
              perspective.
            </p>
          </div>
          
          {/* Right Form Area */}
          <div className="lg:w-11/12 w-full md:w-[50%] md:flex justify-center px-2 md:px-0 ">
            <div
              className="relative bg-[#212121] md:w-[90%] lg:w-[90%] xl:w-[80%] rounded-[27px] pb-6 py-5 px-5 md:px-5 lg:px-5 border-[#212121] border-solid border-2 w-full"
            >
              <form onSubmit={handleSubmit} 
                action="https://leads.infinityprojectmanager.com/brand/fawcettpublications/lead"
                method="GET"
              >
                {/* Hidden Inputs (Retained for lead tracking) */}
                <input type="hidden" name="brand_name" value="fawcettpublications.com" />
                <input type="hidden" id="lead_area" name="lead_area" value="https://fawcettpublications.com/book-editing/" />
                <input type="hidden" name="city" value="Karachi" />
                <input type="hidden" name="country" value="Pakistan" />
                <input type="hidden" name="ipaddress" value="119.73.104.6" />
                <input type="hidden" name="url" value="https://fawcettpublications.com/book-editing" />
                <input type="hidden" name="clickid" value="" />
                
                {/* Select Book Genre */}
                <select 
                  name="book-genre"
                  className="w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 font-serif text-[12px] sm:text-[16px] font-medium px-4 h-[60px] text-white placeholder:text-[#fff] appearance-none" // Added appearance-none for better cross-browser styling
                  aria-label="Select The Book Genre"
                >
                  <option value="" disabled selected>Select The Book Genre</option>
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
                
                {/* Select Editing Services */}
                <select 
                  name="type-service"
                  className="w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 font-serif text-[12px] sm:text-[16px] font-medium px-4 h-[60px] text-white placeholder:text-[#fff] appearance-none"
                  aria-label="Select The Type Of Editing Services"
                >
                  <option value="" disabled selected>Select The Type Of Editing Services</option>
                  <option value="Line Editing">Line Editing</option>
                  <option value="Developmental Editing">Developmental Editing</option>
                  <option value="Structural Editing">Structural Editing</option>
                  <option value="Copy Editing">Copy Editing</option>
                </select>
                
                {/* Select Manuscript Length */}
                <select 
                  name="page-length" 
                  aria-label="Select The Number Of Pages/Manuscript Length"
                  className="w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 font-serif text-[12px] sm:text-[16px] font-medium px-4 h-[60px] text-white placeholder:text-[#fff] appearance-none"
                >
                  <option value="" disabled selected>Select The Number Of Pages/Manuscript Length</option>
                  <option value="10-to-50">10 - 50</option>
                  <option value="51-to-100">51 - 100</option>
                  <option value="101-to-200">101 - 200</option>
                  <option value="201-to-300">201 - 300</option>
                  <option value="301-to-400">301 - 400</option>
                  <option value="401-to-500">401 - 500</option>
                </select>
                
                {/* Name and Phone Number Inputs */}
                <div className="md:flex md:space-x-4 lg:space-x-6 mt-4">
                  <div className="w-full md:w-1/2">
                    <input
                      className="w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0 font-serif text-base font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                      type="text" name="name" placeholder="Name" required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      className="w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0 font-serif text-base font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                      type="tel" name="number" placeholder="Phone No" required 
                    />
                  </div>
                </div>
                
                {/* Email Input */}
                <input
                  className="w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0 font-serif text-base font-medium px-4 h-[60px] text-white placeholder:text-[#fff]"
                  type="email" name="email" placeholder="Email Address" required
                />
                
                {/* Checkbox and Terms */}
                <div className="flex items-start my-2 checkbox-terms-main">
                  <input 
                    type="checkbox" 
                    name="recieve-updates" 
                    value="Recieve Updates"
                    id="recieveUpdates"
                    className="border border-[#E9E7E7] p-2 rounded mt-1 mr-2 cursor-pointer outline-none shadow-none focus:ring-0 text-gray-900 bg-gray-100" // Added more Tailwind classes for styling checkbox
                  />
                  <label 
                    htmlFor="recieveUpdates"
                    className="text-white text-[10px] leading-[19px] font-normal cursor-pointer font-sans text-opacity-70"
                  >
                    Please check the box to receive updates via SMS and email. By opting in, you agree
                    to our
                    <a href="https://fawcettpublications.com/privacy-policy" target="_blank"
                        className="text-blue-400 hover:text-white underline ml-1" rel="noopener noreferrer">Privacy Policy</a>
                    and
                    <a href="https://fawcettpublications.com/terms-conditions" target="_blank"
                        className="text-blue-400 hover:text-white underline ml-1" rel="noopener noreferrer">Terms &amp; Conditions</a>.
                    Standard carrier charges may apply for SMS. You can unsubscribe at any time by
                    replying with 'STOP' or 'UNSUBSCRIBE.
                  </label>
                </div>
                
                {/* Captcha Placeholder */}
                <div className="w-full">
                  <div className="form-group">
                    <p className="captcha_validation text-red-500 text-sm mb-2" style={{ display: 'none' }}>
                      <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Captcha Required
                    </p>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                  <button 
                    type="submit" 
                    id="bannerFormSubmit"
                    className="font-serif cursor-pointer flex justify-center items-center w-[60%] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl border-[#fff] border-solid border-2 hover:opacity-90"
                  >
                    <img
                      className="mr-3 w-5 h-5" 
                      src={SendIcon} 
                      alt="send icon"
                    /> 
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

export default BookEditingSection;