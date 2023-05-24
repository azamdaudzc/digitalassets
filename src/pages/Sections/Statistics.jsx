import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import StatistiscBox from '../../components/StatistiscBox'
import Divider from '../../components/Divider';
import Image1 from "../../assets/images/statistic1.png";
import Image2 from "../../assets/images/statistic2.png";
import Image3 from "../../assets/images/statistic3.png";
import Image4 from "../../assets/images/statistic4.png";
import Image5 from "../../assets/images/statistic5.png";



export default function Statistics({PaddingTop}) {

    const { message } = useSelector((state) => state.message);

    const theme_class = message;

    const Box_arr = [
        {
            id: 1,
            count: '05',
            img: Image1,
        },
        {
            id: 2,
            count: '10',
            img: Image2,
        },
        {
            id: 3,
            count: '2035',
            img: Image3,
        },
        {
            id: 4,
            count: '16',
            img: Image4,
        },
        {
            id: 5,
            count: 'Daniel',
            img: Image5,
        },
    ]


    return (
        <>

            {/* ==========wallet Section start Here========== */}
            <section className={"wallet-section padding-top padding-bottom"+' '+ theme_class+'-bg'}  style={{paddingTop: PaddingTop}} >
                <div className="container">


            <Divider title={'STATISTICS'} />

                  




                    <div className="wallet-inner">
                        <div className="row g-3 flex-between">

                            {

                                Box_arr.map((item) => (
                                    <>
                                        <div className="col-lg-2 col-sm-4 col-6">
                                            <StatistiscBox count={item.count} img={item.img} />
                                        </div>
                                    </>
                                ))

                            }


                        </div>
                    </div>
                </div>
            </section>
            {/* ==========wallet Section ends Here========== */}

        </>
    )
}
