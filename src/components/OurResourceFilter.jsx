import React from "react";
import { useState } from 'react';
import RowProduct from "./RowProduct";
import { useDispatch, useSelector } from "react-redux";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";
import Star from "../assets/images/start.png";
import landingPage from "../assets/images/landingPage.png";
import passportsize from "../assets/images/passportsize.png";
import ProductVersion from "../pages/Sections/ProductVersion";



export default function OurResourceFilter() {
  const { message } = useSelector((state) => state.message);

  const theme_class = message;

  const [usetab, settab] = useState(1);

  function TabFunc(e) {
    settab(e)
  }

  const Box_arr = [
    {
      id: 1,
      count: '05',
    }
  ]

  const Box_ar2r = [
    {
      id: 1,
      count: '05',
      img: passportsize,
    },
    {
      id: 1,
      count: '05',
      img: passportsize,

    },
    {
      id: 1,
      img: passportsize,
      count: '05',
    },
    {
      id: 1,
      count: '05',
      img: passportsize,
    },
    {
      id: 1,
      count: '05',
      img: passportsize,
    }
  ]


  return (
    <>
      <div className={"products-bg" + ' ' + theme_class + '-bg'} >
        <div className="container">
          <div className="profile-details">
            <div className="tab-content" id="nav-tabContent">
              {/* All NFT tab */}
              <div
                className="tab-pane activity-page fade show active"
                id="allNft"
                role="tabpanel"
              >
                <div>
                  <div className="row ">
                    <div className="col-12">
                      <article>
                        <div className="activity-tab">
                          <div className="row product">
                            <div className="opzw">
                              <div className={"row" + ' ' + theme_class + '-graybackground'}>
                                <div className="opizxc">


                                  <div className="items-yog">
                                    <div className="inner-title">
                                      <div className="inner-Title">
                                        <span>Price:</span>
                                      </div>
                                      <div className="innertilex">
                                        <span>$50.00</span>
                                      </div>
                                    </div>
                                    <div className="inner-title">
                                      <div className="inner-Title">
                                        <span>Category:</span>
                                      </div>
                                      <div className="innertilex">
                                        <span>Themes</span>
                                      </div>
                                    </div>
                                  </div>


                                  <div className="items-yog sec">
                                    <div className="inner-title sec">
                                      <div className="inner-Title">
                                        <span>Purchases:</span>
                                      </div>
                                      <div className="innertilex">
                                        <span>305</span>
                                      </div>
                                    </div>
                                    <div className="inner-title">
                                      <div className="inner-Title">
                                        <span>Views:</span>
                                      </div>
                                      <div className="innertilex">
                                        <span>51,321</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="items-yog">
                                    <div className="inner-title sec">
                                      <div className="inner-Title ">
                                        <span>First Release:</span>
                                      </div>
                                      <div className="innertilex">
                                        <span>29 Sep 2022</span>
                                      </div>
                                    </div>
                                    <div className="inner-title">
                                      <div className="inner-Title">
                                        <span> Last Release:</span>
                                      </div>
                                      <div className="innertilex">
                                        <span>16 Jan 2023</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="items-yog">
                                    <div className="inner-title sec">
                                      <div className="inner-Title">
                                        <span>Downloads:</span>
                                      </div>
                                      <div className="innertilex">
                                        <span>832</span>
                                      </div>
                                    </div>
                                    <div className="inner-title">
                                      <div className="inner-Title">
                                        <span>Ratings:</span>
                                      </div>
                                      <div className="innertilex">
                                        <div className='starRates new'>
                                          <span><img src={Star} alt="" srcset="" /></span>
                                          <span><img src={Star} alt="" srcset="" /></span>
                                          <span><img src={Star} alt="" srcset="" /></span>
                                          <span><img src={Star} alt="" srcset="" /></span>
                                          <span><img src={Star} alt="" srcset="" /></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>



                                </div>
                              </div>
                            </div>
                            <div className="newr new">
                              <ul
                                className={"nav nav-pills mb-30 px-2 ewz" + ' ' + theme_class + '-bg'}
                                id="pills-tabz"
                                role="tablist"
                              >
                                <li className="nav-item" role="presentation">
                                  <button
                                    className={"nav-link" + ' ' + theme_class + '-text'}
                                    id="pills-personal-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-personal"
                                    type="button"
                                    role="tab"
                                    onClick={() => TabFunc(1)}
                                    aria-controls="pills-personal"
                                    aria-selected="false"
                                  >
                                    Overview
                                  </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button
                                    className={"nav-link active" + ' ' + theme_class + '-text'}
                                    id="pills-mentions-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-mentions"
                                    type="button"
                                    role="tab"
                                    onClick={() => TabFunc(2)}
                                    aria-controls="pills-mentions"
                                    aria-selected="true"
                                  >

                                    Version
                                  </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button
                                    className={"nav-link" + ' ' + theme_class + '-text'}
                                    id="pills-favorites-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-favorites"
                                    type="button"
                                    role="tab"
                                    onClick={() => TabFunc(3)}
                                    aria-controls="pills-favorites"
                                    aria-selected="false"
                                  >

                                    Reviews
                                  </button>
                                </li>

                              </ul>
                            </div>
                          </div>

                          <div
                            className="tab-content activity-content"
                            id="pills-tabContent"
                          >

                            {

                              Box_arr.map((item) => (
                                <>
                                  <RowProduct option={'no'} classs={'next'} />
                                </>
                              ))

                            }




                            {usetab === 1 ?
                              <div className="innerLanding ">
                                <img src={landingPage} alt="" srcset="" />

                              </div>
                              :
                              ""
                            }




                            {usetab === 3 ?
                              <div className="all-review">

                                <div className={"all_review_bar" + ' ' + theme_class + '-white-bg'}>
                                  <div className="tilereview">
                                    <h5 className={theme_class + '-text'}>Reviews</h5>
                                  </div>
                                  <div className="seeall">
                                    <span> See All</span>
                                  </div>
                                </div>


                                {

                                  Box_ar2r.map((item) => (
                                    <>
                                      <RowProduct option={'star'} classs={'nextborm'} img={item.img} />
                                    </>
                                  ))

                                }




                                <div className="pagination_here">
                                  <div className="dots">
                                    <div className={"dots-run new" + ' ' + theme_class + '-paginate'}>
                                      <div><img src={arrowLeft} alt="" srcset="" /></div>
                                      <div className="dotsbutton">
                                        <button className="active">1</button>
                                        <button>2</button>
                                        <button>3</button>
                                        <button>4</button>
                                      </div>
                                      <div><img src={arrowRight} alt="" srcset="" /></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              :
                              ""

                            }





                            {usetab === 2 ?
                              <div   >
                                <ProductVersion />

                              </div>
                              :

                              null
                            }


                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
