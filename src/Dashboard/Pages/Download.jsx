import React from 'react'
import Banner from './Sections/Banner'
import Complete from "../../assets/images/Complete.png";
import ScrollSection from './Sections/ScrollSection';
import LayoutIndex from '../LayoutIndex';



export default function Download() {

    localStorage.setItem('page', 'downloads');




    return (
        <>



            <Banner Title={"Download"} Img={Complete} />

            <div className='ProductDOwnlloadSection'>

                <div className='container'>
                    <ScrollSection AccessButton={'DOWNLOAD'} height={'580px'} Title={'Products Download'} />
                </div>

            </div>
            <LayoutIndex />

        </>
    )
}
