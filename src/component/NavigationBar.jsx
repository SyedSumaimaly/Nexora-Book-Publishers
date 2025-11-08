import React, { useState } from 'react';
import logo from '../assets/logo.png'
// import world from '../assets/world.png'

// --- Navigation Data (Centralized source) ---
// This list drives both the navigation menu display and the application routing.
export const NAV_LINKS = [
  // Left Section Services (Dropdowns - 6 sub-links each)
  {
    name: 'Book Writing', href: '#writing', dropdown: true, section: 'left', subLinks: [
      { name: 'Book Coaching', href: '#writing/book-coaching' },
      { name: 'Business And Leadership Book', href: '#writing/business-and-leadership-book' },
    ]
  },
  {
    name: 'Book Editing', href: '#editing', dropdown: true, section: 'left', subLinks: [
      { name: 'Review Consultation Services', href: '#editing/review-consultation-services' },
      { name: 'Developmental Edit', href: '#editing/developmental' },
      { name: 'Cover Copy Polish', href: '#editing/cover-copy-polish' },
      { name: 'Editorial Assessment', href: '#editing/editorial-assessment' },
    ]
  },
  {
    name: 'Book Publishing', href: '#publishing', dropdown: true, section: 'left', subLinks: [
      { name: 'Starter', href: '#publishing/starter' },
      { name: 'Essential', href: '#publishing/essential' },
      { name: 'Plus', href: '#publishing/plus' },
      { name: 'Elemental', href: '#publishing/elemental' },
      { name: 'Softcover Publishing', href: '#publishing/softcover-publishing' },
    ]
  },
  {
    name: 'Book Marketing', href: '#marketing', dropdown: true, section: 'left', subLinks: [
      { name: 'Publicity Compaigns', href: '#marketing/publicity-compaigns' },
      { name: 'Internet Marketing', href: '#marketing/internet-marketing' },
    ]
  },

  // Right Section Links (Includes Book Design and other top-level pages)
  {
    name: 'Book Design', href: '#design', dropdown: true, section: 'right', subLinks: [
      { name: 'Interior Illustration', href: '#design/interior-illustration' },
    ]
  },
  { name: 'Our Story', href: '#story', dropdown: false, section: 'right' },
  { name: 'Our Reviews', href: '#reviews', dropdown: false, section: 'right' },
  { name: 'Portfolio', href: '#portfolio', dropdown: false, section: 'right' },
  { name: 'Contact Us', href: '#contact', dropdown: false, section: 'right' },
  { name: 'Home', href: '#home', dropdown: false, section: 'right' }, 
];


// --- NavItem Component (Must be defined before NavigationBar uses it) ---
const NavItem = ({ item }) => {
  const { name, dropdown, subLinks, href } = item;
  const [isOpen, setIsOpen] = useState(false);

  // Chevron Down Icon
  const ChevronIcon = (
    <svg className="w-3 h-3 ml-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => dropdown && setIsOpen(true)}
      onMouseLeave={() => dropdown && setIsOpen(false)}
    >
      <a href={href || '#'} className="flex items-center cursor-pointer text-sm text-gray-900 hover:text-red-600 font-medium whitespace-nowrap px-1 py-4 transition-colors">
        {name}
        {dropdown && ChevronIcon}
      </a>

      {/* Dropdown Menu */}
      {dropdown && isOpen && (
        <div className="absolute top-full -left-2 mt-0.5 w-48 bg-white shadow-xl rounded-md border border-gray-100 p-2 z-30">
          {subLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block p-2 text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm rounded-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


// --- NavigationBar Component ---
const NavigationBar = () => {


  // Filter links for the left section
  const navItemsLeft = NAV_LINKS.filter(item => item.section === 'left');

  // Filter for right section: exclude 'Home' on desktop for visual symmetry (4 links each side)
  const navItemsRightDesktop = NAV_LINKS.filter(item => item.section === 'right' && item.name !== 'Home');

  // State for overall mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track which dropdown item is currently expanded in the mobile view
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to handle click on mobile navigation items
  const handleMobileClick = (name, isDropdown) => {
    if (isDropdown) {
      // Toggle the dropdown state: if the same one is clicked, close it; otherwise, open the new one.
      setActiveDropdown(activeDropdown === name ? null : name);
    } else {
      // Close the whole mobile menu after clicking a non-dropdown link
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 font-sans relative shadow-sm z-10000">
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-4 lg:px-8 relative">

        {/* 1. Left Section (Hamburger Menu / Desktop Links) */}
        <div className="flex items-center h-full z-10 flex-1 justify-start">

          {/* Mobile Menu Button (Only visible on small screens) */}
          <button
            className="lg:hidden text-gray-900 p-2"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setActiveDropdown(null);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>

          {/* Left Navigation Links (Desktop) */}
          <div className="hidden lg:flex space-x-8">
            {navItemsLeft.map(item => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* 2. Center Section (Logo) - Automatically centered between the two flex-1 side panels */}
        <div className="flex flex-col items-center z-20">
          <img
            src={logo}
            alt="NEXORA BOOK PUBLISHERS LOGO"
            // Logo sizing is w-24 (mobile) and lg:w-32 (desktop)
            className="w-24 lg:min-w-24 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/000000/ffffff?text=Logo"; }}
          />
        </div>

        {/* 3. Right Section (Desktop Links + Icon) - flex-1 and justify-end ensure equal space on the right */}
        <div className="flex items-center h-full z-10 flex-1 justify-end">

          {/* Right Navigation Links (Desktop) */}
          <div className="hidden lg:flex space-x-8 mr-8">
            {navItemsRightDesktop.map(item => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* --- Mobile Menu (Collapsible - Full Width) --- */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] border-t border-gray-100 p-4 shadow-xl' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-1">
          {/* Mobile menu uses ALL links */}
          {NAV_LINKS.map(item => (
            <div key={item.name} className="relative">
              {/* Main link/Dropdown trigger */}
              <a
                href={item.href || '#'} // Use href if available
                onClick={(e) => {
                  if (item.dropdown) e.preventDefault();
                  handleMobileClick(item.name, item.dropdown);
                }}
                className="flex justify-between items-center text-gray-900 hover:bg-gray-50 p-3 rounded-md font-medium w-full cursor-pointer transition-colors"
              >
                {item.name}
                {/* Chevron icon for dropdowns, rotates based on state */}
                {item.dropdown && (
                  <svg
                    className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${activeDropdown === item.name ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </a>

              {/* Collapsible Mobile Sub-Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="flex flex-col pl-6 py-2 space-y-1 bg-gray-50/70 rounded-b-md">
                  {item.subLinks.map((subLink, index) => (
                    <a key={index} href={subLink.href} onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-700 hover:bg-gray-100 text-sm block rounded-md">
                      {subLink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
