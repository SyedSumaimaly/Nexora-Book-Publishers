import React from 'react';

// Reusable component for the sub-sections
const SubSection = ({ title, content }) => (
    <>
        <h2 className="luxury-regular text-[#1D1D1F] lg:text-[20px] text-[18px] leading-tight my-2">
            {title}
        </h2>
        <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            {content}
        </p>
    </>
);

const CoverDesignFeatures = () => {
    return (
        <section className="bg-gray-50 lg:py-14 2xl:px-0 py-12 px-6">
            <div className="container mx-auto">
                {/* The original HTML uses a w-full div wrapper which is preserved */}
                <div className="w-full">
                    {/* Main Title and Description */}
                    <h2 className="luxury-regular text-[#1D1D1F] lg:text-[64px] text-[30px] leading-tight mb-4">
                        Cover Design
                    </h2>
                    <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                        Your book’s cover says a lot to readers. An Nexora Book Publishers designer will keep your book’s 
                        target audience, genre and unique content in mind when creating a professional cover that 
                        effectively represents your book to potential readers.
                    </p>
                    
                    {/* Sub-Sections */}
                    <SubSection
                        title="Cover Revisions (Text)"
                        content="This Nexora Book Publishers service pertains to any text that is changed on the cover layout."
                    />

                    <SubSection
                        title="Cover Revisions (Images/Design)"
                        content="These changes include imagery and design elements on the cover layout that are NOT text changes."
                    />

                    <SubSection
                        title="Custom Cover Illustration"
                        content="Let our artists help you create a one of a kind, eye-catching, custom cover for your book."
                    />
                </div>
            </div>
        </section>
    );
};

export default CoverDesignFeatures;