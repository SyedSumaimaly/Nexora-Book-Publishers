import React from 'react'
import Banner from './Banner'
import VideoSection from './VideoSection'
import ChartTopperSlider from './ChartTopperSlider'
import CounterStats from './CounterStatsData'
import AboutArea from './AboutArea'

function HomePageComponent() {
    return (
        <>
            <Banner />
            <VideoSection />
            <ChartTopperSlider />
            <CounterStats/>
            <AboutArea/>
        </>
    )
}

export default HomePageComponent
