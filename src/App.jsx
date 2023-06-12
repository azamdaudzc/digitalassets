import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Dashboard/Assets/Css/Style.css";
import "./assets/css/theme.css";

import "./assets/css/StandardMedia/Laptop.css";

import "./assets/css/animate.css";
import "./assets/css/blast.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/lightcase.css";
import "./assets/css/style.min.css";
import "./assets/css/style.min.css.map";
import "./assets/css/swiper-bundle.min.css";
import ProductsDashboard from "./Dashboard/Pages/Products";
import Login from "./Dashboard/Pages/SignIn";
import ProfileUser from "./Dashboard/Pages/Profile";
import SignUp from "./Dashboard/Pages/SignUp";

import "./assets/css/StandardMedia/DesktopMedia.css";
import "./assets/css/StandardMedia/MobileMedia.css";
import "./assets/css/StandardMedia/TabletMedia.css";
import Loginpre from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import { logout } from "./slices/auth";
import EventBus from "./common/EventBus";
import FrontPage from "./pages/FrontPage";
import Header from "./pages/Sections/Header";
import FooterSection from "./pages/Sections/FooterSection";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import OurResource from "./pages/OurResource";
import CheckoutPage from "./pages/CheckoutPage";
import ForgetUser from "./Dashboard/Pages/ForgetUser";
import Dashboard from "./Dashboard/Pages/Dashboard";
import DashBoardHeader from "./pages/Sections/DashBoardHeader";
import Download from "./Dashboard/Pages/Download";
import ProductBar from "./Dashboard/Components/ProductBar";
import AddProduct from "./Dashboard/Pages/AddProduct";
import Sales from "./Dashboard/Pages/Sales";
import MainHeader from "./pages/Sections/MainHeader";
import MainFooter from "./pages/Sections/MainFooter";


const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const [ThemeLayout, setThemeLayout] = useState(false);


  const { theme } = useSelector((state) => state.theme);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();



  const logOut = useCallback(() => {


    dispatch(logout());



  }, [dispatch]);

  useEffect(() => {



    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };

  }, [currentUser, logOut,]);


  return (
    <>

      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav> */}

      <div className={theme === 'dashboard' ? "AllCOntentSect" : ''}>


        <Router>



          <MainHeader />


          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/download" element={<Download />} />


            <Route path="/products-dash" element={<ProductsDashboard />} />

            <Route path="/zzzz" element={<FrontPage />} />
            <Route path="/forget-password" element={<ForgetUser />} />
            <Route path="/about" element={<AboutUs />} />


            <Route path="/profile-user" element={<ProfileUser />} />

            <Route path="/home" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />


            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />



            <Route path="/sales" element={<Sales />} />


            <Route path="/addproduct" element={<AddProduct />} />

            <Route path="/" element={<FrontPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* <Route path="/zxczxc" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          // 
          <Route path="/" element={<FrontPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/our-resource" element={<OurResource />} /> */}
          </Routes>

          <MainFooter />

        </Router>
      </div>



    </>
  );
};

export default App;
