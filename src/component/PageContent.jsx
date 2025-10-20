import React from 'react';

// --- Reusable Page Content Component ---
const PageContent = ({ title, children }) => (
  <div className="p-8 text-center min-h-[70vh] flex flex-col justify-center items-center bg-gray-50 border-b border-gray-200">
    <h1 className="text-5xl font-extrabold text-red-700 mb-4">{title}</h1>
    <p className="text-xl text-gray-600 max-w-2xl">
      This is the content area for the <span className="font-semibold text-red-700">"{title}"</span> page. 
    </p>
    <p className="mt-8 text-sm text-gray-400">
        Current Path: {window.location.hash || '#home'}
    </p>
    <div className="mt-8 space-x-4">
        {/* Example links to test the expanded routing structure */}
        <a href="#editing/developmental" className="text-blue-600 underline hover:text-blue-800">Go to Developmental Editing</a>
        <a href="#publishing/pod" className="text-blue-600 underline hover:text-blue-800">Go to Print-on-Demand</a>
    </div>
    {children}
  </div>
);

export default PageContent;