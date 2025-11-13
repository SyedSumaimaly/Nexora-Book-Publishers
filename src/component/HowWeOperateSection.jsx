import React from 'react';
import StepImage1 from '../assets/howitworks-one.png';
import StepImage2 from '../assets/howitworks-two.png';
import StepImage3 from '../assets/howitworks-three.png';
import StepImage4 from '../assets/howitworks-four.png';

const HowWeOperateSection = () => {
    const operationSteps = [
        {
            step: "Step 01.",
            title: "Order Confirmation",
            description: "Within the first 24 hours, your dedicated project manager will contact you to kick things in motion and keep you updated.",
            stepImage: StepImage1,
        },
        {
            step: "Step 02.",
            title: "Our Pros Get to Work",
            description: "Depending on the services you choose, our experts will get started. We follow your instructions to the dot to ensure 100% satisfaction.",
            stepImage: StepImage2,
        },
        {
            step: "Step 03.",
            title: "Your Feedback is a Must",
            description: "The only way we are going to achieve the results you envisioned is if you give your honest feedback about everything. So do just that!",
            stepImage: StepImage3,
        },
        {
            step: "Step 04.",
            title: "Final Delivery",
            description: "Once everything is ready and finalized according to your requirements, we deliver the final results as promised.",
            stepImage: StepImage4,
        },
    ];

    return (
     <section className="py-10 md:py-14 bg-gray-100"> 
            <div className="container mx-auto px-4 mb-8">

                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[60px] md:text-[80px] lg:text-[100px] text-[#1D1D1F] leading-tight md:leading-tight">
                        How Do We
                    </h2>
                    <h2 className="text-[60px] md:text-[80px] lg:text-[100px] text-[#1D1D1F] leading-tight md:leading-tight">
                        Operate?
                    </h2>
                    
                    {/* Subtitle text */}
                    <p className="manifest-regular text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-4">
                        Wondering what happens once you speak with our representative, 
                        choose your service, and make the payment? Here's what to expect.
                    </p>
                </div>
                {/* --- End Header Section --- */}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {operationSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 shadow-lg border border-gray-200 rounded-lg 
                                      flex flex-col justify-between h-full" 
                        >
                            <div>
                                <p className="text-sm font-semibold text-green-700 mb-2 text-left">{step.step}</p>
                                
                                <h3 className={`text-xl font-black mb-4 text-left leading-snug text-[#1D1D1F]`}>{step.title}</h3>
                                
                                <p className="text-gray-500 mb-6 text-sm text-left">{step.description}</p>
                            </div>
                            
                            <div className="mt-auto">
                                <div className="h-40 w-full bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                                    <img src={step.stepImage} alt={`Visual for ${step.step}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeOperateSection;
