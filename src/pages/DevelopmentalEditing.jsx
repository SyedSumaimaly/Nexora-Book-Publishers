import React from 'react'
import DevelopmentalEditingBanner from '../component/DevelopmentalEditingBanner'
import CounterStats from '../component/CounterStatsData'
import ExpertEyeSection from '../component/ExpertEyeSection'
import BookEditingOptionsGrid from '../component/BookEditingOptionsGrid'
import OurWorkGallery from '../component/OurWorkGallery'
import FaqSection from '../component/FaqSection'

function DevelopmentalEditing() {
    return (
        <>
            <DevelopmentalEditingBanner />
            <CounterStats />
            <ExpertEyeSection />
            <BookEditingOptionsGrid />
            <OurWorkGallery />
            <FaqSection />
        </>
    )
}

export default DevelopmentalEditing
