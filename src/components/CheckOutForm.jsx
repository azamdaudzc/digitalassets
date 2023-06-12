import React from "react";
import { useDispatch, useSelector } from "react-redux";
import air from "../assets/images/air.png";
import Star from "../assets/images/start.png";
import eye from "../assets/images/eye.png";
import downladblelink from "../assets/images/downladblelink.png";
import lock from "../assets/images/lock.png";
import merchant from "../assets/images/merchant.png";

export default function CheckOutForm({ classs, option, img }) {
    
    const { message } = useSelector((state) => state.message);
    const theme_class = message;
    
    return (
        <div
            className={"new-bar checkout" + " " + classs + " " + theme_class + "-white-bg"}
        >
            <div className="head_checkout">
                 <h4 className={theme_class+'-text' + ' '+ theme_class+'-foot-bottom'}>  <span> <img src={lock} alt="" srcset="" /> </span>  Secure Order Form</h4>
            </div>
            <div className="colume new">
                <div className="checkoutForm">

                    <div className="fields top">
                        <label htmlFor="" className={theme_class+'-text'}>Card Number</label>
                        <input type="text" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'} />
                    </div>

                    <div className="flexrowDO">
                   
                    <div className="fields">
                    <label htmlFor="" className={theme_class+'-text'}>Expiration Date</label>
               
                       <select name="" id="" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'}>
                        <option value="">Month</option>
                        <option value="">Month</option>

                       </select>
                    </div>
                    <div className="fields">
                    <label htmlFor="" className={theme_class+'-text'+ ' '+ 'hidethisz'}>z</label>
                       
                        <select name="" id="" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'}>
                        <option value="">Year</option>
                        <option value="">Year</option>

                       </select>
                    </div>

                    <div className="fields">
                    <label htmlFor=""  className={theme_class+'-text'}>CVV</label>
                        <input type="text" className={theme_class+'-text'+ ' '+ theme_class+'-box-border'}/>
                    </div>


                    <div className="fields new">
                    <label htmlFor="" className={theme_class+'-text'+ ' '+ 'hidethisz'}>z</label>
                    <br />
                         <img src={merchant} alt="" srcset="" />
                    </div>
                    </div>

                   

                </div>
                
            </div>
            <div className="bottom_submitt">
                    <button> Submit</button>
                    </div>
            <div className={"colume price" + " " + option}>
            </div>
        </div>
    );
}
