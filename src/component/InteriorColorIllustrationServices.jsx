import React from 'react';

const InteriorColorIllustrationServices = () => {
    const colorPackages = [
        {
            title: "Color Illustrations - Personal Touch",
            description: "The clean lines and uniform colors of our Personal Touch illustrations make for a simple style that will add a classic look to any book.",
        },
        {
            title: "Color Illustrations - Fine Detail",
            description: "With Fine Detail illustrations, your artist will add basic shadows and highlights to objects and scenery, giving each illustration a greater level of depth\\and dimension.",
        },
        {
            title: "Color Illustrations - Intricate Design",
            description: "By adding details and textures and varying color values, our Intricate Design artwork adds a high level of 3-dimensionality to each illustration.",
        },
    ];

    return (
        <section className="lg:py-24 2xl:px-0 py-12 px-6">
            <div className="container mx-auto">
                <div className="w-full">
                    <h2 className="luxury-regular text-[#1D1D1F] lg:text-[64px] text-[30px] leading-tight mb-4">
                        Interior Color Illustration
                    </h2>
                    <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                        One of Fawcett Publication s’s talented studio artists will use your descriptions and feedback to create custom color illustrations that reflect your book’s unique style.
                    </p>

                    {/* Rendering the list of illustration packages */}
                    {colorPackages.map((pkg, index) => (
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

export default InteriorColorIllustrationServices;