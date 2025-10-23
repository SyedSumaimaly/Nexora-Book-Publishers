import React from 'react'
import BookMarketingFormSection from '../component/BookMarketingFormSection'
import MarketingPageAboutSection from '../component/MarketingPageAboutSection'
import MarketingServicesSection from '../component/MarketingServicesSection'
import CounterStats from '../component/CounterStatsData'
import CtaSection from '../component/CtaSection'
import ConsultationCta from '../component/ConsultationCta'

function BookMarketing() {
    return (
        <>
            <BookMarketingFormSection />
            <MarketingPageAboutSection />
            <MarketingServicesSection />
            <CounterStats />
            <ConsultationCta /> 
        </>
    )
}

export default BookMarketing
