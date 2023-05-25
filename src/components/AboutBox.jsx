import React from 'react'
import { useDispatch, useSelector } from "react-redux"; 

export default function AboutBox({img, name, nameS}) {


    const { message } = useSelector((state) => state.message);

    const theme_class = message;


  return (
    <div className="col-lg-4 col-sm-6">
    <div className="nft-item home-4 blog-item">
      <div className={"nft-inner space  about"+' '+ theme_class+'-white-bg'}>
        <div className="nft-thumb size about">
        <img src={img} alt="wallet-img"/>
        </div>
        <div className="nft-content new">
          <div className="author-details">
            <h4>
              <a href="blog-single.html" className={'abouttext'+' '+theme_class+'-text'}>
              <span>{name}</span> {nameS}
              </a>
            </h4>

            <div className='des-about'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, deleniti. Iusto temporibus maxime blanditiis, quaerat corporis voluptatibus, assumenda iure ipsum, optio nemo vel voluptate ab!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
