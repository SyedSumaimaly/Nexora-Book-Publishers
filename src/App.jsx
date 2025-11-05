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


const ALL_PAGES = [
  // --- TOP LEVEL PAGES (5) ---
  { path: '#home', name: 'Home', component: HomePage },
  { path: '#story', name: 'Our Story', component: OurStory },
  { path: '#reviews', name: 'Our Reviews', component: () => <PageContent title="Our Reviews" /> },
  { path: '#portfolio', name: 'Portfolio', component: () => <PageContent title="Portfolio" /> },
  { path: '#contact', name: 'Contact Us', component: () => <PageContent title="Contact Us" /> },

  // --- MAIN CATEGORY PAGES (5) ---
  { path: '#writing', name: 'Book Writing', component: BookWriting },
  { path: '#editing', name: 'Book Editing', component: BookEditing },
  { path: '#publishing', name: 'Book Publishing', component: BookPublishing },
  { path: '#marketing', name: 'Book Marketing', component: BookMarketing },
  { path: '#design', name: 'Book Design', component: BookDesign },

  // --- WRITING SUB-PAGES (6) ---
  { path: '#writing/book-coaching', name: 'Book Coaching', component: BookCoaching },
  { path: '#writing/technical', name: 'Technical Writing', component: () => <PageContent title="Technical Manuals & Documentation" /> },
  { path: '#writing/business-and-leadership-book', name: 'Business And Leadership Book', component: BusinessLeadership },

  // --- EDITING SUB-PAGES (6) ---
  { path: '#editing/review-consultation-services', name: 'Review Consultation Services', component: ReviewConsultationServices },
  { path: '#editing/developmental', name: 'Developmental Edit', component: DevelopmentalEditing },
  { path: '#editing/cover-copy-polish', name: 'Cover Copy Polish', component: CoverCopyPolish },
  { path: '#editing/editorial-assessment', name: 'Editorial Assessment', component: EditorialAssessment },
  { path: '#editing/copyediting', name: 'Copyediting', component: () => <PageContent title="Copyediting (Flow & Consistency)" /> },
  { path: '#editing/line', name: 'Line Editing', component: () => <PageContent title="Line Editing (Style & Tone)" /> },
  { path: '#editing/proofreading', name: 'Proofreading', component: () => <PageContent title="Proofreading (Final Polish)" /> },
  { path: '#editing/critique', name: 'Manuscript Critique', component: () => <PageContent title="Manuscript Critique & Feedback" /> },
  { path: '#editing/query', name: 'Query Letter Review', component: () => <PageContent title="Agent Query Letter Review" /> },

  // --- PUBLISHING SUB-PAGES (6) ---
  { path: '#publishing/starter', name: 'Starter', component: Starter },
  { path: '#publishing/essential', name: 'Starter', component: Essential },
  { path: '#publishing/plus', name: 'Starter', component: Plus },
  { path: '#publishing/traditional', name: 'Traditional Submissions', component: () => <PageContent title="Traditional Publishing Submission Support" /> },
  { path: '#publishing/distribution', name: 'Distribution Setup', component: () => <PageContent title="Book Distribution Management" /> },
  { path: '#publishing/pod', name: 'Print-on-Demand', component: () => <PageContent title="Print-on-Demand Setup" /> },
  { path: '#publishing/ebook', name: 'Ebook Conversion', component: () => <PageContent title="Ebook Formatting & Conversion" /> },
  { path: '#publishing/legal', name: 'ISBN & Copyright', component: () => <PageContent title="ISBN Assignment & Copyright Registration" /> },

  // --- MARKETING SUB-PAGES (6) ---
  { path: '#marketing/social', name: 'Social Media Campaign', component: () => <PageContent title="Full Social Media Campaign Management" /> },
  { path: '#marketing/launch', name: 'Launch Strategy', component: () => <PageContent title="Book Launch Strategy & Planning" /> },
  { path: '#marketing/trailer', name: 'Book Trailer Production', component: () => <PageContent title="Professional Book Trailer Video" /> },
  { path: '#marketing/website', name: 'Author Website Design', component: () => <PageContent title="Custom Author Website Development" /> },
  { path: '#marketing/pr', name: 'PR & Media Outreach', component: () => <PageContent title="Public Relations & Media Outreach" /> },
  { path: '#marketing/ads', name: 'Ad Management', component: () => <PageContent title="Paid Advertisement Management" /> },

  // --- DESIGN SUB-PAGES (6) ---
  { path: '#design/cover', name: 'Cover Design Premium', component: () => <PageContent title="Premium Book Cover Design" /> },
  { path: '#design/interior', name: 'Interior Layout', component: () => <PageContent title="Book Interior Layout & Typesetting" /> },
  { path: '#design/brand', name: 'Brand Identity', component: () => <PageContent title="Author Brand Identity Package" /> },
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