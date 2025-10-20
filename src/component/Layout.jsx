import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

// --- Layout Component ---
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* 1. Header/Navigation Bar */}
      <NavigationBar />

      {/* 2. Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default Layout;