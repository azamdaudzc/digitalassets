import React from "react";
import TopSellersBox from "../../components/TopSellersBox";
import Divider from "../../components/Divider";
import { useDispatch, useSelector } from "react-redux";
import sellerimg from "../../assets/images/sellerimg.png";

export default function TopSellers() {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;

    const Box_arr = [
        {
            id: 1,
            count: '05',
            img: sellerimg,
        },
        {
            id: 2,
            count: '10',
            img: sellerimg,

        },
        {
            id: 3,
            count: '2035',
            img: sellerimg,

        },
    ]

    return (
        <section className={"topseller-section padding-bottom" + ' ' + theme_class + '-bg'}>
            <div className="container">

                <Divider title={'TOP SELLERS'} />

                <div className="section-wrapper">
                    <div className="nft-sell-wrapper">
                        <div className="row justify-content-center gx-4 gy-3">

                            {

                                Box_arr.map((item) => (
                                    <>
                                        <div className="col-xl-4 col-lg-4 col-sm-6">
                                            <TopSellersBox img={item.img}/>
                                        </div>
                                    </>
                                ))

                            }




                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
