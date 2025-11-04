import React from 'react';

import FictionNonfictionImg from '../assets/icons/fiction-and-nonfiction.png';
import ChildrenBookImg from '../assets/icons/children-book.png';
import TailoredStrategyImg from '../assets/icons/tailored-strategy.png';
import BookReviewImg from '../assets/icons/book-review.png';
import CriticalReviewImg from '../assets/icons/ciritical-review.png';
import DevelopmentalEditingImg from '../assets/icons/developmental-editing.png';
import LineEditingImg from '../assets/icons/line-editing.png';
import CopyEditingImg from '../assets/icons/copy-editing.png'; 
import GhostwritingImg from '../assets/icons/ghostwriting-and-rewriting.png';
import CulturalAccuracyImg from '../assets/icons/cultural-accuracy.png';
import PublishingNavigationImg from '../assets/icons/publishing-navigation.png';
import CopyEditingTwoImg from '../assets/icons/copy-editing-two.png'; 

const editingServices = [
    {
        title: "Fiction & Non-Fiction Editing",
        icon: FictionNonfictionImg,
        href: "#fiction-nonfiction",
        borderClasses: "border-b-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Children's Book Editing",
        icon: ChildrenBookImg,
        href: "#children-book",
        borderClasses: "border-x-2 border-b-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Tailored Strategy",
        icon: TailoredStrategyImg,
        href: "#strategy",
        borderClasses: "border-b-2 border-r-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Book Review Consultation",
        icon: BookReviewImg,
        href: "#review-consultation",
        borderClasses: "border-b-2 border-solid border-[#F2F2F2]",
    },
   
    {
        title: "Critical Review & Analysis",
        icon: CriticalReviewImg,
        href: "#critical-review",
        borderClasses: "border-b-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Developmental Editing",
        icon: DevelopmentalEditingImg,
        href: "developmental-editing",
        borderClasses: "border-x-2 border-b-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Line Editing",
        icon: LineEditingImg,
        href: "line-editing",
        borderClasses: "border-b-2 border-r-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Copy Editing", 
        icon: CopyEditingImg,
        href: "copyediting",
        borderClasses: "border-b-2 border-solid border-[#F2F2F2]",
    },
   
    {
        title: "Ghostwriting & Rewriting",
        icon: GhostwritingImg,
        href: "#ghostwriting",
        borderClasses: "border-b-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Cultural Accuracy",
        icon: CulturalAccuracyImg,
        href: "#cultural-accuracy",
        borderClasses: "border-x-2 border-b-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Publishing Navigation",
        icon: PublishingNavigationImg,
        href: "#publishing",
        borderClasses: "border-b-2 border-r-2 border-solid border-[#F2F2F2]",
    },
    {
        title: "Copy Editing", 
        icon: CopyEditingTwoImg,
        href: "copyediting",
        borderClasses: "border-b-2 border-solid border-[#F2F2F2]",
    },
];

const BookEditingOptionsGrid = () => {
    
    const paddingClasses = "2xl:py-16 2xl:px-16 xl:py-8 xl:px-8 py-4 px-4";

    return (
        <section className="md:py-16 sm:py-8 py-4">
            <div className="container mx-auto">
                
                <h3 className="text-center text-[#1D1D1F] luxury-regular xl:text-[64px] text-[25px] leading-tight">
                    Need More Book Love?
                </h3>
                
               
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-8">
                    {editingServices.map((service, index) => (
                        <a 
                            key={index} 
                            href={service.href.startsWith('#') || service.href.startsWith('void:') ? service.href : `/${service.href}`} 
                            
                        >
                            <div
                                
                                className={`text-center ${service.borderClasses} ${paddingClasses}`}
                            >
                                <img 
                                    src={service.icon} 
                                    alt={`Icon for ${service.title}`}
                                    className="mx-auto w-[48px] h-[48px]" 
                                />
                                <h6 className="mt-4 luxury-regular text-[#1D1D1F] lg:text-[1.1rem] xl:text-md leading-7">
                                    {service.title}
                                </h6>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookEditingOptionsGrid;