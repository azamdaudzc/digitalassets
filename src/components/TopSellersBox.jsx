import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Star from "../assets/images/start.png";
import eye from "../assets/images/eye.png";
import downladblelink from "../assets/images/downladblelink.png";

export default function TopSellersBox({ img }) {

  const { message } = useSelector((state) => state.message);
  const theme_class = message;


  return (
    <div className="nft-item home-4 style-2">

      <div className={"nft-inner" + ' ' + theme_class + '-white-bg'}>
        <div className="nft-thumb">
          <img
            src={img}
            alt="nft-img"
          />
        </div>
        <div className="nft-content">

          <div className="author-details d-flex flex-wrap align-items-center gap-15 new">

            <div className="author-det-info">
              <div className='flexg'>
                <div className='titletext'>
                  <h5>
                    <a href="author.html" className={theme_class + '-text'}>Gihan Fernindo</a>{" "}
                  </h5>

                </div>
                <div className='starRates'>
                  <span><img src={Star} alt="" srcset="" /></span>
                  <span><img src={Star} alt="" srcset="" /></span>
                  <span><img src={Star} alt="" srcset="" /></span>
                  <span><img src={Star} alt="" srcset="" /></span>
                  <span><img src={Star} alt="" srcset="" /></span>
                </div>

              </div>
              <div className='buttonbar'>
                <div className='rates'>
                  <p className="nft-price yellow-color">$23,002.98</p>
                </div>
                <div className='bgroup'>
                  <div className='itembox2'>
                   <div> <img src={eye} alt="" srcset="" />
                    <p>26,809</p></div>
                  </div>
                  <div className='itembox2'>
                  <div>
                  <img src={downladblelink} alt="" srcset="" />
                    <p>26,809</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
