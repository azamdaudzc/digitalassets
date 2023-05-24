import React from 'react'
import InnerBanner from './Sections/InnerBanner'
import RowProduct from '../components/RowProduct'
import CheckoutProductRow from '../components/CheckoutProductRow'
import CheckOutForm from '../components/CheckOutForm'
import { useDispatch, useSelector } from "react-redux";


export default function CheckoutPage() {




 const { message } = useSelector((state) => state.message);
    const theme_class = message;


    const Box_arr = [
        {
            id: 1,
            count: '05',
        }
    ]

    return (
        <>

            <InnerBanner Title={'CHECK'} SecountTitle={'OUT'} PageTitle={'Checkout'} />


            <div className={'checkoutPageBg' + ' '+ theme_class+'-bg'}>
            <div className='container'>
               

            <CheckoutProductRow option={'no'} classs={'next'} />


        <CheckOutForm/>

            </div>
            </div>


        </>
    )
}
