import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import air from "../assets/images/air.png";
import Star from "../assets/images/start.png";
import { Link } from 'react-router-dom';

export default function RowProduct({ classs, option, img }) {

    const { message } = useSelector((state) => state.message);

    const theme_class = message;
    return (
        <div className={"new-bar " + ' ' + classs + ' ' + theme_class + '-white-bg'}>
            <div className="colume">
                <div className="imageThumbnail">
                    <div className="imgThumbnail-img">
                        
                        <img src={img ? img : air} alt="" srcset="" />
                    </div>
                    <div className="zxcw">
                        <div className="rating-stars">
                            <div className='starRates'>
                                <span><img src={Star} alt="" srcset="" /></span>
                                <span><img src={Star} alt="" srcset="" /></span>
                                <span><img src={Star} alt="" srcset="" /></span>
                                <span><img src={Star} alt="" srcset="" /></span>
                                <span><img src={Star} alt="" srcset="" /></span>
                            </div>
                        </div>
                        <h5 className={theme_class + '-text'}>Unix theme for Ptrerodactyl 1,19.x[2.32]</h5>
                        <p>#1 Unix theme for Ptrerodacty</p>
                        <p>Category Themes. updated 8 days ago</p>
                    </div>
                </div>
            </div>
            <div className={"colume price"+ ' '+option}>

                {option === 'no' ?
                    <div class="wallet-btn new this-one">  <Link to={"/checkout"}  >
               
               <button>Download</button>       </Link> </div>


                    : option === 'star' ?
                    
                    

                    <div className='starRates'>
                    <span><img src={Star} alt="" srcset="" /></span>
                    <span><img src={Star} alt="" srcset="" /></span>
                    <span><img src={Star} alt="" srcset="" /></span>
                    <span><img src={Star} alt="" srcset="" /></span>
                    <span><img src={Star} alt="" srcset="" /></span>
                </div>

                    :option === 'Nothing' ?

                    <>
                    </>

                    :

                    
                    <div className="price">
                        <h1 className={theme_class + '-text'}> Price:<span> 203 </span> </h1>
                        <p>26,923 views</p>
                        <p>3,23</p>
                    </div>



                }






            </div>
        </div>
    )
}
