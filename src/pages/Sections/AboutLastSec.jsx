import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import AboutBox from "../../components/AboutBox";
import clk1 from "../../assets/images/clk1.png";
import clk2 from "../../assets/images/clk2.png";
import clk3 from "../../assets/images/clk3.png";

export default function AboutLastSec() {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;

    const Box_arr = [
        {
            id: 1,
            count: '05',
            img: clk1,
        },
        {
            id: 2,
            count: '10',
            img: clk2,
        },
        {
            id: 3,
            count: '2035',
            img: clk3,
        }, 
    ]

  return (
    <>
    <div className={"bg-about-last"+' '+theme_class+'-bg'}>
    <div className="container">
    <div className="section-wrapper">
        <div className="blog-wrapper">
          <div className="row justify-content-center gx-4 gy-2">
           

          {

Box_arr.map((item) => (
    <>
          <AboutBox  img={item.img}/>
    </>
))

}
         
          
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
