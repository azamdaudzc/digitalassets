import React from 'react'
import SeperateSection from './Sections/SeperateSection'
import Banner from './Sections/Banner'
import fullhome from '../../assets/images/fullhome.png'
import LayoutIndex from '../LayoutIndex';

export default function Profile() {
  return (
    <>

    <Banner  AccessButton={"Yes"} Title={"Profile"} Img={fullhome} />


    <div className='addProductPage'>
        <div className='container'>
            <SeperateSection   AccessForm={"Profile"} Title={'Profile'} />
        </div>
    </div>
    <LayoutIndex />

</>
  )
}
