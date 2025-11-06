import React from 'react'
import ElementalHeroSection from '../component/ElementalHeroSection';
import CounterStats from '../component/CounterStatsData';
import ElementalPackageDetails from '../component/ElementalPackageDetails';
import EssentialBookElevationSection from '../component/EssentialBookElevationSection';
import FaqSection from '../component/FaqSection';



function Elemental() {
    return (
        <>
            <ElementalHeroSection />
            <CounterStats />
            <ElementalPackageDetails />
            <EssentialBookElevationSection />
            <FaqSection />
        </>
    )
}

export default Elemental
