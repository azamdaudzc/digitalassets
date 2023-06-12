import React from 'react'
import Banner from './Sections/Banner'
import Card from '../Components/Card'
import dollarCircle from "../../assets/images/dollarCircle.png";
import downloafile from "../../assets/images/downloafile.png";
import Cubes from "../../assets/images/Cubes.png";
import ScrollSection from './Sections/ScrollSection';
import fullhome from '../../assets/images/fullhome.png'
import SalesCard from '../Components/SalesCard';


import greenarrw from '../../assets/images/greenarrw.png'
import redarriw from '../../assets/images/redarriw.png'
import SalesFilter from './Sections/SalesFilter';
import LayoutIndex from '../LayoutIndex';
import Data from '../Components/SalesData/Date'
import User from '../Components/SalesData/User';
import Product from '../Components/SalesData/Product';
import Price from '../Components/SalesData/Price';
import FilterData from './Sections/FilterData';


export default function Sales() {

    localStorage.setItem('page', 'Sales');

    const DataArry = [
        {
            title: 'This Month Sales',
            Image: dollarCircle,
            Count: '$ 2500',
            arrow: greenarrw
        },
        {
            title: 'Last Month Sales',
            Image: downloafile,
            Count: '$ 1800',
            arrow: redarriw

        },
        {
            title: 'Overall Sales',
            Image: Cubes,
            Count: '$ 5000',
            arrow: 'greenarrw'

        },
    ]


    const Box_arr = [{
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 2,
    },

    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 2,
    }, {
        id: 2,
    },
    {
        id: 2,
    },

    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 2,
    },

    ]

    return (
        <>

            <Banner AccessButton={"no"} Title={"Sales"} Img={fullhome} />


            <div className='UpperBoxContent sales'>
                <div className='container'>

                    <div className='row'>
                        {

                            DataArry.map((item) => (
                                <>
                                    <div className='col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                                        <SalesCard arrow={item.arrow} title={item.title} Image={item.Image} Count={item.Count} />
                                    </div>
                                </>
                            ))

                        }
                    </div>
                </div>
            </div>


            <div className='container Filter_sales'>
                <SalesFilter />
            </div>

            <div className='container sales FIlterData'>
                <div className="newr">

                    {

                        Box_arr.map((item) => (
                            <>
                                <FilterData />
                            </>
                        ))

                    }



                </div>
            </div>

            <LayoutIndex />
        </>
    )
}
