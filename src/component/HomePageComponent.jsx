import React from 'react'
import Banner from './Banner'
import VideoSection from './VideoSection'
import ChartTopperSlider from './ChartTopperSlider'
import CounterStats from './CounterStatsData'
import AboutArea from './AboutArea'
import ServicesArea from './ServicesArea'
import CtaSection from './CtaSection'
import ConsultationCta from './ConsultationCta'
import SliderSection from './SliderSection'
import SliderPlaceholder from './SliderPlaceholder'
import HowWeOperateSection from './HowWeOperateSection'


function HomePageComponent() {
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
            <HowWeOperateSection/>
        </>
    )
}

export default HomePageComponent
