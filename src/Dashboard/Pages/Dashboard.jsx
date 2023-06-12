import React from 'react'
import Banner from './Sections/Banner'
import Card from '../Components/Card'
import dollarCircle from "../../assets/images/dollarCircle.png";
import downloafile from "../../assets/images/downloafile.png";
import Cubes from "../../assets/images/Cubes.png";
import ScrollSection from './Sections/ScrollSection';
import fullhome from '../../assets/images/fullhome.png'
import goldcard1 from '../../assets/images/goldcard1.png'
import goldcard2 from '../../assets/images/goldcard2.png'
import goldcard3 from '../../assets/images/goldcard3.png'
import { useDispatch, useSelector } from "react-redux";  
import Index from "../LayoutIndex";


export default function Dashboard() {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;


    const DataArry = [
        {
            title: 'Total Products',
            Image: dollarCircle,
            Image2: goldcard2,
            Count: '50+'

        },
        {
            title: 'Total Downloads',
            Image: downloafile,
            Image2: goldcard1,
            Count: '150+'

        },
        {
            title: 'Total Sales',
            Image: Cubes,
            Image2: goldcard3,
            Count: '100+'

        },
    ]
 

    return (
        <>

        
            <Banner  Title={"Dashboard"} Img={fullhome} />
  
            <div className='UpperBoxContent'>
                <div className='container'>

                    <div className='row'>
                        {

                            DataArry.map((item) => (
                                <>
                                    <div className='col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                                        <Card title={item.title} Image={theme_class === 'dark' ? item.Image : item.Image2} Count={item.Count} />
                                    </div>
                                </>
                            ))

                        }
                    </div>
                </div>
            </div>


            <div className='innerProductSection'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-4 col-xl-4 col-xxl-4 col-md-4'>
                            <ScrollSection  Pagination={"No"} Search={'No'}   Title={'Recent Downloads'} AccessPrice={"No"}  />
                        </div>
                        <div className='col-12 col-lg-8 col-xl-8 col-xxl-8 col-md-8'>
                            <ScrollSection Pagination={"No"} Search={'No'}  Title={'Recent Products'} />
                        </div>
                    </div>
                </div>
            </div>

                        <Index/>


        </>
    )
}
