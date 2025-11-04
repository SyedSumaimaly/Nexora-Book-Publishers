import React from 'react'
import BusinessBookGhostwritingBanner from '../component/BusinessBookGhostwritingBanner'
import CounterStats from '../component/CounterStatsData'
import BookElevationSection from '../component/BookElevationSection'
import BookEditingOptionsGrid from '../component/BookEditingOptionsGrid'
import OurWorkGallery from '../component/OurWorkGallery'
import FaqSection from '../component/FaqSection'

function BusinessLeadership() {
    return (
        <>
            <BusinessBookGhostwritingBanner />
            <CounterStats />
            <BookElevationSection />
            <BookEditingOptionsGrid />
            <OurWorkGallery />
            <FaqSection />
        </>
    )
}

export default BusinessLeadership
