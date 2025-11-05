import React from 'react'
import EditorialBanner from '../component/EditorialBanner'
import CounterStats from '../component/CounterStatsData'
import ManuscriptXRay from '../component/ManuscriptXRay'
import EditorialAssessmentSignup from '../component/EditorialAssessmentSignup'

function EditorialAssessment() {
    return (
        <>
            <EditorialBanner />
            <CounterStats />
            <ManuscriptXRay />
            <EditorialAssessmentSignup />
        </>
    )
}

export default EditorialAssessment
