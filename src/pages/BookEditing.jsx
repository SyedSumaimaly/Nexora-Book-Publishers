import React from 'react'
import BookEditingSection from '../component/BookEditingSection'
import PolishingDiamondsSection from '../component/PolishingDiamondsSection'
import CounterStats from '../component/CounterStatsData'
import BookEditingExpertiseSection from '../component/BookEditingExpertiseSection'
import ConsultationCta from '../component/ConsultationCta'
import SliderSection from '../component/SliderSection'
import HowWeOperateSection from '../component/HowWeOperateSection'
import FaqSection from '../component/FaqSection'

function BookEditing() {
    return (
        <>
            <BookEditingSection />
            <PolishingDiamondsSection />
            <BookEditingExpertiseSection />
            <ConsultationCta />
            <CounterStats />
            <SliderSection />
            <HowWeOperateSection />
            <FaqSection />
        </>
    )
}

export default BookEditing
