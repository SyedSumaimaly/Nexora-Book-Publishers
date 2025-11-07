import React from 'react'
import PublicityCampaignsBanner from '../component/PublicityCampaignsBanner';
import CounterStats from '../component/CounterStatsData';
import BookLaunchSection from '../component/BookLaunchSection';
import PublishingShortcutCTA from '../component/PublishingShortcutCTA';
import FaqSection from '../component/FaqSection';



function PublicityCompaigns() {
    return (
        <>
            <PublicityCampaignsBanner />
            <CounterStats />
            <BookLaunchSection />
            <PublishingShortcutCTA />
            <FaqSection />
        </>
    )
}

export default PublicityCompaigns
