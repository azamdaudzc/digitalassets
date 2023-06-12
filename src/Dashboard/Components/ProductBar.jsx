import React from 'react'
import ProductPicture from "../../assets/images/ProductPicture.png";
import Clock from "../../assets/images/Clock.png";
import { useEffect, useState } from 'react'
import viewspro from "../../assets/images/viewspro.png";
import downloadpro from "../../assets/images/downloadpro.png";
import yellowbtn from "../../assets/images/yellowbtn.png";
import TrippleDots from "../../assets/images/TrippleDots.png";

import { useDispatch, useSelector } from "react-redux";


export default function ProductBar({ AccessPrice, AccessButton, id }) {


    const { message } = useSelector((state) => state.message);

    const theme_class = message;


    const [openIndex, setOpenIndex] = useState();

    const handleToggle = () => {
        setOpenIndex(!openIndex);
    };
    return (
        <>

            <div className={'ProductBar' + ' ' + theme_class + 'dash-bg-bar'}>
                <div className='innerProductbar'>
                    <div className='AProductBar'>
                        <div className='AImage'>
                            <div className='StyleImgPro'>
                                <img src={ProductPicture} alt="" srcset="" />
                            </div>
                        </div>
                        <div className='AContnet'>
                            <div className='innerContentProduct'>
                                <div className='ClockCOntnet'>
                                    <img src={Clock} alt="" srcset="" />
                                    <span> 12 hrs ago</span>
                                </div>
                                <h6 className={theme_class + '-text'}>Unix theme for Pterodactyl 1.10.x <span>{'[4.0.1]'}</span>  </h6>
                                <p>#1 Pterodactyl Premium Theme</p>
                            </div>
                        </div>
                    </div>

                    {AccessPrice === "No" ?

                        <>
                        </>

                        : AccessButton === "DOWNLOAD" ?

                            <div className='rightBtn'>
                                <div className='innerbtnDOwnload'>
                                    <img src={yellowbtn} alt="" srcset="" />
                                    <span>Download</span>
                                </div>
                            </div>



                            :

                            <div className='BProductBar'>
                                <div className='ProductPricesF'>
                                    <h5 className={theme_class + '-text'}>Price: <span className={theme_class + 'green-text'}>$499</span></h5>
                                    <div className='ViewsProduct'>
                                        <img src={viewspro} alt="" srcset="" />
                                        <span> 12 hrs ago</span>
                                    </div>
                                    <div className='DownloadProduct'>
                                        <img src={downloadpro} alt="" srcset="" />
                                        <span> 12 hrs ago</span>
                                    </div>
                                </div>

                                {AccessButton === "Dots" ?
                                    <>
                                        <div className='fullItemBottom'>
                                            <div className='tripppleRow'>
                                                <img src={TrippleDots} alt="" srcset="" onClick={() => handleToggle(id)} id={'innerdrop' + id} />
                                            </div>

                                            {openIndex ?
                                                <div className='innerMenuDrop' id={'innerdrop' + id}>
                                                    <span>View</span>
                                                    <hr />
                                                    <span>Edit</span>
                                                    <hr />
                                                    <span>Delete</span>
                                                </div>

                                                :

                                                <></>


                                            }







                                        </div>
                                    </>
                                    : <></>

                                }


                            </div>


                    }



                </div>
            </div>


        </>
    )
}
