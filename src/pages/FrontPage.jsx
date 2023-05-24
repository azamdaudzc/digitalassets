import React from 'react'
import Statistics from './Sections/Statistics'
import BrowseByCategory from './Sections/BrowseByCategory'
import ExclusiveDigital from './Sections/ExclusiveDigital'
import TopSellers from './Sections/TopSellers'
import BannerSection from './Sections/BannerSection'
import FooterSection from './Sections/FooterSection' 

export default function FrontPage({style}) {

  
  
  return (
    <>
      {/* preloader start here */}
      {/* <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div> */}
      {/* preloader ending here */}

      

      <BannerSection />
     

      <Statistics />

      <BrowseByCategory />

      <ExclusiveDigital />

      <TopSellers />

      {/* ===============//footer section start here \\================= */}
    
      {/* ===============//footer section end here \\================= */}
      {/* scrollToTop start here */}
      <a href="#" className="scrollToTop"><i className="icofont-stylish-up" /></a>
      {/* scrollToTop ending here */}
    </>
  )
}
