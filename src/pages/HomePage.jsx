import React, { useState } from 'react'
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
import ContactModal from '../component/ContactModal'

function HomePage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Banner openModal={openModal} />
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

            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default HomePage
