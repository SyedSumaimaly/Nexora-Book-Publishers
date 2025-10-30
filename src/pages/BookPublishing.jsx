import React from 'react'
import BookPublishingBanner from '../component/BookPublishingBanner'
import AuthorMarkSection from '../component/AuthorMarkSection'
import ConsultationCta from '../component/ConsultationCta'
import SliderSection from '../component/SliderSection'
import HowWeOperateSection from '../component/HowWeOperateSection'
import FaqSection from '../component/FaqSection'

function BookPublishing() {
    return (
        <>
            <BookPublishingBanner />
            <AuthorMarkSection />
            <ConsultationCta />
            <SliderSection />
            <HowWeOperateSection />
            <FaqSection />

        </>
    )
}

export default BookPublishing
