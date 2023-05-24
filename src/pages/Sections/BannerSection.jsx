import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import SliderImages from "../../assets/images/banner/slider-images.png";
import Star from "../../assets/images/start.png";
import eye from "../../assets/images/eye.png";

export default function BannerSection() {


    const { message } = useSelector((state) => state.message);

    const theme_class = message;

    const Box_arr = [
        {
            id: 1,
            count: '05',
            img: SliderImages,
        },
        {
            id: 2,
            count: '10',
            img: SliderImages,
        },
        {
            id: 3,
            count: '2035',
            img: SliderImages,
        },
        {
            id: 1,
            count: '05',
            img: SliderImages,
        },
        {
            id: 2,
            count: '10',
            img: SliderImages,
        },
        {
            id: 3,
            count: '2035',
            img: SliderImages,
        },

    ]

    return (


        <section className={"banner-section home-4" + ' ' + theme_class + '-image-bg'}  >

            <div className="container">
                <div className="banner-wrapper">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="banner-content">
                                <h1 className={theme_class + '-text'}> <span className="theme-color-4">
                                    World Best</span> Digital Assetes Market.
                                </h1>
                                <p className={theme_class + '-text'}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                <div className="banner-btns d-flex flex-wrap">
                                    <a data-blast="bgColor" href="explore.html" className="default-btn move-top"><span>Explore</span> </a>
                                    <a href="signin.html"  className={"default-btn move-right"  + ' ' + theme_class + '-text'}><span>Create</span> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className={"nft-slider-wrapper"}>
                                <div className="swiper banner-item-slider-2">
                                    <div className={"swiper-wrapper" + ' ' + theme_class + '-white-bg' + ' ' + theme_class + '-bg-block'}>


                                        {

                                            Box_arr.map((item) => (
                                                <>
                                                    <div className="swiper-slide">
                                                        <div className="nft-item home-4">
                                                            <div className={"nft-inner"}>
                                                                {/* nft top part */}
                                                                <div className="nft-item-top d-flex justify-content-between align-items-center">
                                                                    <div className="author-part">
                                                                        <ul className="author-list d-flex">
                                                                            <li className="single-author align-items-center">

                                                                                <h6><a href="author.html"className={theme_class + '-text'}>Product Name</a></h6>
                                                                                <p className={theme_class + '-text'}>Total Downloads: 13,750</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* nft-bottom part */}
                                                                <div className="nft-item-bottom">
                                                                    <div className="nft-thumb">
                                                                        <img loading="lazy" src={item.img} alt="nft-img" />
                                                                        {/* nft countdwon */}
                                                                        {/* <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                                                                          <li>
                                                                                                              <span class="days">34</span><span class="count-txt">D</span>
                                                                                                          </li>
                                                                                                          <li>
                                                                                                              <span class="hours">09</span><span class="count-txt">H</span>
                                                                                                          </li>
                                                                                                          <li>
                                                                                                              <span class="minutes">32</span><span class="count-txt">M</span>
                                                                                                          </li>
                                                                                                          <li>
                                                                                                              <span class="seconds">32</span><span class="count-txt">S</span>
                                                                                                          </li>
                                                                                                      </ul> */}
                                                                    </div>
                                                                    <div className="nft-content">
                                                                        <div className='flexslide-text'>
                                                                            <div className='starRates'>
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
                                                                            <p  className={"nft-price" + ' ' +theme_class + '-text'} >Price: <span className="yellow-color">$231</span>
                                                                            </p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))

                                        }








                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
