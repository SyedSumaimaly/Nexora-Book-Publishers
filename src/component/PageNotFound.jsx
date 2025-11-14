import React from 'react';
import { RefreshCcw, Home, Search } from 'lucide-react'; // <-- Added Search icon

// Define a keyframe animation for a combined float and gentle spin effect
const customAnimationStyle = `
@keyframes float-spin {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  75% {
    transform: translateY(10px) rotate(-5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
.animate-float-spin {
  animation: float-spin 6s ease-in-out infinite;
}
`;


const PageNotFound = () => {
  const goToHome = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{customAnimationStyle}</style>

      <div className="flex items-center justify-center min-h-[60vh] py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-md w-full space-y-8 text-center">

          {/* Animated Icon (Search) */}
          <div className="flex justify-center mb-8">
            <Search
              className="w-32 h-32 text-[#eb4209] drop-shadow-lg animate-float-spin" 
              strokeWidth={1.5} 
            />
          </div>

          {/* Large 404 Text */}
          <h1 className="text-9xl font-extrabold text-[#eb4209] tracking-tight drop-shadow-lg animate-pulse">
            404
          </h1>

          {/* Main Heading */}
          <h2 className="mt-6 text-3xl font-bold text-black">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-2 text-lg text-gray-700">
            Oops! It looks like you've wandered off the page. We seem to be searching for the correct page, but it might have been moved or doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 pt-4">

            {/* Go Home Button */}
            <a
              href="/"
              onClick={goToHome}
              className="group relative flex justify-center items-center py-3 px-6 border border-transparent text-lg font-medium rounded-xl text-white bg-[#eb4209] hover:bg-[#dc3d07] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-150 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5 mr-3" />
              Go to Homepage
            </a>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="group cursor-pointer relative flex justify-center items-center py-3 px-6 border border-gray-300 text-lg font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150 shadow-md transform hover:-translate-y-0.5"
            >
              <RefreshCcw className="w-5 h-5 mr-3" />
              Go Back
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-700 mt-6">
            If you need help finding a book or service, check the navigation menu above!
          </p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;