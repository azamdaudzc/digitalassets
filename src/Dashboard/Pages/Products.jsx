import React from 'react'
import Banner from './Sections/Banner'
import Complete from "../../assets/images/Complete.png";
import ScrollSection from './Sections/ScrollSection';

import LayoutIndex from '../LayoutIndex';

export default function Products() {
    return (
        <>

            <Banner Title={"Products"}   AccessButton={"addProduct"}  Img={Complete} />


            <div className='ProductDOwnlloadSection'>

                <div className='container'>
                    <ScrollSection  AccessButton={'Dots'}  height={'622px'} Title={'Products'} />
                </div>

            </div>

            <LayoutIndex />

        </>
    )
}
