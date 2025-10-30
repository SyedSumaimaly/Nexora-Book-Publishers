import React from 'react'
import CoverDesignSection from '../component/CoverDesignSection'
import CounterStats from '../component/CounterStatsData'
import CoverDesignFeatures from '../component/CoverDesignFeatures'
import ElevateBookSection from '../component/ElevateBookSection'
import FaqSection from '../component/FaqSection'


function BookDesign() {
    return (
        <>
            <CoverDesignSection />
            <CounterStats />
            <CoverDesignFeatures />
            <ElevateBookSection />
            <FaqSection />
        </>
    )
}

export default BookDesign
