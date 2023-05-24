import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StatistiscBox({count, img}) {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;

  return (
    <>
    <div className={"wallet-item home-4"+' '+ theme_class+'-white-bg'+' '+theme_class+'-box-border'}>
              <div className="wallet-item-inner text-center">
                <div className="wallet-thumb">
                  <a href="signin.html">
                    <img src={img} alt="wallet-img" />
                  </a>
                </div>
                <div className="wallet-content">
                    <span className={theme_class+'-text'}>Total Threads</span>
                  <h5><a href="signin.html" className={theme_class+'-text'}>{count}</a></h5>
                </div>
              </div>
            </div>
    </>
  );
}
