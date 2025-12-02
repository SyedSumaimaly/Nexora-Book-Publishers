import React from 'react';
import NoraVideo from '../assets/fawcett-video.mp4'

const VideoSection = () => {
    return (
        <section className="effect_booger bg-[#1D1D1F] py-8 xl:py-0">
            <div className="w-full h-auto xl:h-screen relative z-10">
                <video 
                    src={NoraVideo} 
                    autoPlay
                    muted
                    loop
                    className="h-fit xl:h-full w-full md:w-fit xl:w-full object-cover"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoSection;
