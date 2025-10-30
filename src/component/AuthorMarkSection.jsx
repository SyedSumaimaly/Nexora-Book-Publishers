import React from 'react';

import messageIcon from '../assets/message.png';
import howPublishImage from '../assets/how-publish.png';

const AuthorMarkSection = () => {

  const handleDiscussClick = () => {
    // This function can be used to open the modal or set a state for the modal
    // The original HTML used 'data-modal-target' and 'data-modal-toggle'
    // which are typically for libraries like Flowbite or Bootstrap.
    console.log("Let's Discuss button clicked. Triggering modal/form.");

    // The original HTML also had a setButtonURL() function, 
    // which you would define separately.
    // window.setButtonURL(); 
  };

  return (
    <section className="bg-[#F9F9F9] py-3 md:py-6 px-2 lg:px-5 md:px-5">
      <div className="container mx-auto max-w-7xl marketing_about">
        <div className="flex items-center justify-between md:flex-row flex-col">
          
          {/* Content Section */}
          <div className="content w-full md:w-1/2 pr-0 md:pr-24">
            <h4 className="luxury-regular text-4xl xl:text-6xl md:text-4xl leading-tight text-[#1D1D1F]">
              It's Time You Make Your
              <span className="block">Author's Mark</span>
            </h4>
            <p className="manifest-regular mt-6 text-sm text-[#BEBEBE] leading-6">
              You just finished writing the perfect ending to your perfect story and thought to yourself, 'Phew, now comes the easy part'. Does it really? Trust us, book publishing is one of the most daunting tasks of the entire author journey and if not done professionally and correctly could lead all your hard work down the drain. But we are not going to let that happen. Do you know why authors, especially fresh ones, love working with us? Transparency, reliability, affordability, and weekly updates. If your manuscript needs polishing and publishing, there isn't a better choice out there than **Nexora Book Publishers**!
            </p>
            
            <button 
              onClick={handleDiscussClick}
              className="luxury-regular cursor-pointer mt-20 flex justify-center items-center xl:w-[325px] w-[220px] ease-in duration-300 bg-gradient-to-t from-[#EB420A] to-[#FB7A4F] rounded-full py-2 xl:py-4 text-white xl:text-2xl text-lg hover:scale-105 transition-transform" 
              // The original HTML had a box shadow class 'bx_sh' which you would define in your CSS
            >
              <img 
                src={messageIcon} 
                alt="message icon" 
                className="xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] xl:mx-6 mx-4"
              /> 
              Let's Discuss!
            </button>
          </div>
          
          {/* Image Section */}
          <div className="images w-full pt-10 md:pt-0 md:w-1/2">
            <img 
              src={howPublishImage} 
              alt="how to publish a book" 
              // Removed data-tilt attributes as they require an external library
              className="w-full m-auto "
            />
            {/* The commented out pattern images are omitted from the React code */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorMarkSection;