import React from 'react'
import SoftcoverPublishingBanner from '../component/SoftcoverPublishingBanner';
import CounterStats from '../component/CounterStatsData';
import SoftcoverPublishingDetails from '../component/SoftcoverPublishingDetails';
import EssentialBookElevationSection from '../component/EssentialBookElevationSection';
import FaqSection from '../component/FaqSection';



function SoftcoverPublishing() {
    return (
        <>
            <SoftcoverPublishingBanner />
            <CounterStats />
            <SoftcoverPublishingDetails />
            <EssentialBookElevationSection />
            <FaqSection />

        </>
    )
}

export default SoftcoverPublishing
