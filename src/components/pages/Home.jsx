import React from 'react'

import Bannar from '../Bannar'
import TopSell from '../layer/TopSell'
import NewArrivals from '../NewArrivals'
import BestSeller from '../layer/BestSeller'
import AnotherBanner from '../layer/AnotherBanner'
import SpecialOffers from '../layer/SpecialOffers'

const Home = () => {
    return (
        <>
            <Bannar />
            <TopSell />
            <NewArrivals />
            <BestSeller />
            <AnotherBanner />
            <SpecialOffers />


        </>
    )
}

export default Home