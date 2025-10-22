import React from 'react'
import BookCoachingBanner from '../component/BookCoachingBanner'
import CounterStatsData from '../component/CounterStatsData'
import BookElevationSection from '../component/BookElevationSection'
import BookEditingOptionsGrid from '../component/BookEditingOptionsGrid'
import OurWorkGallery from '../component/OurWorkGallery'
import FaqSection from '../component/FaqSection'

function BookCoaching() {
    return (
        <>
            <BookCoachingBanner />
            <CounterStatsData />
            <BookElevationSection />
            <BookEditingOptionsGrid />
            <OurWorkGallery />
            <FaqSection />
        </>
    )
}

export default BookCoaching
