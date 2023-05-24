import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function BrowseByCategoryBox({img, name}) {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;


  return (
    <div className="nft-item home-4 blog-item">
    <div className={"nft-inner space"+' '+ theme_class+'-white-bg'}>
      <div className="nft-thumb size">
        <img
          src={img}
          alt="blog-img"
        />
      </div>
      <div className="nft-content new">
        <div className="author-details">
          <h4>
            <a href="blog-single.html" className={theme_class+'-text'}>
            {name}
            </a> 
          </h4>
          
        </div>
      </div>
    </div>
  </div>
  )
}
