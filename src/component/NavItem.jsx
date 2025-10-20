import React from 'react'

function NavItem({ item }) {
    const { name, dropdown, subLinks, href } = item;
    const [isOpen, setIsOpen] = useState(false);

    // Chevron Down Icon (inline SVG for simplicity and consistency)
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
}

export default NavItem
