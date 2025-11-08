import React from 'react';
// Assume these paths are correct relative to this file's location: src/component/CustomerReviewGrid.jsx
import ImageOne from '../assets/review-books/book-one.jpg';
import ImageTwo from '../assets/review-books/book-two.jpg';
import ImageThree from '../assets/review-books/book-three.jpg';
import ImageFour from '../assets/review-books/book-four.jpg';
import ImageFive from '../assets/review-books/book-five.jpg';
import ImageSix from '../assets/review-books/book-six.jpg';
import ImageSeven from '../assets/review-books/book-seven.jpg';
import ImageEight from '../assets/review-books/book-eight.png';
import ImageNine from '../assets/review-books/book-nine.png';
import StarIcon from '../assets/icons/star-icons.png'
import QuoteIcon from '../assets/icons/quote-icon.png'
import VerifiedIcon from '../assets/icons/verified-image.png'


const customerReviewsData = [
    {
        name: "Jacky Leon",
        text: "Collaborating with Nexora Book Publishers on Oath Sworn was an experience I’ll always treasure. Their editorial team brought a level of insight and understanding that deepened both the characters and the world I had created. Their support wasn’t just professional. They allowed the story to flourish and resonate in ways I hadn’t imagined. I’m beyond grateful for their guidance.",
        // CORRECTION: Assign the variable directly. ImageOne already holds the correct path string.
        bookImage: ImageOne, 
    },
    {
        name: "Kayla Edwards",
        text: "Working with Nexora Book Publishers on City of Gods and Monsters was an amazing experience. They got what I was trying to do on a deeper level. Their feedback made Angelthene feel even more alive, and their support every step of the way meant so much. I couldn’t have asked for a better team to bring this book to life.",
        bookImage: ImageTwo,
    },
    {
        name: "Ruby Dixon",
        text: "These guys at Nexora handled Bound to the Battle God completely and my word, what a smooth and rewarding process! Their team had a great eye for detail and helped refine the story without losing its heart. They understood the characters, the world, and the tone I was going for, which made all the difference.",
        bookImage: ImageThree,
    },
    {
        name: "Ormstunga Saga",
        text: "Digging into my father’s words, his notes, his dreams of the unknown - it was deeply personal! Nexora Book Publishers understood that. They didn’t just edit a manuscript. They helped honor a legacy. Every conversation, every careful decision, felt like a step deeper into his world. I’m grateful beyond words for their dedication in bringing this journey to life.",
        bookImage: ImageFour,
    },
    {
        name: "Andrew Rowe",
        text: "Writing A Brief History of Chronomancy was an adventure in itself, but working with Nexora Book Publishers made it even more exciting. They understood the intricacies of time travel, paradoxes, and magic systems just as deeply as I did, pushing me to refine every detail. Their commitment to both clarity and creativity helped shape this book into something I’m truly proud of.",
        bookImage: ImageFive,
    },
    {
        name: "Rob J. Hayes",
        text: "Penning It Takes a Thief to Catch a Sunrise was a wild, intricate process, and Fawcett was there for every twist and turn. They got the vibe of the story right away - sharp, stylish, full of intrigue - and their feedback made it even better. Honestly, I couldn’t have asked for a better team to help bring this world to life.",
        bookImage: ImageSix,
    },
    {
        name: "Hayley Anderton",
        text: "Bringing Among Thorns to life was both exciting and nerve-wracking, but Nexora Book Publishers made the entire process feel seamless. The emotions, the folklore, the slow-burning tension, they truly understood the layers of the story and helped shape it into something even more powerful. Working with them felt like having a team that genuinely cared, and that made all the difference.",
        bookImage: ImageSeven,
    },
    {
        name: "John E. Hudson",
        text: "I was looking for someone to help me format my audiobook, and these guys crushed it. They worked fast, answered all my annoying questions, and didn’t make me feel dumb for not knowing the technical stuff. The final product is clean and sounds amazing.",
        bookImage: ImageEight,
    },
    {
        name: "Ashley White",
        text: "Book marketing felt overwhelming until I worked with the right team. Their strategy wasn’t just about ads—it was about real audience engagement. From targeted promotions to consistent visibility, every step made an impact. Thanks to their expertise, my book didn’t just launch; it reached the right readers and gained real traction.",
        bookImage: ImageNine,
    },
];

const CustomerReviewGrid = ({ reviews = customerReviewsData }) => {
    return (
        <section className="pt-20 pb-20">
            <div className="container-fluid xl:px-16 px-4">
                <div
                    className="block md:grid items-center xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-4 xl:mb-20"
                    data-cursor="-opaque -mb -color-white"
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="w-full bg-[#F2F2F2] rounded-[12px] 2xl:pb-0 2xl:p-10 xl:pb-0 xl:p-4 p-4 pb-0 relative mb-8 xl:mb-0 z-[1] 2xl:pr-0 xl:pr-0"
                        >
                            <img
                                src={QuoteIcon}
                                alt="quote-icon"
                                className="absolute 2xl:w-[106px] 2xl:h-[76px] xl:w-[85px] xl:h-[50px] lg:w-[106px] lg:h-[76px] sm:w-[106px] sm:h-[76px] w-auto h-auto 2xl:right-10 xl:right-2 md:right-4 right-10 top-[-25px] z-[9999]"
                            />
                            <div className="flex items-center justify-between overflow-hidden z-[999] relative">
                                <div className="block xl:flex w-full">
                                    <div className="w-ful xl:w-1/2 2xl:pb-10 xl:pb-4 pb-0">
                                        <h4 className="luxury-regular text-[#1D1D1F] text-[26px] leading-[33px] mb-[10px]">
                                            {review.name}
                                        </h4>
                                        <p className="manifest-regular text-[#8C8C8C] text-[14px] leading-[21px]">
                                            {review.text}
                                        </p>
                                        <img
                                            src={StarIcon}
                                            alt="star rating"
                                            className="w-[100px] h-[17px] mt-5"
                                        />
                                    </div>
                                    <div className="w-ful xl:w-1/2 mt-4 xl:mt-0">
                                        <img
                                            src={VerifiedIcon}
                                            alt="verified"
                                            className="w-[80px] h-[22px]"
                                        />
                                        <img
                                            src={review.bookImage} // Now correctly uses the string path
                                            alt={`Cover of book by ${review.name}`}
                                            className="xl:absolute 2xl:bottom-[-130px] min-[1800px]:bottom-[-130px] min-[1600px]:bottom-[-80px] min-[1536px]:bottom-[-50px] xl:bottom-[-30px] right-[15px] xl:w-[45%] w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviewGrid;