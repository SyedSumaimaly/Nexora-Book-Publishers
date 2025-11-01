import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import { Autoplay, EffectFade } from 'swiper/modules';
import SliderItem from './SliderItem'; 

import ReviewProfile1 from '../assets/reviewprofileimg-one.png';
import ReviewProfile2 from '../assets/reviewprofileimg-two.png';
import ReviewProfile3 from '../assets/reviewprofileimg-three.png';


const sliderData = [
    {
        id: 'a',
        title: "Chart Topper",
        heading: "What's So Special About Fawcett Publications?",
        paragraph: "Being strongly inspired by the high writing and printing standards set by Wilford Hamilton, Fawcett Publications aims to not just maintain the premium quality set by Captain Billy, but improve upon it. We all have a dream and we all deserve a fair chance to achieve them. That's exactly what we are offering. A fair and solid chance for an aspiring author to take the first step and make their mark in the book industry all around the globe. If you have a genius story idea in your head, then this is the right place to make it all happen!",
        bookImage: "images/charttopperbook-one.png",
        reviewerName: "– James Patterson",
        reviewProfileImg: {ReviewProfile1},
        reviewText: "Fawcett Publications was a game-changer for my writing career. The team was supportive and incredibly professional. My book's quality surpassed my expectations, and the sales followed!",
        animation: { headingDelay: "0.1", headingAnim: "fadeInLeft", paragraphDelay: "0.1", paragraphAnim: "fadeInLeft", bookDelay: "0.1", bookAnim: "fadeInUp", reviewDelay: "0.3", reviewAnim: "fadeInRight" }
    },
    {
        id: 'b',
        title: "Chart Topper",
        heading: "Industry Experience",
        paragraph: "At Fawcett Publications, our extensive history in book publishing sets us apart. We blend traditional craftsmanship with modern innovation to bring stories to life. Our dedication to quality has made us a trusted name, with decades of delivering outstanding books that captivate and inspire audiences.",
        bookImage: "images/charttopperbook-two.png",
        reviewerName: "– Sarah Johnson",
        reviewProfileImg: {ReviewProfile2},
        reviewText: "The attention to detail by Fawcett's team from editing to publication was phenomenal. They made my dream of becoming a published author a reality. Their process is transparent and highly effective.",
        animation: { headingDelay: "0.1", headingAnim: "fadeInLeft", paragraphDelay: "0.1", paragraphAnim: "fadeInLeft", bookDelay: "0.1", bookAnim: "fadeInUp", reviewDelay: "0.3", reviewAnim: "fadeInRight" }
    },
    {
        id: 'c',
        title: "Chart Topper",
        heading: "Industry Network",
        paragraph: "Our vast network within the publishing industry opens doors for our authors. Fawcett Publications collaborates with leading distributors, retailers, and marketers to ensure maximum exposure for each book. This extensive reach helps us place your work in the hands of eager readers worldwide.",
        bookImage: "images/charttopperbook-three.png",
        reviewerName: "– Michael Thompson",
        reviewProfileImg: {ReviewProfile3},
        reviewText: "I was amazed by how Fawcett Publications managed every aspect of the publishing process with such care and expertise. They truly made my book shine in a crowded market.",
        animation: { headingDelay: "0.1", headingAnim: "fadeInLeft", paragraphDelay: "0.1", paragraphAnim: "fadeInLeft", bookDelay: "0.1", bookAnim: "fadeInUp", reviewDelay: "0.3", reviewAnim: "fadeInRight" }
    },
    {
        id: 'd',
        title: "Chart Topper",
        heading: "Industry Experts",
        paragraph: "Fawcett Publications is home to some of the industry's most skilled and knowledgeable experts. Our team, comprising veteran editors, seasoned designers, and marketing maestros, works closely with each author. We're committed to nurturing your unique voice and vision, turning your manuscript into a masterpiece.",
        bookImage: "images/charttopperbook-two.png",
        reviewerName: "– Emily Clarke",
        reviewProfileImg: "images/reviewprofileimg-two.png",
        reviewText: "Working with Fawcett was an absolute pleasure! Their dedication to my book's success was evident through their proactive marketing and exceptional publishing services.",
        animation: { headingDelay: "0.1", headingAnim: "fadeInLeft", paragraphDelay: "0.1", paragraphAnim: "fadeInLeft", bookDelay: "0.1", bookAnim: "fadeInUp", reviewDelay: "0.3", reviewAnim: "fadeInRight" }
    }
];
// --- END SLIDER DATA ---


const NexoraSlider = () => {
    return (
        <section className="bg-[#F9F9F9] w-full lg:px-4 px-2">
            <div className="bg-[url('images/pattern.png')] bg-right bg-cover bg-no-repeat">
                
                {/* 1. Define the viewport height for the slider */}
                <div className="relative overflow-hidden" style={{ height: '800px' /* Adjust as needed */ }}>
                    
                    <Swiper
                        
                        modules={[Autoplay, EffectFade]}
                        
                        direction={'vertical'}
                        
                        autoplay={{
                            delay: 5000, 
                            disableOnInteraction: false,
                        }}
                        
                        loop={true}
                        
                        slidesPerView={1}
                        
                        speed={1000} 
                        
                        
                        className="mySwiper w-full h-full"
                    >
                        {sliderData.map((item) => (
                            <SwiperSlide key={item.id}>
                               
                                <SliderItem
                                    title={item.title}
                                    heading={item.heading}
                                    paragraph={item.paragraph}
                                    bookImage={item.bookImage}
                                    reviewerName={item.reviewerName}
                                    reviewProfileImg={item.reviewProfileImg}
                                    reviewText={item.reviewText}
                                    animationClasses={item.animation}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* The call to action section from the image */}
            <div className="container mx-auto text-center pt-20 pb-40">
                <h2 className="xl:text-[60px] lg:text-[45px] md:text-[35px] text-[25px] font-serif leading-tight text-[#1D1D1F]">
                    Following in the Footsteps of Our Predecessors – Making Capt. Billy Proud!
                </h2>
                <button className="mt-8 px-10 py-4 bg-[#EB4209] text-white rounded-full font-semibold shadow-lg hover:bg-orange-700 transition duration-300">
                    Call Now!
                </button>
            </div>
        </section>
    );
};

export default NexoraSlider;