import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import sun from "../../assets/images/sun.png";
import weather from "../../assets/images/weather.png";
import DIGITALASSETS from "../../assets/images/DIGITALASSETS.png";
import ProfileImage from "../../assets/images/ProfileImage.png";

import { setMessage } from "../../slices/message";


export default function DashBoardHeader() {
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.message);
    const theme_class = message;

    const [useToggle, setToggle] = useState(1);
    const [usePage, setPage] = useState(1);


    const [useTogglesec, setTogglesec] = useState(true);

    useEffect(() => {

        var theme = localStorage.getItem("theme");
        dispatch(setMessage(theme));

        var Page = localStorage.getItem("page");
        setPage(Page)

        if (theme === 'dark') {
            document.body.setAttribute('style', 'background-color: black !important;');
        } else {
            document.body.setAttribute('style', 'background-color: #f5f6f7 !important;');
            setToggle(26)
        }

    }, [0]);



    function CallNote(theme) {
        localStorage.setItem("theme", theme);
        dispatch(setMessage(theme));
    }


    function toggleUse() {


        if (useToggle === 1) {
            setToggle(26)
            dispatch(setMessage('light'));
            document.body.setAttribute('style', 'background-color: #f5f6f7 !important;');
            localStorage.setItem('theme', 'light');


        } else {
            setToggle(1)
            dispatch(setMessage('dark'));
            document.body.setAttribute('style', 'background-color: black !important;');
            localStorage.setItem('theme', 'dark');

        }


    }


    function PageToggle(e) {
        localStorage.setItem("page", e);
        setPage(e)
    }


    function ToggleMob() {



        if (useTogglesec) {
            setTogglesec(!useTogglesec)
            document.getElementById('dropmenudash').style.right = '215px'

        } else {
            setTogglesec(!useTogglesec)
            document.getElementById('dropmenudash').style.right = '0px'

        }


    }
    return (
        <header className={"header home-4" + ' ' + theme_class + '-header-white-bg'}>
            <div className="container-fluid">
                <div className="header__content">
                    <div className="header__logo">
                        <a href="/">
                            <img src={DIGITALASSETS} alt="logo" />
                        </a>
                    </div>


                    <div className="header__menu ms-auto new class" id="dropmenudash">
                        <ul className="header__nav mb-0">
                            <li className="header__nav-item" onClick={() => PageToggle('home')}>


                                <Link to={"/dashboard"} className={usePage === 'home' ? "header__nav-link active home-4 newDash" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Dashboard
                                </Link>

                            </li>

                            <li className="header__nav-item" onClick={() => PageToggle('about')}>

                                <Link to={"/download"} className={usePage === 'about' ? "header__nav-link active home-4 newDash" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Downloads
                                </Link>
                            </li>
                            <li className="header__nav-item" onClick={() => PageToggle('product')}>
                                <Link to={"/products-dash"} className={usePage === 'product' ? "header__nav-link active home-4 newDash" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Products
                                </Link>

                            </li> <li className="header__nav-item" onClick={() => PageToggle('Sales')}>
                                <Link to={"/Sales"} className={usePage === 'Sales' ? "header__nav-link active home-4 newDash" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Sales
                                </Link>

                            </li>   <li className="header__nav-item d-none" onClick={() => PageToggle('product')}>
                                <Link to={"/products"} className={usePage === 'product' ? "header__nav-link active home-4 newDash" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Sales
                                </Link>

                            </li>
                            <li className="header__nav-item d-none" onClick={() => PageToggle('product')}>
                                <Link to={"/products"} className={usePage === 'product' ? "header__nav-link active home-4 newDash" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Sales
                                </Link>

                            </li>
                        </ul>




                    </div>



                    <div className="header__actions">
                        <div className="header__action header__action--search">
                            <button className="header__action-btn" type="button">
                                <i className={"icofont-search-1" + ' ' + theme_class + '-text'} />
                            </button>
                        </div>
                        <div className="header__action header__action--profile">
                            <div className="d-none">
                                <button onClick={() => CallNote('dark')} > Dark </button>
                                <button onClick={() => CallNote('light')}> Light </button>
                            </div>
                            <div className="boxToggle" onClick={() => toggleUse()}>


                                <div className="moon" style={{ right: useToggle, opacity: '1' }}>

                                    <span>

                                        {useToggle === 1 ?

                                            <img src={sun} alt="" srcset="" />
                                            :

                                            <img src={weather} alt="" srcset="" />

                                        }

                                    </span>

                                </div>



                            </div>

                        </div>
                        <Link to={'/profile-user'}>
                            <div className="wallet-btn dashboard">

                                <div className="profile">
                                    <div className="titleProfile">
                                        <h6>Sarah Kevin</h6>
                                        <p>Seller</p>
                                    </div>
                                    <div className="ProImage">
                                        <img src={ProfileImage} alt="" srcset="" />
                                    </div>
                                </div>



                            </div> </Link>
                    </div>
                    <button className={"menu-trigger header__btn" + ' ' + theme_class + '-text'} id="menawu05" onClick={ToggleMob}>
                        <span />
                        <span />
                        <span />
                    </button>
                </div>











            </div>
        </header>
    )
}
