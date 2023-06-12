import React from 'react'
import SeperateSection from './Sections/SeperateSection'
import Banner from './Sections/Banner'
import fullhome from '../../assets/images/fullhome.png'
import { useDispatch, useSelector } from "react-redux";
import LayoutIndex from '../LayoutIndex';

export default function AddProduct() {
    const { message } = useSelector((state) => state.message);

    const theme_class = message;

    return (
        <>

            <Banner Title={"Add Product"} Img={fullhome} />


            <div className={'addProductPage'}>
                <div className='container'>
                    <SeperateSection Title={'Add Product'} />
                </div>
            </div>
            <LayoutIndex />

        </>
    )
}
