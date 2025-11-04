import React from 'react'
import CoverCopyPolishBanner from '../component/CoverCopyPolishBanner'
import CounterStats from '../component/CounterStatsData'
import BookCoverInfo from '../component/BookCoverInfo'
import ConsultationSection from '../component/ConsultationSection'
import FaqSection from '../component/FaqSection'

function CoverCopyPolish() {
    return (
        <>
            <CoverCopyPolishBanner />
            <CounterStats />
            <BookCoverInfo />
            <ConsultationSection />
            <FaqSection />
        </>
    )
}

export default CoverCopyPolish
