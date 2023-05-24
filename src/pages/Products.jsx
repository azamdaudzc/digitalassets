import React from 'react'
import InnerBanner from './Sections/InnerBanner'
import ProductFilter from '../components/ProductFilter'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <>
            <InnerBanner Title={'OUR'} SecountTitle={'RESOURCES'} PageTitle={'Our Resources'} />
           
            <ProductFilter />
                           
            

        </>
    )
}
