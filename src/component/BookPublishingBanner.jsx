import React, { useState } from 'react';
// Assuming the font classes like 'luxury-regular' and 'manifest-regular'
// are configured in your Tailwind setup or custom CSS.
// You might need to adjust the image imports based on your project structure.
import badge1 from '../assets/badge-1.png';
import badge2 from '../assets/badge-2.png';
import badge3 from '../assets/badge-3.png';
import sendIcon from '../assets/icons/send.png';

// Placeholder for a controlled Select Input
const SelectInput = ({ name, options, placeholder }) => (
  <select
    name={name}
    aria-label={`Select ${placeholder}`}
    className="w-full mb-4 bg-[#212121] border-b-2 border-solid border-white border-0 font-medium px-4 h-[60px] text-white placeholder:text-[#fff] luxury-regular text-sm sm:text-base outline-none appearance-none"
  >
    <option selected disabled className="text-[#BEBEBE]">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ))}
  </select>
);

// Placeholder for a controlled Text/Number Input
const TextInput = ({ name, type = 'text', placeholder, required = true }) => (
  <input
    className="w-full mb-4 bg-transparent border-b-2 border-solid border-white border-0 font-medium px-4 h-[60px] text-white placeholder:text-[#fff] luxury-regular text-base outline-none"
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
  />
);

const BookPublishingBanner = () => {
  // Simple state for the checkbox to manage its checked status
  const [recieveUpdates, setRecieveUpdates] = useState(false);

  // Form options from the original HTML
  const bookTypes = [
    "Business", "Biography", "Inspirational", "Non-Fiction", "How-To",
    "Autobiography/Memoir", "Self-Help", "Children", "Spiritual/Religious",
    "Fiction", "Art/Photography", "Cookbook", "Other"
  ];

  const manuscriptReadyOptions = [
    "Yes, I'm ready to publish today",
    "Yes, I'll be ready to publish in 1 to 3 months",
    "Yes, I'll be ready to publish in 3 to 6 months",
    "Yes, I’ll be ready to publish in 6 to 12 months",
    "No, I do not have a book or manuscript ready"
  ];

  const publishedBeforeOptions = ["Yes", "No"];

  const handleSubmit = (e) => {
    // You'd typically handle form data submission here,
    // possibly preventing default and sending an AJAX request.
    console.log("Form submitted. Replace this with actual submission logic.");
  };

  return (
    <section className="bg-[#F9F9F9] pt-14 pb-10">
      <div className="publishing_banner">
        <div className="flex items-center justify-between md:flex-row flex-col px-2 max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="content w-full md:w-[50%] pl-0 lg:pl-[3rem] md:pl-[1rem]  pr-2">
            <h4 className="luxury-regular text-4xl lg:text-6xl md:text-5xl xl:text-7xl leading-tight text-black">
              Why's That Manuscript Still Not Published?
            </h4>
            <p className="manifest-regular mt-6 text-lg text-[#BEBEBE] leading-6">
              Hard work can never go to waste when you have publishing experts like us to count on! We will ensure your genius gets the care it needs to pop off worldwide!
            </p>
            <ul className="flex items-center md:space-x-10 space-x-4 my-10">
              <li><img src={badge1} alt="badge" className="md:w-24 w-18" /></li>
              <li><img src={badge2} alt="badge" className="md:w-24 w-18" /></li>
              <li><img src={badge3} alt="badge" className="md:w-24 w-18" /></li>
            </ul>
            <a href="#calendly" 
              className="luxury-regular mt-10 flex justify-center items-center md:w-[320px] w-[230px] ease-in duration-300 bg-gradient-to-t from-[#EB420A] to-[#FB7A4F] rounded-full py-2 md:py-3 text-white text-lg md:text-xl hover:scale-105 transition-transform shadow-lg"
              // The original HTML had a box shadow class 'bx_sh'
            >
              <i className="fa-solid fa-phone-volume px-3"></i>
              Make A Discovery Call
            </a>
          </div>

          {/* Form Section */}
          <div className="pt-12 md:pt-0 w-full md:w-[50%] flex justify-center">
            <div className="relative bg-[#212121] z-100 md:w-[90%] lg:w-[90%] xl:w-[70%] rounded-[27px] pb-6 py-5 px-5 md:px-5 lg:px-5 border-[#212121] border-solid border-2 shadow-2xl">
              {/* NOTE: Replaced the original form action with a local handleSubmit function */}
              <form onSubmit={handleSubmit} method="GET">
                {/* Hidden Inputs (as per original HTML, you'd need to handle logic for these) */}
                <input type="hidden" name="brand_name" value="fawcettpublications.com" />
                <input type="hidden" id="lead_area" name="lead_area" value="https://fawcettpublications.com/book-publishing/" />
                <input type="hidden" name="city" id="city" />
                <input type="hidden" name="country" id="country" />
                <input type="hidden" name="ip" id="ip" />
                <input type="hidden" name="zip_code" id="zip_code" />

                {/* Select Inputs */}
                <SelectInput
                  name="plan-on-publishing"
                  options={bookTypes}
                  placeholder="What type of book do you plan on publishing?"
                />

                <SelectInput
                  name="manuscript-ready"
                  options={manuscriptReadyOptions}
                  placeholder="Do you have a manuscript ready?"
                />

                <SelectInput
                  name="published-before"
                  options={publishedBeforeOptions}
                  placeholder="Have you published before?"
                />

                {/* Name and Phone */}
                <div className="md:flex md:space-x-4 lg:space-x-6 mt-4">
                  <div className="w-full md:w-1/2">
                    <TextInput name="name" placeholder="Name" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <TextInput name="number" type="tel" placeholder="Phone No" />
                  </div>
                </div>

                {/* Email */}
                <TextInput name="email" type="email" placeholder="Email Address" />

                {/* Checkbox and Terms */}
                <div className="flex items-start my-2 checkbox-terms-main">
                  <input
                    type="checkbox"
                    name="recieve-updates"
                    value="Recieve Updates"
                    id="recieveUpdates"
                    checked={recieveUpdates}
                    onChange={(e) => setRecieveUpdates(e.target.checked)}
                    className="border border-[#E9E7E7] p-2 rounded mt-1 mr-2 cursor-pointer outline-none shadow-none text-[#FB7A4F] bg-[#212121] checked:bg-[#FB7A4F] focus:ring-offset-0"
                  />
                  <label htmlFor="recieveUpdates"
                    className="text-white text-[10px] leading-[19px] font-normal cursor-pointer manifest-regular text-opacity-70">
                    Please check the box to receive updates via SMS and email. By opting in, you agree to our
                    <a href="https://fawcettpublications.com/privacy-policy" target="_blank" rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white ml-1 mr-1">Privacy Policy</a>
                    and
                    <a href="https://fawcettpublications.com/terms-conditions" target="_blank" rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white ml-1">Terms &amp; Conditions</a>.
                    Standard carrier charges may apply for SMS. You can unsubscribe at any time by replying with 'STOP' or 'UNSUBSCRIBE.
                  </label>
                </div>

                {/* Captcha Placeholder */}
                <div className="mt-4">
                  <p className="captcha_validation text-red-500 text-sm mb-2" style={{ display: 'none' }}>
                    <i className="fa fa-exclamation-triangle mr-1" aria-hidden="true"></i> Captcha Required
                  </p>
                  {/* Replaced 'sbx-g-recaptcha' with a simple placeholder */}
                  <div id="RecaptchaField4" className="h-10 w-full bg-gray-700 flex items-center justify-center text-white text-xs rounded">
                    [reCAPTCHA Placeholder]
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                  <button type="submit" id="bannerFormSubmit"
                    className="header-btn cursor-pointer luxury-regular flex justify-center items-center w-[60%] ease-in duration-300 bg-gradient-to-t from-[#EB420C] to-[#FB7A4F] rounded-full xl:py-4 py-2 text-white text-xl lg:text-2xl border-[#fff] border-solid border-2 hover:scale-[1.02] transition-transform">
                    <img className="mr-3 w-6 h-6" src={sendIcon} alt="Send icon" />
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

export default BookPublishingBanner;