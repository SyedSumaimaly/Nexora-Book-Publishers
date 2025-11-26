import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ActionImg from '../assets/Book-Categories/Action/1.png'
import AdultImg from '../assets/Book-Categories/AdultBooks/5.png'
import ChildrenImg from '../assets/Book-Categories/Childrens/1.png'
import ComicImg from '../assets/Book-Categories/Comics/1.png'
import NonFictionImg from '../assets/Book-Categories/NonFiction/1.png'

// Sample data for the carousel
// In a real application, these URLs would be dynamic or loaded from an external source.
const BOOK_COVERS = [
    { id: 1, title: "Control", genre: "Sci-Fi", author: "A. S. Author", url: ActionImg },
    { id: 2, title: "Memories", genre: "Drama", author: "B. T. Booker", url: AdultImg },
    { id: 3, title: "Seven Rabbits", genre: "Thriller", author: "Timothy King", url: ChildrenImg },
    { id: 4, title: "Motherhood", genre: "Memoir", author: "C. U. Writer", url: ComicImg },
    { id: 5, title: "Shadows", genre: "Mystery", author: "D. V. Novelist", url: NonFictionImg },
];

const BookCover = ({ book, isCentral }) => {
    // Determine the style based on whether the book is the center, fully visible one
    // ACTIVE: large (scale-125), full opacity
    const scale = isCentral ? 'scale-125 shadow-2xl shadow-gray-700 opacity-100' : 'scale-75 opacity-10';
    // Rotation for peripheral books
    const rotation = isCentral ? 'rotate-0' : 'rotate-[-10deg]';
    const zIndex = isCentral ? 'z-10' : 'z-0';

    return (
        <div
            className={`
                transition-all duration-500 ease-in-out cursor-pointer
                w-[150px] h-[230px] rounded-lg overflow-hidden border-2 border-transparent
                ${scale} ${rotation} ${zIndex}
            `}
        >
            {/* Using a simple image placeholder */}
            <img
                src={book.url}
                // alt={book.title}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const SliderPlaceholder = () => {
    // Current index tracks the book in the center position
    const [currentIndex, setCurrentIndex] = useState(2); // Start at "Seven Rabbits"

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % BOOK_COVERS.length);
    };

    const handlePrev = () => {
        // Correctly handle negative index wrap-around
        setCurrentIndex((prevIndex) => (prevIndex - 1 + BOOK_COVERS.length) % BOOK_COVERS.length);
    };

    // Calculate the list of books to display, centered around currentIndex
    const getVisibleCovers = () => {
        const total = BOOK_COVERS.length;
        const visibleIndices = [];

        // We want the current index to be in the center (position 2 out of 5)
        for (let i = -2; i <= 2; i++) {
            // Apply modulo to wrap around the array
            const index = (currentIndex + i + total) % total;
            visibleIndices.push(BOOK_COVERS[index]);
        }
        return visibleIndices;
    };

    const visibleCovers = getVisibleCovers();
    const centralBook = BOOK_COVERS[currentIndex];

    // Tailwind Dark Background Class
    const BG_COLOR = 'bg-[#1D1D1F]';
    const TEXT_COLOR = 'text-white';
    const FAINT_COLOR = 'text-gray-700';
    const ACCENT_COLOR = 'text-[#ef4f1b]';

    return (
        <section className={`${BG_COLOR} py-16 md:py-20 overflow-hidden`}>
            <div className="container mx-auto px-4">
                {/* Header Section (Big Title and Subtitle) */}
                <div className="text-center mb-16 relative">
                    {/* Background "Genres" text - large, light, luxury font */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <span className={`${FAINT_COLOR} luxury-regular text-[10rem] sm:text-[15rem] opacity-30 select-none`}>
                            Genres
                        </span>
                    </div>

                    {/* Foreground Genre text */}
                    <h2 className={`luxury-regular ${TEXT_COLOR} text-5xl md:text-7xl relative z-10 pt-10`}>
                        {centralBook.genre}
                    </h2>
                </div>

                {/* --- Carousel Display Area --- */}
                <div className="slider__wrraper relative">
                    <div className="flex justify-center space-x-8 md:space-x-16 lg:space-x-24 min-h-[400px] items-center">
                        {visibleCovers.map((book, index) => (
                            <BookCover
                                key={book.id}
                                book={book}
                                // The middle element (index 2 in the visibleCovers array) is the central one
                                isCentral={index === 2}
                            />
                        ))}
                    </div>

                    {/* --- Navigation Buttons (Left/Right) --- */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:bg-white/10 transition-colors hidden md:block"
                        aria-label="Previous Book"
                    >
                        <ArrowLeft className={`w-8 h-8 ${TEXT_COLOR}`} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:bg-white/10 transition-colors hidden md:block"
                        aria-label="Next Book"
                    >
                        <ArrowRight className={`w-8 h-8 ${TEXT_COLOR}`} />
                    </button>

                    {/* --- Mobile Navigation and Details --- */}
                    <div className="flex flex-col items-center mt-12 space-y-4">

                        {/* Book Details */}
                        {/* <div className="text-center">
                            <h3 className={`text-2xl font-semibold ${TEXT_COLOR}`}>
                                {centralBook.title}
                            </h3>
                            <p className="text-gray-400">{centralBook.author}</p>
                        </div> */}

                        {/* Mobile Next/Prev buttons */}
                        <div className="flex space-x-6 md:hidden">
                            <button
                                onClick={handlePrev}
                                className={`flex items-center space-x-1 ${ACCENT_COLOR} hover:text-white transition-colors p-2 rounded-full group`}
                                aria-label="Previous Book"
                            >
                                <ArrowLeft className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-0.5" />
                                <span className="text-lg">Prev</span>
                            </button>
                            <button
                                onClick={handleNext}
                                className={`flex items-center space-x-1 ${ACCENT_COLOR} hover:text-white transition-colors p-2 rounded-full group`}
                                aria-label="Next Book"
                            >
                                <span className="text-lg">Next</span>
                                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderPlaceholder;
