import React from 'react'
import InnerBanner from './Sections/InnerBanner'
import OurResourceFilter from '../components/OurResourceFilter'

export default function OurResource() {
    return (
        <>
            <InnerBanner Title={'OUR'} SecountTitle={'RESOURCES'} PageTitle={'Our Resources'} />

        <OurResourceFilter/>

        </>
    )
}
