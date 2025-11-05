import React from 'react'
import EssentialHeroSection from '../component/EssentialHeroSection';
import CounterStats from '../component/CounterStatsData';
import EssentialPackageDetails from '../component/EssentialPackageDetails';
import EssentialBookElevationSection from '../component/EssentialBookElevationSection';
import FaqSection from '../component/FaqSection';


function Essential() {
    return (
        <>
            <EssentialHeroSection />
            <CounterStats />
            <EssentialPackageDetails />
            <EssentialBookElevationSection />
            <FaqSection />
        </>
    )
}

export default Essential
