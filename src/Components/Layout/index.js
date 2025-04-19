import {Outlet} from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../Styles/home/css/style_1.css"
import "../../Styles/home/css/style.css"
import "../../Styles/home/css/bootstrap.min.css"
import "../../Styles/home/css/animate.min.css"
import "../../Styles/home/css/magnific-popup.min.css"
import "../../Styles/home/css/nice-select.css"
import "../../Styles/home/css/nouislider.min.css"
import "../../Styles/home/css/responsive.css"
import "../../Styles/home/css/styleprivate.css"
import "../../Styles/Login/css/style.css"

function Layout(){
    return(
      <div className="theme-color-3">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    )
}
export default Layout