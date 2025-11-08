import React from 'react'
import CustomerReviewsBanner from '../component/CustomerReviewsBanner';
import CounterStats from '../component/CounterStatsData';
import CustomerReviewGrid from '../component/CustomerReviewGrid';
import FaqSection from '../component/FaqSection';

function Reviews() {
    return (
        <>
            <CustomerReviewsBanner />
            <CounterStats />
            <CustomerReviewGrid />
            <FaqSection />
        </>
    )
}

export default Reviews
