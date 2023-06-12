import React from "react";
import searchBtn from "../../../assets/images/searchBtn.png";
import { useDispatch, useSelector } from "react-redux"; 


export default function SalesFilter() {

    const { message } = useSelector((state) => state.message);

    const theme_class = message;


    return (
        <>
            <div className="row product">
                <div className={"opzw"}>
                    <div className={"row dark-graybackground"+' '+ theme_class+'-image-bg-filter'}>
                        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6 ">

                            <div className="FilterOption">
                                <div className="InnerFilters">
                                    <div className="labelOPtions">
                                        <p >Filters:</p>
                                    </div>
                                    <div className="AllOptions">
                                        <div class="fields"> <select name="" id="" class="dark-text dark-box-border"><option value="">All</option><option value="">Month</option></select></div>
                                        <div class="fields"> <select name="" id="" class="dark-text dark-box-border"><option value="">From</option><option value="">Month</option></select></div>
                                        <div class="fields"> <select name="" id="" class="dark-text dark-box-border"><option value="">To</option><option value="">Month</option></select></div>
                                    </div>
                                    <div className="searchButton">
                                        <div class="Editablebutton"><button><img src={searchBtn} alt="" srcset="" /></button></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 col-md-6">
                            <div className="dots">
                                <div className="dots-run">
                                    <div>
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgBzZKxCQAgDASDkziCI7mJbuoI4gRRsLH4RBEiPghycJ8UIfouzBxOGBITz0SNaWIZz0vMRKxArEh0y7+BTsRImp7B2nm7tkVB1JhWcHckT9IBlNnKfWI4QpwAAAAASUVORK5CYII="
                                            alt
                                            srcSet
                                        />
                                    </div>
                                    <div className="dotsbutton">
                                        <button className="active">1</button>
                                        <button>2</button>
                                        <button>3</button>
                                        <button>4</button>
                                    </div>
                                    <div>
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABcSURBVHgBzZLBCQAhDATDVXAlXAlXkiXYgXZqCZYQFX2IJkFExYF8ht2QRwCuABH/EUcVFWaM5LjyF8fVYcptX+BLWHMu8YDMO+i6Ey3n1hVLULUhykkL5p7kOAHnm8idmTdu+wAAAABJRU5ErkJggg=="
                                            alt
                                            srcSet
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newr">

                    <div className="flexUserRow news">
                        <div className="AData">
                            <h6 className={theme_class+'-text'}>Date</h6>
                        </div>
                        <div className="BData">
                            <h6 className={theme_class+'-text'}>User</h6>
                        </div>
                        <div className="CData">
                            <h6 className={theme_class+'-text'}>Product Name</h6>
                        </div>
                        <div className="DData">
                            <h6 className={theme_class+'-text'}>Price</h6>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
