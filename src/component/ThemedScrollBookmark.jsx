import React, { useState, useEffect } from 'react';

const ThemedScrollBookmark = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0); 
    
    const primaryColor = '#EB4209';
    const ringColor = '#1D1D1F';

    const buttonSize = 64;
    const strokeWidth = 5;
    const radius = (buttonSize - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;

    const toggleVisibilityAndProgress = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        const scrolled = (scrollTop / scrollHeight) || 0;
        setScrollPercentage(scrolled * 100);

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibilityAndProgress);
        return () => {
            window.removeEventListener('scroll', toggleVisibilityAndProgress);
        };
    }, []);

    const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

    const buttonClasses = `
        fixed bottom-8 right-8 
        rounded-full 
        shadow-xl 
        transition-opacity duration-300          /* Only for button visibility */
        hover:scale-110 hover:shadow-2xl hover:brightness-110 
        focus:outline-none focus:ring-4 focus:ring-[${primaryColor}]/60
        z-[9999] cursor-pointer               
        flex items-center justify-center
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `;

    return (
        <button
            onClick={scrollToTop}
            className={buttonClasses}
            style={{ 
                width: `${buttonSize}px`, 
                height: `${buttonSize}px`,
                backgroundColor: 'white', 
            }}
            aria-label="Scroll to top"
        >
            <svg
                width={buttonSize}
                height={buttonSize}
                className="transform -rotate-90"
            >
                {/* Outer Ring / Track */}
                <circle
                    stroke={ringColor} 
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={buttonSize / 2}
                    cy={buttonSize / 2}
                    className="opacity-20" 
                />
                {/* Progress Indicator */}
                <circle
                    stroke={primaryColor} 
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={buttonSize / 2}
                    cy={buttonSize / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round" 
                    className="transition-[stroke-dashoffset] duration-300 ease-in-out" 
                />
            </svg>
            {/* Arrow Icon */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke={primaryColor} 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="absolute"
            >
                <path d="M12 19V5" /> 
                <path d="M5 12L12 5L19 12" />
            </svg>
        </button>
    );
};

export default ThemedScrollBookmark;