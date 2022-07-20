import React from 'react'
import BestSellers from './BestSellers'
import Header from './Header'
import OurProducts from './OurProducts'
import SupportingGroup from './SupportingGroup'

function Home() {
    return (
        <div>
            <Header />
            <OurProducts />
            <BestSellers />
            <SupportingGroup />
        </div>
    )
}

export default Home