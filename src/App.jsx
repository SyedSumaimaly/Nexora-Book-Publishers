import React, { useState, useEffect } from 'react';

import Layout from './component/Layout';
import PageContent from './component/PageContent';
import HomePage from './pages/HomePage'
import BookWriting from './pages/BookWriting';
import { NAV_LINKS } from './component/NavigationBar';
import BookCoaching from './pages/BookCoaching';
import BookMarketing from './pages/BookMarketing';
import BookEditing from './pages/BookEditing';
import BookPublishing from './pages/BookPublishing';
import BookDesign from './pages/BookDesign';
import OurStory from './pages/OurStory';
import BusinessLeadership from './pages/BusinessLeadership';
import ReviewConsultationServices from './pages/ReviewConsultationServices';
import DevelopmentalEditing from './pages/DevelopmentalEditing';
import CoverCopyPolish from './pages/CoverCopyPolish';
import EditorialAssessment from './pages/EditorialAssessment';
import Starter from './pages/Starter';
import Essential from './pages/Essential';
import Plus from './pages/Plus';
import Elemental from './pages/Elemental';
import SoftcoverPublishing from './pages/SoftcoverPublishing';
import PublicityCompaigns from './pages/PublicityCompaigns';
import InternetMarketing from './pages/InternetMarketing';
import InteriorIllustration from './pages/InteriorIllustration';
import InteriorColorIllustration from './pages/InteriorColorIllustration';
import Reviews from './pages/Reviews';
import Portfolio from './pages/PortfolioPage';



const ALL_PAGES = [
  // --- TOP LEVEL PAGES (5) ---
  { path: '#home', name: 'Home', component: HomePage },
  { path: '#story', name: 'Our Story', component: OurStory },
  { path: '#reviews', name: 'Our Reviews', component: Reviews },
  { path: '#portfolio', name: 'Portfolio', component: Portfolio },
  { path: '#contact', name: 'Contact Us', component: () => <PageContent title="Contact Us" /> },

  // --- MAIN CATEGORY PAGES (5) ---
  { path: '#writing', name: 'Book Writing', component: BookWriting },
  { path: '#editing', name: 'Book Editing', component: BookEditing },
  { path: '#publishing', name: 'Book Publishing', component: BookPublishing },
  { path: '#marketing', name: 'Book Marketing', component: BookMarketing },
  { path: '#design', name: 'Book Design', component: BookDesign },

  // --- WRITING SUB-PAGES (6) ---
  { path: '#writing/book-coaching', name: 'Book Coaching', component: BookCoaching },
  { path: '#writing/business-and-leadership-book', name: 'Business And Leadership Book', component: BusinessLeadership },

  // --- EDITING SUB-PAGES (6) ---
  { path: '#editing/review-consultation-services', name: 'Review Consultation Services', component: ReviewConsultationServices },
  { path: '#editing/developmental', name: 'Developmental Edit', component: DevelopmentalEditing },
  { path: '#editing/cover-copy-polish', name: 'Cover Copy Polish', component: CoverCopyPolish },
  { path: '#editing/editorial-assessment', name: 'Editorial Assessment', component: EditorialAssessment },

  // --- PUBLISHING SUB-PAGES (6) ---
  { path: '#publishing/starter', name: 'Starter', component: Starter },
  { path: '#publishing/essential', name: 'Essential', component: Essential },
  { path: '#publishing/plus', name: 'Plus', component: Plus },
  { path: '#publishing/elemental', name: 'Elemental', component: Elemental },
  { path: '#publishing/softcover-publishing', name: 'Softcover Publishing', component: SoftcoverPublishing },

  // --- MARKETING SUB-PAGES (6) ---
  { path: '#marketing/publicity-compaigns', name: 'Publicity Compaigns', component: PublicityCompaigns },
  { path: '#marketing/internet-marketing', name: 'Internet Marketing', component: InternetMarketing },

  // --- DESIGN SUB-PAGES (6) ---
  { path: '#design/interior-illustration', name: 'Interior Illustration', component: InteriorIllustration },
  { path: '#design/interior-color-illustration', name: 'Interior Color Illustration', component: InteriorColorIllustration },
  { path: '#design/illustration', name: 'Illustration Services', component: () => <PageContent title="Custom Book Illustration" /> },
  { path: '#design/mockups', name: 'Book Mockups', component: () => <PageContent title="3D Book Mockup Generation" /> },
  { path: '#design/print', name: 'Print Formatting', component: () => <PageContent title="Print-Ready File Formatting" /> },
];


// --- Main App Component (Router) ---
const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.split('?')[0];
      setCurrentPath(hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const currentPage = ALL_PAGES.find(page => page.path === currentPath);
  const PageComponent = currentPage
    ? currentPage.component
    : () => <PageContent title="404 - Page Not Found" />; // Use the imported PageContent

    
  return (

    <Layout>
      <PageComponent />
    </Layout>

  );
};

export default App;