import React from "react";
import { useDispatch, useSelector } from "react-redux";
import air from "../assets/images/air.png";
import Star from "../assets/images/start.png";
import eye from "../assets/images/eye.png";
import downladblelink from "../assets/images/downladblelink.png";

export default function CheckoutProductRow({ classs, option, img }) {
  const { message } = useSelector((state) => state.message);

  const theme_class = message;
  return (
    <div className={"checkout_top" + ' ' + theme_class+'-white-bg' }>
         <div
      className={"new-bar checkout" + " " + classs }
    >
      <div className={"head_checkout" }>
        <h4 className={theme_class+'-text'+ ' '+ theme_class+'-foot-bottom'}>Product Description</h4>
      </div>
      <div className="colume new">
        <div className="imageThumbnail new">
          <div className="imgThumbnail-img new">
            <img src={img ? img : air} alt="" srcset="" />
          </div>
          <div className="zxcw new">
            <div className="rating-stars">
              <div className="starRates">
                <span>
                  <img src={Star} alt="" srcset="" />
                </span>
                <span>
                  <img src={Star} alt="" srcset="" />
                </span>
                <span>
                  <img src={Star} alt="" srcset="" />
                </span>
                <span>
                  <img src={Star} alt="" srcset="" />
                </span>
                <span>
                  <img src={Star} alt="" srcset="" />
                </span>
              </div>
            </div>
            <h5 className={theme_class + "-text"}>
              Unix theme for Ptrerodactyl 1,19.x[2.32]
            </h5>
            <p>#1 Unix theme for Ptrerodacty</p>
            <p className="dextext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              odit.or sit amet consectetur adipisicing elit. Facere, odit.or sit
              amet consectetur adipisicing elit. Facere, odit.
            </p>
            <div className="flex-item-checkoit">
              <div className="flex_level zz">
                <span>  <img src={eye} alt="" srcset="" /></span> <span>232,323 views</span>
              </div>
              <div className="flex_level">
                <span>  <img src={downladblelink} alt="" srcset="" /></span> <span>2,334</span>
              </div>
              <div className="flex_level">
                <h4 className={theme_class+'-text'}>Price: <span>$232</span></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"colume price" + " " + option}>
      </div>
    </div>
    </div>
  );
}
