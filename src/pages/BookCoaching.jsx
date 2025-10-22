import React from 'react'
import BookCoachingBanner from '../component/BookCoachingBanner'
import CounterStatsData from '../component/CounterStatsData'
import BookElevationSection from '../component/BookElevationSection'
import BookEditingOptionsGrid from '../component/BookEditingOptionsGrid'

function BookCoaching() {
    return (
        <>
            <BookCoachingBanner />
            <CounterStatsData />
            <BookElevationSection />
            <BookEditingOptionsGrid />
        </>
    )
}

export default BookCoaching
