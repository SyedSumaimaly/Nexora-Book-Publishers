import React from 'react';

const SoftcoverPublishingDetails = () => {
  return (
    <section className="lg:py-14 2xl:px-0 py-12 px-6">
      <div className="container mx-auto">
        <div className="w-full">
          {/* Softcover Publishing Heading and Description */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[64px] text-[30px] leading-tight mb-4">
            Softcover Publishing
          </h2>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px]">
            Fawcett Publications softcover books are trade paperbacks. Trade paperback is an industry term that 
            describes a book that is of better production quality than a mass-market paperback. Trade paperbacks are also 
            produced in a larger size and offered at a higher price than mass-market paperbacks. Mass-market paperback books 
            are generally cheaply made and printed on newsprint or other low-quality paper, which will discolor and 
            disintegrate over time. Trade paperbacks, on the other hand, meet a higher standard and are printed on 
            high-quality paper.
          </p>

          {/* Paperback Trim Sizes (Non-Color) */}
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Fawcett Publications offers paperbacks in the following trim sizes:
          </p>
          <ul className="list-disc pl-5 my-5 space-y-2 marker:text-[#EB4209]">
            <li className="manifest-regular text-[#A7A7A7] text-base leading-[28px] mb-2">5" x 8"</li>
            <li className="manifest-regular text-[#A7A7A7] text-base leading-[28px] mb-2">6" x 9"</li>
            <li className="manifest-regular text-[#A7A7A7] text-base leading-[28px] mb-2">8.25" x 11"</li>
          </ul>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Minimum page count: 48 pages
          </p>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Maximum page count: 900 pages
          </p>

          {/* Color Specifications */}
          <h2 className="luxury-regular text-[#1D1D1F] lg:text-[30px] text-[25px] leading-tight my-7">
            Color
          </h2>
          <ul className="list-disc pl-5 my-5 space-y-2 marker:text-[#EB4209]">
            <li className="manifest-regular text-[#A7A7A7] text-base leading-[28px] mb-2">8.5" x 8.5"</li>
            <li className="manifest-regular text-[#A7A7A7] text-base leading-[28px] mb-2">8.5" x 11"</li>
          </ul>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Minimum page count: 24 pages
          </p>
          <p className="manifest-regular text-[#A7A7A7] text-base leading-[28px] ">
            Maximum page count: 480 pages
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoftcoverPublishingDetails;