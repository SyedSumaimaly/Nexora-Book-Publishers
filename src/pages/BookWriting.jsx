import React from 'react'
import MarketingBannerSection from '../component/MarketingBannerSection'
import CounterStats from '../component/CounterStatsData'
import ServicesArea from '../component/ServicesArea'
import MarketingAboutSection from '../component/MarketingAboutSection'
import ConsultationCta from '../component/ConsultationCta'
import SliderSection from '../component/SliderSection'

function BookWriting() {
    return (
        <>
            <MarketingBannerSection />
            <ServicesArea />
            <MarketingAboutSection />
            <CounterStats />
            <ConsultationCta />
            <SliderSection />
        </>
    )
}

export default BookWriting
