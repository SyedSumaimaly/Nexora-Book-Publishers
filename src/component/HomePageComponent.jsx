import React from 'react'
import Banner from './Banner'
import VideoSection from './VideoSection'
import ChartTopperSlider from './ChartTopperSlider'
import CounterStats from './CounterStatsData'
import AboutArea from './AboutArea'
import ServicesArea from './ServicesArea'

function HomePageComponent() {
    return (
        <>
            <Banner />
            <VideoSection />
            <ChartTopperSlider />
            <CounterStats />
            <AboutArea />
            <ServicesArea />
        </>
    )
}

export default HomePageComponent
