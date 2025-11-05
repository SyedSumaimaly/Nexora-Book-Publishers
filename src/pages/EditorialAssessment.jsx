import React from 'react'
import EditorialBanner from '../component/EditorialBanner'
import CounterStats from '../component/CounterStatsData'
import ManuscriptXRay from '../component/ManuscriptXRay'
import EditorialAssessmentSignup from '../component/EditorialAssessmentSignup'
import FaqSection from '../component/FaqSection'

function EditorialAssessment() {
    return (
        <>
            <EditorialBanner />
            <CounterStats />
            <ManuscriptXRay />
            <EditorialAssessmentSignup />
            <FaqSection />
        </>
    )
}

export default EditorialAssessment
