import React from 'react';
import NoraVideo from '../assets/fawcett-video.mp4'

// --- Constants: Video URL ---
// Using a public domain video URL as a placeholder for local assets like 'images/fawcett-video.mp4'
// const VIDEO_PLACEHOLDER_URL = NoraVideo; 

// --- Video Section Component ---

const VideoSection = () => {
    return (
        <section className="effect_booger bg-[#1D1D1F] py-8 xl:py-0">
            {/* The outer div ensures the video container takes full width and manages height responsively */}
            <div className="w-full h-auto xl:h-screen relative z-10">
                {/* The video element uses autoPlay, muted, and loop for background video playback.
                    The object-cover class ensures it fills the container while maintaining aspect ratio.
                */}
                <video 
                    src={NoraVideo} 
                    autoPlay
                    muted
                    loop
                    className="h-fit xl:h-full w-full md:w-fit xl:w-full object-cover"
                >
                    {/* Fallback for browsers that don't support the video element */}
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoSection;
