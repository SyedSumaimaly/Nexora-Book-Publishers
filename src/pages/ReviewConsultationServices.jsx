import React from 'react'
import BookReviewBanner from '../component/BookReviewBanner'
import CounterStats from '../component/CounterStatsData'
import ExpertEyeSection from '../component/ExpertEyeSection'
import OurWorkGallery from '../component/OurWorkGallery'
import BookEditingOptionsGrid from '../component/BookEditingOptionsGrid'
import FaqSection from '../component/FaqSection'

function ReviewConsultationServices() {
    return (
        <>
            <BookReviewBanner />
            <CounterStats />
            <ExpertEyeSection />
            <BookEditingOptionsGrid />
            <OurWorkGallery />
            <FaqSection />
        </>
    )
}

export default ReviewConsultationServices
