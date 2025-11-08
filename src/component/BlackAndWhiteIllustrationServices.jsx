import React from 'react';

const BlackAndWhiteIllustrationServices = () => {
    // Define the illustration packages for clean rendering
    const packages = [
        {
            title: "B&W Illustrations - Personal Touch",
            description: "The clean lines and uniform shading of the Personal Touch line of black-and-white illustrations are perfect for a simple, classic style.",
        },
        {
            title: "B&W Illustrations - Fine Detail",
            description: "Give your book’s artwork a greater level of depth and dimension with Fine Detail illustrations that add basic shadows and highlights to objects and scenery.",
        },
    ];

    return (
        <section className="lg:py-14 2xl:px-0 py-12 px-6">
            <div className="container mx-auto">
                <div className="w-full">
                    {/* Main Heading and Introduction */}
                    <h2 className="luxury-regular text-[#1D1D1F] lg:text-[64px] text-[30px] leading-tight mb-4">
                        Interior Black & White Illustration
                    </h2>
                    <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                        Use custom black-and-white illustrations to add visual interest to the pages of your book. Whether you need whimsical drawings or informational graphics, our in-house artists can help.
                    </p>

                    {/* Rendering the list of illustration packages */}
                    {packages.map((pkg, index) => (
                        <React.Fragment key={index}>
                            <h2 className="luxury-regular text-[#1D1D1F] lg:text-[20px] text-[18px] leading-tight my-2">
                                {pkg.title}
                            </h2>
                            <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                                {pkg.description}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlackAndWhiteIllustrationServices;