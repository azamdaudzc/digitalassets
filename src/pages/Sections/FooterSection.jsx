import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import footer1 from "../../assets/images/footer1.png";
import footer2 from "../../assets/images/footer2.png";

export default function FooterSection() {

    const { message } = useSelector((state) => state.message);
    const theme_class = message;

  return (
    <>
    <footer className="footer-section style-4">
    <div className={"footer-top"+' '+theme_class+'-foot-image-bg'}>
      <div className={"footer-newsletter"+' '+theme_class+'-foot-bottom'}>
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="newsletter-part">
                <div className="ft-header">
                  <h4 className={theme_class+'-text'}>Get The Latest Rarible Updates</h4>
                </div>
                <form action="#">
                  <input type="email"className={theme_class+'-box-border'} placeholder="Your Mail Address" />
                  <button type="submit" data-blast="bgColor"> Subscribe now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="social-part ps-lg-5">
                <div className="ft-header">
                  <h4 className={theme_class+'-text'}>Join the Community</h4>
                </div>
                <ul className="social-list d-flex flex-wrap align-items-center mb-0">
                  <li className="social-link"><a href="#" data-blast="bgColor"><i className="icofont-twitter" /></a></li>
                  <li className="social-link"><a href="#" data-blast="bgColor"><i className="icofont-twitch" /></a></li>
                  <li className="social-link"><a href="#" data-blast="bgColor"><i className="icofont-reddit" /></a></li>
                  <li className="social-link"><a href="#" data-blast="bgColor"><i className="icofont-instagram" /></a></li>
                  <li className="social-link"><a href="#" data-blast="bgColor"><i className="icofont-dribble" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-links padding-top padding-bottom">
        <div className="container-fluid">
          <div className="row  footer__content">
            <div className="col-12 col-lg-2">
              <div className="footer-link-item intro" >
                <h2><span>DIGITAL</span>ASSETS</h2>
                <p>Lorem ipsum is placeholder  and publishing industries for previewing layouts and visual mockups.</p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className={"footer-link-item buttombtn"+' '+theme_class+'darkhref'}>
              <div>
              <h5>Useful Links</h5>
                <ul className="footer-link-list">
                  <li><a href="#" className="footer-link">Home</a></li>
                  <li><a href="#" className="footer-link">About Us</a></li>
                  <li><a href="#" className="footer-link">Products</a></li> 
                </ul>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className={"footer-link-item second"+' '+theme_class+'darkhref'}>
                <h5>Latest Products</h5>

                    <div className='flex-items'>
                <div className='box-item1 box-i'>
                <div className='image-1'>
                <img src={footer1} alt="wallet-img"/>
                </div>
                <div className='details'>
                        <h5>Product Name</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cupiditate.</p>
                        <div className='items-price'>
                            <h6>Price: <span>$456</span></h6>
                        </div>
                </div>
                </div>
                <div className='box-item1 box-i'>
                <div className='image-1'>
                <img src={footer2} alt="wallet-img"/>
                </div>
                <div className='details'>
                        <h5>Product Name</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cupiditate.</p>
                        <div className='items-price'>
                            <h6>Price: <span>$456</span></h6>
                        </div>
                </div>
                </div>
                    </div>

              </div>
            </div>
            <div className="col-12 col-lg-2">
              <div className={"footer-link-item lastItem"+' '+theme_class+'darkhref'}>
              <div>
              <h5>Legal</h5>
                <ul className="footer-link-list">
                  <li><a href="#" className="footer-link">Cookies Policy</a></li>
                  <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link">Term & Conditions</a></li> 
                </ul>
              </div>
              </div>
            </div>



          </div>

          
        </div>
        
      </div>
      <div className={"footer-bottom"}>
      <div className="container">
        <p className={"text-center py-4 mb-0"+' '+theme_class+'-text'} > All rights reserved @ Digital Assets
        </p>
      </div>
    </div>
    </div>
 
 
  </footer>
    
    </>
  )
}
