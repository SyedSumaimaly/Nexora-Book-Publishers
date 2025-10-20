import React from 'react';

// --- Static Data ---
const counterStatsData = [
    {
        count: 19,
        unit: 'Books',
        description: 'Are #1 New York Times Bestsellers',
    },
    {
        count: 310,
        unit: '+ Books',
        description: 'Are National Bestsellers',
    },
    {
        count: 1373,
        unit: '+ Books',
        description: 'Published With Us!',
    },
    {
        count: 100,
        unit: 'M+ Books',
        description: 'Sold Online And In-Stores',
    },
];

const CounterStats = () => {
    // Note: The counting animation logic (`useCounterAnimation` / useEffect) 
    // is assumed to be handled externally, as discussed previously.

    return (
        // Removed the horizontal padding (px-2, md:px-4) from the section 
        // and made the container mx-auto for the inner content.
        <section
            className="container mx-auto pb-10 pt-16 xl:py-20"
            id="counter-stats"
        >
            {/* The inner div holds the columns and ensures spacing/alignment */}
            <div className="flex justify-between md:flex-row flex-col md:space-y-0 space-y-5 px-2 md:px-4">
                {counterStatsData.map((stat, index) => (
                    <div key={index} className="text-center leading-10">
                        {/* Title: Large, custom font, dark text */}
                        <h1 className="xl:text-[50px] lg:text-[40px] text-[24px] text-[#1D1D1F] luxury-regular">
                            {/* The counting span is necessary for the external JS animation */}
                            <span className="counting" data-count={stat.count}>
                                {stat.count}
                            </span>
                            {stat.unit}
                        </h1>
                        {/* Description: Smaller font, light gray text */}
                        <p className="xl:text-[17px] text-[14px] manifest-regular leading-tight text-[#8C8C8C] font-light pt-2">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CounterStats;