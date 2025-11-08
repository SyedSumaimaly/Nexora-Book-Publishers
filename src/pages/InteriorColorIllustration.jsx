import React from 'react'
import InteriorColorIllustrationBanner from '../component/InteriorColorIllustrationBanner';
import CounterStats from '../component/CounterStatsData';
import InteriorColorIllustrationServices from '../component/InteriorColorIllustrationServices';
import ElevateBookCtaWithDciImage from '../component/ElevateBookCtaWithDciImage';
import FaqSection from '../component/FaqSection';


function InteriorColorIllustration() {
    return (
        <>
            <InteriorColorIllustrationBanner />
            <CounterStats />
            <InteriorColorIllustrationServices />
            <ElevateBookCtaWithDciImage />
            <FaqSection />
        </>
    )
}

export default InteriorColorIllustration
