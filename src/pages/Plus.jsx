import React from 'react'
import PlusHeroSection from '../component/PlusHeroSection';
import CounterStats from '../component/CounterStatsData';
import PlusPackageDetails from '../component/PlusPackageDetails';
import EssentialBookElevationSection from '../component/EssentialBookElevationSection';
import FaqSection from '../component/FaqSection';


function Plus() {
    return (
        <>
            <PlusHeroSection />
            <CounterStats />
            <PlusPackageDetails />
            <EssentialBookElevationSection />
            <FaqSection />
        </>
    )
}

export default Plus
