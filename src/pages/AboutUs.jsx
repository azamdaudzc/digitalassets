import React from 'react'
import InnerBanner from './Sections/InnerBanner'
import Statistics from './Sections/Statistics'
import FlexibleDigitalServices from './Sections/FlexibleDigitalServices'
import AboutLastSec from './Sections/AboutLastSec'

export default function AboutUs() {
  return (
    <>
    
             <InnerBanner  Title={'ABOUT'} SecountTitle={'US'} PageTitle={'About US'} />
             
             <Statistics PaddingTop={'58px'} />
    
                <FlexibleDigitalServices/>

                <AboutLastSec/>
    </>
  )
}
