import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Star from "../assets/images/start.png";
import eye from "../assets/images/eye.png";

export default function ExclusiveDigitalBox({img}) {

  const { message } = useSelector((state) => state.message);
  const theme_class = message;


  return (

    <div className={"nft-item home-4"}>
      <div className={"nft-inner" + ' ' + theme_class + '-white-bg'}>
        <div className="nft-item-top d-flex justify-content-between align-items-center">
          <div className="author-part">
            <ul className="author-list newly">
              <li className="single-author d-flex align-items-center">

                <h6>
                  <a href="author.html" className={theme_class + '-text'}>Product Name 01</a>
                </h6>

              </li>
              <li className='des-load'>
                <span className={theme_class + '-text'}>Downloads: 13,750</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="nft-item-bottom">
          <div className="nft-thumb">
            <img
              loading="lazy"
              src={img}
              alt="nft-img"
            />
          </div>
          <div className="nft-content">
            <div className='flexslide-text'>
              <div className='starRates new'>
                <span><img src={Star} alt="" srcset="" /></span>
                <span><img src={Star} alt="" srcset="" /></span>
                <span><img src={Star} alt="" srcset="" /></span>
                <span><img src={Star} alt="" srcset="" /></span>
                <span><img src={Star} alt="" srcset="" /></span>
              </div>
              <div className='views-slide'>
                <span> <img src={eye} alt="" srcset="" /> </span>  <span>26,809 views</span>
              </div>
            </div>
            <div className="price-like d-flex justify-content-between align-items-center">
              <p className={"nft-price" + ' ' + theme_class + '-text'}>
                Price:{" "}
                <span className="yellow-color">$232</span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
