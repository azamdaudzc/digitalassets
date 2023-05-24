import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import Thumbnail from "../../assets/images/banner/bg.jpg";
export default function FlexibleDigitalServices() {

    const { message } = useSelector((state) => state.message);

    const theme_class = message;
    return (
        <>
            <div className={"box-flexible"+' '+theme_class+'-bg'}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                            <div className="about-us">ABOUT US</div>

                            <h1 className={theme_class+'-text'}>
                                <span>We Provide Flexible</span> <br /> Digital Services
                            </h1>
                        </div>

                        <div className="col-12 col-lg-6 col-md-6 col-xl-6 col-xxl-6">
                            <div className="para-about">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                    sunt exercitationem impedit optio officia molestias sapiente
                                    quia suscipit fuga obcaecati, laborum saepe quo iure illo esse,
                                    nostrum nemo hic eius!
                                </p>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="thumbnail-img">
                                <img src={Thumbnail} alt="" srcset="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
