import logo from "../../Styles/home/images/fav.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope,faUser,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTelegram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectRole } from '../../Redux/user';
import { useState,useEffect } from "react";
import { getCookie } from "../helper/cookie";
function Header() {
  const token = getCookie("token")
  console.log(token)
  useEffect(() => {
  })
  return (
    <>

      <div>
        <header className="header-area" style={{
  boxShadow: "#88a5bf7a 6px 2px 16px, #fffc -6px -2px 16px"}}>

          <div className="mobile-menu">
            <div className="container">
              <div className="mobile-menu-wrapper" />
            </div>
          </div>
          <div className="main-responsive-nav">
            <div className="container">
              <div className="logo">
                <a href="index.html" target="_self" title="Oppida">
                  <img className="lazyload" src="" data-src="assets/images/logo/logo-3.png" alt="Brand Logo" />
                </a>
              </div>
              <button className="menu-toggler" type="button">
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
          <div className="main-navbar">
            <div className="header-top py-3 mobile-item border-bottom">
              <div className="container">
                <div className="d-flex flex-wrap justify-content-between gap-15 align-items-center">
                  <div className="phicssheader d-flex flex-wrap justify-content-between gap-15 align-items-center">
                    <FontAwesomeIcon style={{color : "#30C2EC", marginTop : "3px"}} icon={faEnvelope} />
                    <span style={{color : "#687687"}}>luongphong22082003@email.com</span>
                  </div>
                  <div  className="phissheaderright social-link social-link_gradient style-2 size-md">
                    <a className="rounded-pill" href="https://www.instagram.com/" target="_blank" title="instagram"><FontAwesomeIcon style={{fontSize : "14px"}} className="icon" icon={faFacebookF} /></a>
                    <a className="rounded-pill" href="https://www.dribbble.com/" target="_blank" title="dribbble"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                    <a className="rounded-pill" href="https://www.twitter.com/" target="_blank" title="twitter"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                    <a className="rounded-pill" href="https://www.youtube.com/" target="_blank" title="youtube"><FontAwesomeIcon style={{fontSize : "17px"}} className="icon" icon={faTelegram} /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-bottom">
              <div className="container">
                <nav className="navbar navbar-expand-lg">
                  <a className="" style={{display : "flex" , alignItems : "center"}} href="index.html" target="_self" title="Oppida">
                    <img className="lazyload" src={logo} style={{width : "40px" , height : "40px"}}  alt="Brand Logo" />
                    <h3 style={{marginLeft: "14px", color: "#30C2EC", marginTop: "17px", fontSize: "40px", fontFamily: "Roboto, sans-serif"}}>EduNet</h3>
                    </a>
                  <div className="collapse navbar-collapse">
                    <ul id="mainMenu" className="navbar-nav mobile-item mx-auto">
                      <li className="nav-item">
                        <a href="/" style={{color : "#30C2EC"}} className="nav-link toggle">Home <i className="fal fa-plus" /></a>
                      </li>
                      <li className="nav-item">
                        <a href="/courses" style={{color : "#30C2EC"}} className="nav-link toggle">Courses <i className="fal fa-plus" /></a>
 
                      </li>
                      <li className="nav-item">
                        <a href="/Mycourse" style={{color : "#30C2EC"}} className="nav-link toggle">MyCourse <i className="fal fa-plus" /></a>
                      
                      </li>
                      <li className="nav-item">
                        <a className="nav-link toggle" style={{color : "#30C2EC"}} href="/schedule">Schedule <i className="fal fa-plus" /></a>
                        {/* <ul className="menu-dropdown">
                     <li className="nav-item">
                       <a className="nav-link" href="cart.html">Cart</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="wishlist.html">Wishlist</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="checkout.html">Checkout</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="faq.html">FAQ</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="login.html">Login</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="signup.html">Signup</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="error-404.html">404 Error</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="coming-soon.html">Coming Soon</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="terms-conditions.html">Terms &amp; Conditions</a>
                     </li>
                   </ul> */}
                      </li>
                      <li className="nav-item">
                        <a href="#blogs" style={{color : "#30C2EC"}} className="nav-link toggle">Chats <i className="fal fa-plus" /></a>
                        {/* <ul className="menu-dropdown">
                     <li className="nav-item">
                       <a className="nav-link" href="blogs.html">Blogs</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="blog-single.html">Blog Single</a>
                     </li>
                   </ul> */}
                      </li>

                    </ul>
                  </div>
                  <div className="more-option mobile-item">

                    <div className="item">
                      {token == null ? ( <a href="/auth/login" className="btn-icon-text" target="_self" aria-label="User" title="User">
                      <FontAwesomeIcon style={{color : "white" , padding : "5px", borderRadius : "50%", background : "#30C2EC"}}  icon={faUser} />
                        <span style={{color : "#30C2EC"}} >Login</span>
                      </a>) : (<a href="/auth/login" className="btn-icon-text" target="_self" aria-label="User" title="User">
                      <FontAwesomeIcon style={{color : "white" , padding : "5px", borderRadius : "50%", background : "#30C2EC"}}  icon={faArrowRightFromBracket} />
                        <span style={{color : "#30C2EC"}} >Logout</span>
                      </a>)}
                      
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header