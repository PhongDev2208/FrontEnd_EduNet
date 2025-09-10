import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/home/css/style_1.css";
import "../../styles/home/css/style.css";
import "../../styles/home/css/bootstrap.min.css";
import "../../styles/home/css/animate.min.css";
import "../../styles/home/css/magnific-popup.min.css";
import "../../styles/home/css/nice-select.css";
import "../../styles/home/css/nouislider.min.css";
import "../../styles/home/css/responsive.css";
import "../../styles/home/css/styleprivate.css";
import "../../styles/login/css/style.css";

function Layout() {
  return (
    <div className="theme-color-3">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
