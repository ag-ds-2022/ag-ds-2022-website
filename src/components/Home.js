import React from 'react'
import AboutUs from './AboutUs'
import BestSellers from './BestSellers'
import ContactUs from './ContactUs'
import Header from './Header'
import OurProducts from './OurProducts'
import SupportingGroup from './SupportingGroup'

function Home() {
    return (
        <div>
            <Header />
            <AboutUs />
            <OurProducts />
            <BestSellers />
            <ContactUs />
            {/* <SupportingGroup /> */}
        </div>
    )
}

export default Home