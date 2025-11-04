import React from 'react';

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

    return (

        <section
            className="container mx-auto pb-10 pt-16 xl:py-20"
            id="counter-stats"
        >
          
            <div className="flex justify-between md:flex-row flex-col md:space-y-0 space-y-5 px-2 md:px-4">
                {counterStatsData.map((stat, index) => (
                    <div key={index} className="text-center leading-10">
                      
                        <h1 className="xl:text-[50px] lg:text-[40px] text-[24px] text-[#1D1D1F] luxury-regular">
                          
                            <span className="counting" data-count={stat.count}>
                                {stat.count}
                            </span>
                            {stat.unit}
                        </h1>
                       
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