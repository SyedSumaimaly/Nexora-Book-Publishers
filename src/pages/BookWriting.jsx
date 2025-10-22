import React from 'react'
import MarketingBannerSection from '../component/MarketingBannerSection'
import CounterStats from '../component/CounterStatsData'
import ServicesArea from '../component/ServicesArea'
import MarketingAboutSection from '../component/MarketingAboutSection'
import ConsultationCta from '../component/ConsultationCta'
import SliderSection from '../component/SliderSection'
import HowWeOperateSection from '../component/HowWeOperateSection'
import FaqSection from '../component/FaqSection'


function BookWriting() {
    return (
        <>
            <MarketingBannerSection />
            <ServicesArea />
            <MarketingAboutSection />
            <CounterStats />
            <ConsultationCta />
            <SliderSection />
            <HowWeOperateSection />
            <FaqSection />
        </>
    )
}

export default BookWriting
