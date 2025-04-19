import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { PostAccount } from '../../../service/Login';
import { setCookie } from '../../../Components/helper/cookie';
import { Alert, Button, Space } from 'antd';
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handle_Submit_form_login = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const respond = await PostAccount(data)
    console.log(respond)
    if (respond.status) {
      setCookie("token", respond.data, 1)
      Swal.fire({
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1000
      });
      setTimeout(() => {
        navigate("/")
      }, 1000);
      return;
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Account Not exits or Not Active",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

  }
  return (
    <section className="fxt-template-layout14">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-12 col-12 fxt-bg-color">
            <div className="fxt-content">
              <div className="fxt-header">
                <a href="login-14.html" className="fxt-logo"><img src="images/logo-14.png" alt="Logo" /></a>
                <p>Login into your pages account</p>
              </div>
              <div className="fxt-form">
                <form method="POST" onSubmit={handle_Submit_form_login}>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-1">
                      <input type="email" id="email" className="form-control" name="email" placeholder="Email" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-2">
                      <input id="password" type="password" className="form-control" name="password" placeholder="********" required="required" />
                      <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-3">
                      <div className="fxt-checkbox-area" >
                        <div className="checkbox">
                          <input id="checkbox1" type="checkbox" />
                          <label htmlFor="checkbox1">Keep me logged in</label>
                        </div>
                        <a href="forgot-password-14.html" style={{ textAlign: "left" }} className="switcher-text">Forgot Password</a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="fxt-transformY-50 fxt-transition-delay-4">
                      <button type="submit" className="fxt-btn-fill">Log in</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="fxt-style-line">
                <div className="fxt-transformY-50 fxt-transition-delay-5">
                  <h3>Do you want register</h3>
                </div>
              </div>
              <div className="" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                {/* <li className="fxt-google">
                  <div className="fxt-transformY-50 fxt-transition-delay-6">
                    <a href="#" title="google"><i className="fab fa-google-plus-g" /><span>Google +</span></a>
                  </div>
                </li> */}
                <div className="form-group"style={{ width : "49%"}} >
                <Link style={{ textDecoration: "none" , color : "white" }} to="/auth/Register/stu" title="twitter"><i className="fab fa-twitter" />
                  <div className="fxt-transformY-50 fxt-transition-delay-4" >
                    <button type="submit" className="fxt-btn-fill">                    
                       <span>Register Student</span>
                    </button>
                  </div>
                  </Link>
                </div>
                <div className="form-group" style={{ width : "49%"}}>
                <Link style={{ textDecoration: "none" , color : "white"}}  to="/auth/Register/tea" title="twitter"><i className="fab fa-twitter" />
                  <div className="fxt-transformY-50 fxt-transition-delay-4">
                    <button type="submit" className="fxt-btn-fill">                    
                       <span>Register Teacher</span>
                    </button>
                  </div>
                  </Link>
                </div>

              </div>
              <div className="fxt-footer">
                <div className="fxt-transformY-50 fxt-transition-delay-9">
                  <p>Don't have an account?<a href="register-14.html" className="switcher-text2 inline-text">Support</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login