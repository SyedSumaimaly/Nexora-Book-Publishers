import React from 'react';

const InternetMarketingServices = () => {
    // Define the marketing services data structure for cleaner rendering
    const services = [
        {
            title: "SEM - 1000 Clicks",
            description: "Let curious and tech-savvy readers know about your book through our Search Engine Marketing service."
        },
        {
            title: "Data Essential",
            description: "The key to good online discoverability doesn’t just dwell in active social media accounts, and in comprehensive search engine campaigns. An accurate and relevant metadata play an important role too. With our Data Essential service, you’ll have a chance to boost your online visibility through a professionally enhanced book metadata information."
        },
        {
            title: "Kirkus Title Express",
            description: "Kick-start your book marketing campaign by promoting your book ad on the website of one of the publishing industry’s trusted pillars, Kirkus Reviews. This promotional campaign helps you establish your book’s online presence with a custom-made banner ad on the Kirkus homepage plus an exciting two-week seeding campaign that can attract followers so you can build an online following!"
        },
        {
            title: "Online Booksellers Advertising",
            description: "Advertise your book with two of the most reliable names in online bookselling: Amazon and Ingram."
        },
        {
            title: "E-Book Promo Venture - 30 Days",
            description: "Make your Kindle book more attractive to potential readers by offering it at a lower price for 30 days."
        },
        {
            title: "E-Book Promo Launcher",
            description: "Make your Kindle book more attractive to potential readers by offering it at a lower price for a limited time. Plus, maximize your campaign with ad placements on up to three popular online platforms."
        },
        {
            title: "Online Book Ads Via Google - 30 Days Package",
            description: "Do you have plans of advertising your book online? If you do, why not go big and launch your promotional campaign on one of the largest display networks on the Internet—the Google Display Network? Learn about promoting your title through Online Book Ads via Google and get your book ad on the screens of millions of readers online for 30 days."
        },
        {
            title: "Social Media Advertising - Basic",
            description: "From the vast reach of its audience to the number of tools it offers, there’s a lot of marketing potential in the social media platforms Facebook and Instagram. Start your advertising campaign and get your book in front of readers with the Basic package."
        },
        {
            title: "Social Media Advertising - Essential",
            description: "From the vast reach of its audience to the number of tools it offers, there’s a lot of marketing potential in the social media platforms Facebook and Instagram. Start your advertising campaign and get your book in front of readers with the Essential package."
        },
        {
            title: "Social Media Advertising - Advanced",
            description: "From the vast reach of its audience to the number of tools it offers, there’s a lot of marketing potential in the social media platforms Facebook and Instagram. Start your advertising campaign and get your book in front of readers with the Advanced package."
        },
        {
            title: "SEM - Advanced Campaign",
            description: "With the SEM – Advanced Campaign your book will get premium ad placement, a long-term online ad campaign, and inclusion Google’s book search. You also get the support of our web design and search engine experts."
        },
        {
            title: "SEM – Specialist Campaign",
            description: "With the SEM – Specialist Campaign your book will get premium ad placement, a long-term online ad campaign, and inclusion Google’s book search. You also get the support of our web design and search engine experts."
        },
    ];

    return (
        <section className="lg:py-10 2xl:px-0 py-12 px-6">
            <div className="container mx-auto">
                <div className="w-full">
                    {/* Main Heading and Introduction */}
                    <h2 className="luxury-regular text-[#1D1D1F] lg:text-[64px] text-[30px] leading-tight mb-4">
                        Internet Marketing
                    </h2>
                    <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                        The Internet is the fastest-growing marketplace for books. As a published author, you’re in a great position to take advantage of the Web as a powerful marketing and sales tool. Don’t have the time to explore the internet? Let us help you get started instead with these services:
                    </p>

                    {/* Rendering the list of services using map for efficiency */}
                    {services.map((service, index) => (
                        <React.Fragment key={index}>
                            <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
                                {service.title}
                            </h2>
                            <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
                                {service.description}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InternetMarketingServices;