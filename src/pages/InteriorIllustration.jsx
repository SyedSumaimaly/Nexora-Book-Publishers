import React from 'react'
import InteriorIllustrationBanner from '../component/InteriorIllustrationBanner';
import CounterStats from '../component/CounterStatsData';
import BlackAndWhiteIllustrationServices from '../component/BlackAndWhiteIllustrationServices';
import IllustrationBookElevationCta from '../component/IllustrationBookElevationCta';
import FaqSection from '../component/FaqSection';

function InteriorIllustration() {
    return (
        <>
            <InteriorIllustrationBanner />
            <CounterStats />
            <BlackAndWhiteIllustrationServices />
            <IllustrationBookElevationCta />
            <FaqSection />
        </>
    )
}

export default InteriorIllustration
