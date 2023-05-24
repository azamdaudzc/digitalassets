import React from "react";
import RowProduct from "./RowProduct";
import { useDispatch, useSelector } from "react-redux";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png"; 
import { Link } from "react-router-dom";


export default function ProductFilter() {
    const { message } = useSelector((state) => state.message);

    const theme_class = message;

    const Box_arr = [
        {
            id: 1,
            count: '05',
        },
        {
            id: 2,
            count: '10',
        },
        {
            id: 3,
            count: '2035',
        },
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
                                                                <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6 ">
                                                                    <form action="#" className="header__search new">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search items, collections, and creators"
                                                                            className="undefined-box-border"
                                                                        />
                                                                        <button type="button">
                                                                            <i className="icofont-search-2 undefined-color-gray" />
                                                                        </button>
                                                                        <button type="button" className="close">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                                                                            </svg>
                                                                        </button>
                                                                    </form>
                                                                </div>
                                                                <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6">
                                                                    <div className="dots">
                                                                        <div className="dots-run">
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
                                                        </div>
                                                        <div className="newr">
                                                            <ul
                                                                className={"nav nav-pills mb-30 px-2" + ' ' + theme_class + '-bg'}
                                                                id="pills-tabx"
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
                                                                        aria-controls="pills-personal"
                                                                        aria-selected="false"
                                                                    >
                                                                        Addons
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
                                                                        aria-controls="pills-mentions"
                                                                        aria-selected="true"
                                                                    >

                                                                        Themes
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
                                                                        aria-controls="pills-favorites"
                                                                        aria-selected="false"
                                                                    >

                                                                        Eggs
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button
                                                                        className={"nav-link" + ' ' + theme_class + '-text'}
                                                                        id="pills-groups-tab"
                                                                        data-bs-toggle="pill"
                                                                        data-bs-target="#pills-groups"
                                                                        type="button"
                                                                        role="tab"
                                                                        aria-controls="pills-groups"
                                                                        aria-selected="false"
                                                                    >

                                                                        Services
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button
                                                                        className={"nav-link" + ' ' + theme_class + '-text'}
                                                                        id="pills-friends-tab"
                                                                        data-bs-toggle="pill"
                                                                        data-bs-target="#pills-friends"
                                                                        type="button"
                                                                        role="tab"
                                                                        aria-controls="pills-friends"
                                                                        aria-selected="false"
                                                                    >

                                                                        Others
                                                                    </button>
                                                                </li>
                                                                <li className="nav-item" role="presentation">
                                                                    <button
                                                                        className={"nav-link" + ' ' + theme_class + '-text'}
                                                                        id="pills-friends-tab"
                                                                        data-bs-toggle="pill"
                                                                        data-bs-target="#pills-friends"
                                                                        type="button"
                                                                        role="tab"
                                                                        aria-controls="pills-friends"
                                                                        aria-selected="false"
                                                                    >

                                                                        Bots
                                                                    </button>
                                                                </li>
                                                                <li className={"custom-selectt zc"}>
                                                                    <select className={theme_class + '-bg' + ' ' + theme_class + '-text'}>
                                                                        <option value={1}>
                                                                            Sort by last update
                                                                        </option>
                                                                        <option value={2}>Recent</option>
                                                                        <option value={3}>Relevant</option>
                                                                        <option value={4}>Popular</option>
                                                                    </select>
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
                                                                  <Link to={"/our-resource"}  >
                                                                  <RowProduct />
                                </Link>
                                                                  
                                                                </>
                                                            ))

                                                        }
                                                        <div className="pagination_here">
                                                            <div className="dots">
                                                                <div className={"dots-run new"+' '+ theme_class+'-paginate'}>
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
