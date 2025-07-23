import { Link, useNavigate } from "react-router-dom"
import { Steps, Tabs } from 'antd';
import { useRef , useState } from "react";
import { Flex, Input, Typography, Select, Upload, Form } from 'antd';
import { PostTeacher } from "../../../service/User";
import { setCookie, getCookie } from "../../../Components/helper/cookie";
import { Uploadlist } from "../../../Components/helper/UploadImg";
import Swal from 'sweetalert2';
// or via CommonJS
function RegisterStudent() {
    const navigate = useNavigate()
    const [fileList, setFileList] = useState([]);
    const [active, setactive] = useState(parseInt(1))
    const [degree, setdegree] = useState("Primary School")
    const handle_Submit_form_login = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const hasemtry = Object.values(data).some(value => value === null || value == "" || value == undefined)
        data.degree = degree
        data.cv = await Uploadlist(fileList)

        if (data.password != data.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "The passwords don't match",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (hasemtry) {
            Swal.fire({
                icon: "error",
                title: "Missing data",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        const Respond = await PostTeacher(data)
        
        if (Respond.status == true) {
            setactive(active + 1)
            Swal.fire({
                icon: "success",
                title: "Register Success",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Register Failed",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
       
    }
   

    const handle_step_form_register = (id) => {
        if (id == 2) {
            setactive(active + 1)
        }
        else {
            setactive(active + -1)
        }
    }
    const handle_degree_register = (value) => {
        setdegree(value)
    }
    const onChangeImg = async ({ fileList: newFileList }) => {
        setFileList(newFileList);

    };

    return (
        <section className="fxt-template-layout14">
            <div className="container" >
                <div className="row align-items-center justify-content-center"  >
                    <div className="col-xl-6 col-lg-7 col-sm-12 col-12 fxt-bg-color">
                        <div className="fxt-content" style={{}} >
                            <div className="fxt-header">
                                <div className="fxt-header">
                                    <a href="login-14.html" className="fxt-logo"><img src="images/logo-14.png" alt="Logo" /></a>
                                    <p>Do you want to become the Teacher of GiaSuWeb</p>
                                </div>
                                <Steps
                                    current={active - 1}
                                    items={[
                                        {
                                        },
                                        {
                                        },
                                        {
                                        },
                                        {
                                        },
                                    ]}
                                />
                            </div>
                            <div className="fxt-form" >
                                <form method="POST" onSubmit={handle_Submit_form_login}>
                                    <Tabs
                                        activeKey={active.toString()}
                                        items={[
                                            {
                                                key: '1',
                                                children: (
                                                    <>
                                                        <div>
                                                            <div className="form-group">
                                                                <div className="fxt-transformY-50 fxt-transition-delay-1">
                                                                    <input
                                                                        type="email"
                                                                        id="email1"
                                                                        className="form-control"
                                                                        name="email"
                                                                        placeholder="Email"

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="fxt-transformY-50 fxt-transition-delay-2">
                                                                    <input
                                                                        id="password1"
                                                                        type="password"
                                                                        className="form-control"
                                                                        name="password"
                                                                        placeholder="Password"

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="fxt-transformY-50 fxt-transition-delay-2">
                                                                    <input
                                                                        id="confirmPassword1"
                                                                        type="password"
                                                                        className="form-control"
                                                                        name="confirmPassword"
                                                                        placeholder="Confirm Password"

                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                key: '2',
                                                children: (
                                                    <>
                                                        <div>
                                                            <div className="form-group">
                                                                <div className="fxt-transformY-50 fxt-transition-delay-1">
                                                                    <input

                                                                        className="form-control"
                                                                        name="phone"
                                                                        placeholder="Phone"

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="fxt-transformY-50 fxt-transition-delay-2">
                                                                    <input

                                                                        className="form-control"
                                                                        name="name"
                                                                        placeholder="Name"

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="fxt-transformY-50 fxt-transition-delay-2">
                                                                    <input

                                                                        className="form-control"
                                                                        name="age"
                                                                        placeholder="Age"

                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ),
                                            },
                                            {
                                                key: '3',
                                                children: (
                                                    <>
                                                        <div>
                                                            <div className="form-group">
                                                                <div className="fxt-transformY-50 fxt-transition-delay-1">
                                                                    <input

                                                                        className="form-control"
                                                                        name="Major"
                                                                        placeholder="Major"

                                                                    />
                                                                </div>
                                                            </div>

                                                            <Select
                                                                onChange={handle_degree_register}
                                                                defaultValue="Primary School"
                                                                style={{
                                                                    width: "100%",
                                                                    height: "50px"
                                                                }}
                                                                options={[
                                                                    {
                                                                        value: 'C1',
                                                                        label: 'Primary School',
                                                                    },
                                                                    {
                                                                        value: 'C2',
                                                                        label: 'Middle School',
                                                                    },
                                                                    {
                                                                        value: 'C3',
                                                                        label: 'High School',
                                                                    },
                                                                    {
                                                                        value: 'ĐH',
                                                                        label: 'University',
                                                                    },
                                                                ]}
                                                            />
                                                            <div style={{ marginTop: "30px", display: "flex", alignItems: "center" }}>
                                                                <div style={{marginRight : "25px" , color : "#E5698E"}}>Please UpLoad Your CV :</div>
                                                                <Upload
                                                                    listType="picture-card"
                                                                    fileList={fileList}
                                                                    onChange={onChangeImg}


                                                                >
                                                                    {fileList.length < 1 && '+ Upload'}
                                                                </Upload>
                                                                
                                                            </div>
                                                        </div>
                                                    </>
                                                ),
                                            }, {
                                                key: "4",
                                                children: (
                                                    <div>
                                                        <div>
                                                            <h2>Chúc Mừng Bạn Đã Đăng Ký Thành Công</h2>

                                                        </div>
                                                        <div method="POST">
                                                            <div className="fxt-transformY-50 fxt-transition-delay-1" style={{ marginBottom: "-30px" }}>
                                                                <div className="fxt-form-row" style={{textAlign : "center"}}>
                                                                    Vui lòng bật thông báo email email chúng tôi sẽ liên hệ với bạn trong vòng 1 tuần
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ),
                                            }
                                        ]}
                                        tabBarStyle={{ display: 'none' }}
                                    />
                                    <div className="form-group">
                                        <div className="fxt-transformY-50 fxt-transition-delay-4" style={{ marginTop: "30px", display: "flex" }}>
                                            {active > 1 && active < 4 && <div type="button" style={{ textAlign: "center", borderRadius: "0px" }} onClick={() => handle_step_form_register(1)} className="fxt-btn-fill mr-2">Previous</div>}

                                            {active === 3 ? (
                                                <button type="submit" style={{ textAlign: "center", borderRadius: "0px", marginLeft: "5px" }} className="fxt-btn-fill">Register</button>
                                            ) : (
                                                active < 3 && <div onClick={() => handle_step_form_register(2)} style={{ textAlign: "center", borderRadius: "0px", marginLeft: "5px" }} className="fxt-btn-fill">Next</div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                                   
                            </div>


                            <div className="fxt-footer">
                                <div className="fxt-transformY-50 fxt-transition-delay-9">
                                    <p>Do you want to login ?<Link to="/auth/login" className="switcher-text2 inlinew-text">Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default RegisterStudent