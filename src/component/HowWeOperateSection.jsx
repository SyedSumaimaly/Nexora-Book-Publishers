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
            imageQuery: "people shaking hands contract", // Based on the image content
        },
        {
            step: "Step 02.",
            title: "Our Pros Get to Work",
            description: "Depending on the services you choose, our experts will get started. We follow your instructions to the dot to ensure 100% satisfaction.",
            imageQuery: "experts working on research",
        },
        {
            step: "Step 03.",
            title: "Your Feedback is a Must",
            description: "The only way we are going to achieve the results you envisioned is if you give your honest feedback about everything. So do just that!",
            imageQuery: "team reviewing charts and feedback",
        },
        {
            step: "Step 04.",
            title: "Final Delivery",
            description: "Once everything is ready and finalized according to your requirements, we deliver the final results as promised.",
            imageQuery: "person receiving final results",
        },
    ];

    // Data for the "Genres" section (simulating swiper-slides)
    const genres = [
        "Action", "Comics", "Fiction", "Children's", "Romance",
        "Sci-Fi", "Mystery", "Thriller", "Non-Fiction", "Horror", "Adult Books"
    ];

    return (
        <section className="bg-white pt-14 pb-16 xl:pb-0 overflow-hidden">
            {/* ==============================
            How Do We Operate? Section (Top Part)
            ============================== 
            */}
            <div className="text-center px-4 mb-16">
                {/* Simulated text from the second image {BC5D8BE0-CEE0-48C7-9AE7-89A1A12633AA}.png */}
                <h2 className={`text-6xl lg:text-8xl font-black ${CUSTOM_FONT_CLASS} text-gray-900 leading-none`}>
                    How Do We
                </h2>
                <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                    Wondering what happens once you speak with our representative, choose your service, and make the payment? Here's what to expect.
                </p>
                <h2 className={`text-6xl lg:text-8xl font-black ${CUSTOM_FONT_CLASS} text-gray-900 leading-none -mt-4`}>
                    Operate?
                </h2>
            </div>

            {/* ==============================
            Operation Steps Section (Image {224558E2-CC89-4D80-9EAA-858E3A2CA260}.jpg)
            ============================== 
            */}
            <div className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {operationSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 shadow-xl border border-gray-100 rounded-lg transform hover:scale-[1.02] transition duration-300"
                        >
                            <p className="text-sm font-semibold text-green-700 mb-2">{step.step}</p>
                            <h3 className={`text-2xl font-black ${CUSTOM_FONT_CLASS} mb-4`}>{step.title}</h3>
                            <p className="text-gray-600 mb-6 text-sm">{step.description}</p>

                            {/* Illustration Placeholder based on the images */}
                            <div className="h-40 w-full bg-gray-50 flex items-center justify-center border border-dashed border-gray-300 rounded-md">
                                <span className="text-gray-500 text-sm italic"></span>
                                {/* In a real application, you'd replace this with an actual image component */}
                                {/* Example: <img src={step.imageUrl} alt={step.title} className="h-full w-full object-contain" /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section >
    );
};

export default HowWeOperateSection;