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
import Contact from './pages/Contact';
import ThemedScrollBookmark from './component/ThemedScrollBookmark';
import PageNotFound from './component/PageNotFound';



const ALL_PAGES = [
  // --- TOP LEVEL PAGES (5) ---
  { path: '/', name: 'Home', component: HomePage },
  { path: '/story', name: 'Our Story', component: OurStory },
  { path: '/reviews', name: 'Our Reviews', component: Reviews },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact Us', component: Contact },
  { path: '/PageNotFound', name: 'Page Not Found', component: PageNotFound },

  // --- MAIN CATEGORY PAGES (4) ---
  { path: '/book-writing-editing', name: 'Book Writing & Editing', component: BookWriting },
  { path: '/publishing', name: 'Book Publishing', component: BookPublishing },
  { path: '/marketing', name: 'Book Marketing', component: BookMarketing },
  { path: '/design', name: 'Book Design', component: BookDesign },

  // --- WRITING & Editing SUB-PAGES (8) ---
  { path: '/book-writing-editing/book-writing', name: 'Book Writing', component: BookWriting },
  { path: '/book-writing-editing/book-editing', name: 'Book Editing', component: BookEditing },
  { path: '/book-writing-editing/book-coaching', name: 'Book Coaching', component: BookCoaching },
  { path: '/book-writing-editing/business-and-leadership-book', name: 'Business And Leadership Book', component: BusinessLeadership },
  { path: '/book-writing-editing/review-consultation-services', name: 'Review Consultation Services', component: ReviewConsultationServices },
  { path: '/book-writing-editing/developmental', name: 'Developmental Edit', component: DevelopmentalEditing },
  { path: '/book-writing-editing/cover-copy-polish', name: 'Cover Copy Polish', component: CoverCopyPolish },
  { path: '/book-writing-editing/editorial-assessment', name: 'Editorial Assessment', component: EditorialAssessment },

  // --- PUBLISHING SUB-PAGES (5) ---
  { path: '/publishing/starter', name: 'Starter', component: Starter },
  { path: '/publishing/essential', name: 'Essential', component: Essential },
  { path: '/publishing/plus', name: 'Plus', component: Plus },
  { path: '/publishing/elemental', name: 'Elemental', component: Elemental },
  { path: '/publishing/softcover-publishing', name: 'Softcover Publishing', component: SoftcoverPublishing },

  // --- MARKETING SUB-PAGES (2) ---
  { path: '/marketing/publicity-compaigns', name: 'Publicity Compaigns', component: PublicityCompaigns },
  { path: '/marketing/internet-marketing', name: 'Internet Marketing', component: InternetMarketing },

  // --- DESIGN SUB-PAGES (5) ---
  { path: '/design/interior-illustration', name: 'Interior Illustration', component: InteriorIllustration },
  { path: '/design/interior-color-illustration', name: 'Interior Color Illustration', component: InteriorColorIllustration },
  { path: '/design/illustration', name: 'Illustration Services', component: () => <PageContent title="Custom Book Illustration" /> },
  { path: '/design/mockups', name: 'Book Mockups', component: () => <PageContent title="3D Book Mockup Generation" /> },
  { path: '/design/print', name: 'Print Formatting', component: () => <PageContent title="Print-Ready File Formatting" /> },
];



const App = () => {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname.split('?')[0] || '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.split('?')[0] || '/');
    };

    const handleLinkClick = (e) => {

      const target = e.target.closest('a');
      if (target && target.pathname.startsWith('/')) {
        e.preventDefault();

        const newPath = target.pathname;

        window.history.pushState({}, '', newPath);

        setCurrentPath(newPath);

        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // 1. Find the PageNotFound component directly from the array for fallback
  const notFoundPage = ALL_PAGES.find(page => page.path === '/PageNotFound');
  const NotFoundComponent = notFoundPage
    ? notFoundPage.component
    : () => <PageContent title="404 - Component Not Found in List" />; // Secondary fallback

  // 2. Find the current page based on the path
  const currentPage = ALL_PAGES.find(page => page.path === currentPath);

  // 3. Use the matching component or the dedicated PageNotFound component as a fallback
  const PageComponent = currentPage
    ? currentPage.component
    : NotFoundComponent;

  return (

    <Layout>
      <PageComponent />
      <ThemedScrollBookmark />
    </Layout>

  );
};

export default App;