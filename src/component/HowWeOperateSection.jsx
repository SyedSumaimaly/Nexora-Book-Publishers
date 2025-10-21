import React from 'react';

// A utility class to simulate the custom font used in the HTML
const CUSTOM_FONT_CLASS = 'font-serif tracking-tight';

const HowWeOperateSection = () => {
    // Data for the "How Do We Operate?" steps
    const operationSteps = [
        {
            step: "Step 01.",
            title: "Order Confirmation",
            description: "Within the first 24 hours, your dedicated project manager will contact you to kick things in motion and keep you updated.",
        },
        {
            step: "Step 02.",
            title: "Our Pros Get to Work",
            description: "Depending on the services you choose, our experts will get started. We follow your instructions to the dot to ensure 100% satisfaction.",
        },
        {
            step: "Step 03.",
            title: "Your Feedback is a Must",
            description: "The only way we are going to achieve the results you envisioned is if you give your honest feedback about everything. So do just that!",
        },
        {
            step: "Step 04.",
            title: "Final Delivery",
            description: "Once everything is ready and finalized according to your requirements, we deliver the final results as promised.",
        },
    ];

    return (
        <section className="bg-white pt-14 pb-0 overflow-hidden">
            {/* ==============================
            How Do We Operate? Section (Top Part)
            ============================== */}
            <div className="text-center px-4">
                {/* Title block */}
                <h2 className={`text-6xl lg:text-8xl font-black ${CUSTOM_FONT_CLASS} text-gray-900 leading-tight`}>
                    How Do We
                </h2>

                {/* Descriptive paragraph */}
                <p className="text-base text-gray-600 mt-2 max-w-2xl mx-auto">
                    Wondering what happens once you speak with our representative, choose your service, and make the payment? Here's what to expect.
                </p>

                {/* Second part of the title */}
                <h2 className={`text-6xl lg:text-8xl font-black ${CUSTOM_FONT_CLASS} text-gray-900 leading-tight -mt-4`}>
                    Operate?
                </h2>
            </div>

            {/* ==============================
            Operation Steps Section
            ============================== */}
            <div className="container mx-auto px-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {operationSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 pb-12 shadow-lg border border-gray-200 rounded-lg"
                        >
                            {/* Step Number */}
                            <p className="text-sm font-semibold text-green-700 mb-2 text-left">{step.step}</p>

                            {/* Title */}
                            <h3 className={`text-xl font-black ${CUSTOM_FONT_CLASS} mb-4 text-left leading-snug`}>{step.title}</h3>

                            {/* Description */}
                            <p className="text-gray-500 mb-6 text-sm text-left">{step.description}</p>

                            {/* Illustration Placeholder */}
                            <div className="h-40 w-full bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-lg mt-4">
                                <span className="text-gray-500 text-sm italic">Illustration Placeholder</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeOperateSection;
