import React from "react";
import ExclusiveDigitalBox from "../../components/ExclusiveDigitalBox";
import Divider from "../../components/Divider";
import { useDispatch, useSelector } from "react-redux";
import DigtalImage1 from "../../assets/images/digtal1.png";
import DigtalImage2 from "../../assets/images/digtal2.png";
import DigtalImage3 from "../../assets/images/digtal3.png";
import DigtalImage4 from "../../assets/images/digtal4.png";

export default function ExclusiveDigital() {

  const { message } = useSelector((state) => state.message);
  const theme_class = message;

  const Box_arr = [
    {
      id: 1,
      count: '05',
      img: DigtalImage1,
    },
    {
      id: 2,
      count: '10',
      img: DigtalImage2,
    },
    {
      id: 3,
      count: '2035',
      img: DigtalImage3,
    },
    {
      id: 1,
      count: '05',
      img: DigtalImage4,
    },

  ]

  return (
    <section className={"ex-drop-section padding-bottom" + ' ' + theme_class + '-bg'}>
      <div className="container">


        <Divider title={'EXCLUSIVE DIGITAL'} />

        <div className="section-wrapper">
          <div className="ex-drop-wrapper">
            <div className="row justify-content-center gx-4 gy-3">


              {

                Box_arr.map((item) => (
                  <>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                      <ExclusiveDigitalBox img={item.img} />
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
