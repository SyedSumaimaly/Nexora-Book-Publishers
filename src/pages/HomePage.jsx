import React from 'react'
import Banner from '../component/Banner'
import VideoSection from '../component/VideoSection'
import ChartTopperSlider from '../component/ChartTopperSlider'
import CounterStats from '../component/CounterStatsData'
import AboutArea from '../component/AboutArea'
import ServicesArea from '../component/ServicesArea'
import CtaSection from '../component/CtaSection'
import ConsultationCta from '../component/ConsultationCta'
import SliderSection from '../component/SliderSection'
import SliderPlaceholder from '../component/SliderPlaceholder'
import HowWeOperateSection from '../component/HowWeOperateSection'
import FaqSection from '../component/FaqSection'

function HomePage() {
    return (
        <>
            <Banner />
            <VideoSection />
            <ChartTopperSlider />
            <CounterStats />
            <AboutArea />
            <ServicesArea />
            <CtaSection />
            <ConsultationCta />
            <SliderSection />
            <SliderPlaceholder />
            <HowWeOperateSection />
            <FaqSection />
        </>
    )
}

export default HomePage
