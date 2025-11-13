import React from 'react';
import bookOne from '../assets/hall-of-fame/1.webp'
import bookTwo from '../assets/hall-of-fame/2.webp'
import bookThree from '../assets/hall-of-fame/3.webp'
import bookFour from '../assets/hall-of-fame/4.webp'
import bookFive from '../assets/hall-of-fame/5.webp'
import bookSix from '../assets/hall-of-fame/6.webp'
import bookSeven from '../assets/hall-of-fame/7.webp'
import bookEight from '../assets/hall-of-fame/8.webp'
import bookNine from '../assets/hall-of-fame/9.webp'
import bookTen from '../assets/hall-of-fame/10.webp'
import bookEleven from '../assets/hall-of-fame/11.webp'
import bookTwelve from '../assets/hall-of-fame/12.webp'

// Data structure for the Hall of Fame items
const hallOfFameItems = [
    { title: "Whiz Comics", imageSrc: bookOne, alt: "Whiz Comics cover" },
    { title: "The Marvel Family Comics", imageSrc: bookTwo, alt: "The Marvel Family Comics cover" },
    { title: "Captain Marvel Adventures", imageSrc: bookThree, alt: "Captain Marvel Adventures cover" },
    { title: "The Marvel Family", imageSrc: bookFour, alt: "The Marvel Family cover" },
    { title: "Capt Billy's Whiz Bang", imageSrc: bookFive, alt: "Capt Billy's Whiz Bang cover" },
    { title: "Jagua Nana", imageSrc: bookSix, alt: "Jagua Nana cover" },
    { title: "The Alpine Legacy - An Emma Lord Mystery", imageSrc: bookSeven, alt: "The Alpine Legacy book cover" },
    { title: "The Clairvoyant Countess", imageSrc: bookEight, alt: "The Clairvoyant Countess book cover" },
    { title: "Malice in London", imageSrc: bookNine, alt: "Malice in London book cover" },
    { title: "The Amazing Mrs. Pollifax", imageSrc: bookTen, alt: "The Amazing Mrs. Pollifax book cover" },
    { title: "The Unexpected Mrs. Pollifax", imageSrc: bookEleven, alt: "The Unexpected Mrs. Pollifax book cover" },
    { title: "The Real True Beatles", imageSrc: bookTwelve, alt: "The Real True Beatles book cover" },
];

const HallOfFameItem = ({ title, imageSrc, alt }) => (
    <div className="w-full max-w-[300px]">
        <img 
            src={imageSrc} 
            className="w-full" 
            alt={alt} 
        /> 
        <h1 className="text-[22px] manifest-regular text-[#1D1D1F] font-medium mt-2">
            {title}
        </h1>
    </div>
);

// Main Hall of Fame Component
const HallOfFame = () => {
    return (
        <section className="bg-[#F9F9F9] py-10 px-2">
            <div className="mx-auto container space-y-12">
                <h1 className="md:text-[64px] text-[44px] md:text-start text-center luxury-regular text-[#1D1D1F]">
                    Hall Of Fame!
                </h1>

                {/* Grid Layout for the items */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 gap-y-5 lg:gap-x-32 gap-x-5">
                    {hallOfFameItems.map((item, index) => (
                        <HallOfFameItem 
                            key={index} 
                            title={item.title}
                            imageSrc={item.imageSrc}
                            alt={item.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HallOfFame;