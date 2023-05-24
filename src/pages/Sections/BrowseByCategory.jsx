import React from "react";
import BrowseByCategoryBox from "../../components/BrowseByCategoryBox";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../../components/Divider";
import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";
import category4 from "../../assets/images/category4.png";
import category5 from "../../assets/images/category5.png";
import category6 from "../../assets/images/category6.png";

export default function BrowseByCategory() {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;

    const Box_arr = [
        {
            id: 1,
            name:'Addons',
            count: '05',
            img: category1,
        },
        {
            id: 2,
            name:'Themes',
            count: '10',
            img: category2,
        },
        {
            id: 3,
            name:'Eggs',
            count: '2035',
            img: category3,
        }, 
        {
            id: 1,
            name:'Services',
            count: '05',
            img: category4,
        },
        {
            id: 2,
            name:'Bots',
            count: '10',
            img: category5,
        },
        {
            id: 3,
            name:'Others',
            count: '2035',
            img: category6,
        }, 

    ]

    return (
        <>
            <section className={"blog-section pb-120"+' '+theme_class+'-bg'}>
               
                <div className="container">

                <Divider title={'BROWSE BY CATERGORY'} />
                    

                    <div className="section-wrapper">
                        <div className="blog-wrapper">
                            <div className="row justify-content-center gx-4 gy-2">


                                {

                                    Box_arr.map((item) => (
                                        <>
                                            <div className="col-lg-4 col-sm-6">
                                                <BrowseByCategoryBox img={item.img} name={item.name} />
                                            </div>
                                        </>
                                    ))

                                }


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
