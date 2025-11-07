import React from 'react'
import InternetMarketingBanner from '../component/InternetMarketingBanner';
import CounterStats from '../component/CounterStatsData';
import InternetMarketingServices from '../component/InternetMarketingServices';
import PublishingShortcutCTA from '../component/PublishingShortcutCTA';
import FaqSection from '../component/FaqSection';


function InternetMarketing() {
    return (
        <>
            <InternetMarketingBanner />
            <CounterStats />
            <InternetMarketingServices />
            <PublishingShortcutCTA />
            <FaqSection />
        </>
    )
}

export default InternetMarketing
