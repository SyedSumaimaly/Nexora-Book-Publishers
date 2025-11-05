import React from 'react'
import StarterPackageBanner from '../component/StarterPackageBanner';
import CounterStats from '../component/CounterStatsData'
import StarterPackageDetails from '../component/StarterPackageDetails';
import PublishingShortcutCTA from '../component/PublishingShortcutCTA';
import FaqSection from '../component/FaqSection'



function Starter() {
    return (
        <>
            <StarterPackageBanner />
            <CounterStats />
            <StarterPackageDetails />
            <PublishingShortcutCTA />
            <FaqSection />
        </>
    )
}

export default Starter
