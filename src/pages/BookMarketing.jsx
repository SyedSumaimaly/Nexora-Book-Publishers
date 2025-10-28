import React from 'react'
import BookMarketingFormSection from '../component/BookMarketingFormSection'
import MarketingPageAboutSection from '../component/MarketingPageAboutSection'
import MarketingServicesSection from '../component/MarketingServicesSection'
import CounterStats from '../component/CounterStatsData'
import ConsultationCta from '../component/ConsultationCta'
import SliderSection from '../component/SliderSection'
import HowWeOperateSection from '../component/HowWeOperateSection'
import FaqSection from '../component/FaqSection'

function BookMarketing() {
    return (
        <>
            <BookMarketingFormSection />
            <MarketingPageAboutSection />
            <MarketingServicesSection />
            <CounterStats />
            <ConsultationCta />
            <SliderSection />
            <HowWeOperateSection />
            <FaqSection />
        </>
    )
}

export default BookMarketing
