import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import sun from "../../assets/images/sun.png";
import weather from "../../assets/images/weather.png";
import DIGITALASSETS from "../../assets/images/DIGITALASSETS.png";


import { setMessage } from "../../slices/message";


export default function Header() {

    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.message);
    const theme_class = message;

    const [useToggle, setToggle] = useState(1);
    const [usePage, setPage] = useState(1);

    const [useThisTheme, setThisTheme] = useState('dark');
   
    useEffect(() => {
        var theme = localStorage.getItem("theme"); 
        if (theme) {
            console.log('');
        }else {
            localStorage.setItem('theme', 'dark');

        }
        var theme = localStorage.getItem("theme"); 
        if (theme) {
            dispatch(setMessage(theme));
           
        }else{
            dispatch(setMessage(theme));
        }
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


    return (
        <header className={"header home-4" + ' ' + theme_class + '-header-white-bg'}>
            <div className="container-fluid">
                <div className="header__content">
                    <div className="header__logo">
                        <a href="/">
                            <img src={DIGITALASSETS} alt="logo" />
                        </a>
                    </div>
                    <form action="#" className="header__search">
                        <input
                            type="text"
                            placeholder="Search items, collections, and creators"
                            className={theme_class + '-box-border'}
                        />
                        <button type="button">
                            <i className={"icofont-search-2" + ' ' + theme_class + '-color-gray'} />
                        </button>
                        <button type="button" className="close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                            </svg>
                        </button>
                    </form>
                    <div className="header__menu ms-auto">
                        <ul className="header__nav mb-0">
                            <li className="header__nav-item" onClick={() => PageToggle('home')}>


                                <a href={"/"} className={usePage === 'home' ? "header__nav-link active home-4" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Home
                                </a>

                            </li>

                            <li className="header__nav-item" onClick={() => PageToggle('about')}>

                                <Link to={"/about"} className={usePage === 'about' ? "header__nav-link active home-4" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    About Us
                                </Link>
                            </li>
                            <li className="header__nav-item" onClick={() => PageToggle('product')}>
                                <Link to={"/products"} className={usePage === 'product' ? "header__nav-link active home-4" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Products
                                </Link>

                            </li>
                            <li className="header__nav-item d-none" onClick={() => PageToggle('product')}>
                                <Link to={"/products"} className={usePage === 'product' ? "header__nav-link active home-4" + ' ' + theme_class + '-text' : "header__nav-link home-4" + ' ' + theme_class + '-text'}>
                                    Products
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
                        <div className="wallet-btn">
                            <Link to="/signup">  <button>Login/SignUp</button></Link>
                        </div>
                    </div>
                    <button className={"menu-trigger header__btn" + ' ' + theme_class + '-text'} id="menu05">
                        <span />
                        <span />
                        <span />
                    </button>
                </div>










                
            </div>
        </header>
    )
}
