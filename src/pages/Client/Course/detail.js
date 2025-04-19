import { useParams } from 'react-router-dom';
import { Tabs, Collapse } from 'antd';
import { PostStucourse } from '../../../service/Stucourse';
import { GetAllCourse } from '../../../service/Course';
import { Button, Form, Input, Rate, Upload, Card, List, Image, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { PostReview, GetAllReview } from '../../../service/Review.';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { getCookie } from "../../../Components/helper/cookie";
import "../../../Styles/home/css/styleprivate.css"
import { Uploadlist } from "../../../Components/helper/UploadImg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import Seturl from "../../../Components/helper/SetURL"
import Swal from 'sweetalert2';
function Detail() {
    const [Data, setdata] = useState([]);
    const [itemcollapse, setitemcollapse] = useState([])
    const [DataDetailCourse, setDataDetailcourse] = useState(null)
    const [fileList, setFileList] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()
    const fetchAPI = async () => {
        const searchParams = new URLSearchParams(window.location.search);
        let page = searchParams.get('page');

        const [dataReview, dataDetail] = await Promise.all([
            GetAllReview({ key: id, page: page }, null),
            GetAllCourse("Getdetailcourse", { key: id }, null)
        ]);
        if (dataReview.status == true) {
            setdata(dataReview)
        }
        if (dataDetail.status == true) {
            setDataDetailcourse(dataDetail.data)
            if (Array.isArray(dataDetail.data.schedule)) {
                const tmp = dataDetail.data.schedule.map((item, index) => {
                    return (
                        {
                            key: index,
                            label: item.title,
                            children: <ul className="course-content-list list-unstyled">
                                {
                                    item.description.map((itemchild) => {
                                        return (
                                            <li className="course-content" style={{ display: "flex" }}>
                                                <div className="content-left ">
                                                    <span className="">{itemchild}</span>
                                                </div>
                                                <div className="content-right">
                                                    <i className="fal fa-lock" />
                                                </div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        }
                    )
                })

                setitemcollapse(tmp)

            }
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [])
    const handle_tabs_course_Detail = (key) => {
    };

    const onChange = async ({ fileList: newFileList }) => {
        setFileList(newFileList);

    };

    const handle_submit_review = async (values) => {
        const token = getCookie("token");
        if (!token) {
            navigate("auth/login");
        }
        if (fileList.length > 0) {
            values.images = await Uploadlist(fileList)
        }
        values.course_id = id
        const respond = await PostReview(values, token)
        if (respond) {
            Swal.fire({
                icon: "success",
                title: "Review Successful",
                showConfirmButton: false,
                timer: 1000
            });
            fetchAPI()
            setFileList([])
        }

    };
    const handle_register_course_detail = async (id_course) => {
        const token = getCookie("token");
        if (!token) {
            navigate("/login");
        }
        const data = await PostStucourse({ course_id: id_course }, token)
        if (data.error == 200) {
            Swal.fire({
                icon: "error",
                title: "Register Failed",
                showConfirmButton: false,
                timer: 1500
              });
        }
        if (data.error == 100) {
            navigate("/login")
        }
        if(data.error == 300){
            Swal.fire({
                icon: "error",
                title: "My schedule is overlapping.",
                showConfirmButton: false,
                timer: 1500
              });
        }
        if (data.status == true) {
            Swal.fire({
                icon: "success",
                title: "Review Successful",
                showConfirmButton: false,
                timer: 1000
            });
          
            navigate("/Mycourse");

        }
    }

    const handlePageChange = (e) => {
        Seturl({ title: "page", value: e })
        fetchAPI();
    };

    const items = [
        {
            key: '1',
            label: 'OverView',
            children: <div className="tab-pane slide slide show active" id="tab1">
                <div className="content pb-20">
                    {DataDetailCourse != null && <div dangerouslySetInnerHTML={{ __html: DataDetailCourse.description }} />}
                </div>
            </div>,
        },
        {
            key: '2',
            label: 'Course Content',
            children: <div className="tab-pane slide phicss_collapse_detailcourse" id="tab2">
                <Collapse items={itemcollapse} defaultActiveKey={['1']} />

            </div>,
        },
        {
            key: '3',
            label: 'Description',
            children: <div className="tab-pane" id="tab3">
                <div className="content pb-20">
                    {DataDetailCourse != null && <div dangerouslySetInnerHTML={{ __html: DataDetailCourse.Goal }} />}

                </div>

            </div>,
        },


        {
            key: '5',
            label: 'Review',
            children: <div className="tab-pane slide" id="tab5">
                <div className="review-progresses p-30 radius-md border mb-40">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-30">
                        <h4 className="mb-0">Total Reviews Status</h4>
                        <div className="ratings size-md">
                            <div className="rate bg-img" data-bg-image="assets/images/rate-star-md.png">
                                <div className="rating-icon bg-img" data-bg-image="assets/images/rate-star-md.png" />
                            </div>
                            <span className="ratings-total color-gray">(4.5)</span>
                        </div>
                    </div>
                    <div className="review-progress mb-10 row align-items-center">
                        <div className="col-3 color-all col-sm-2">5 Star</div>
                        <div className="progress-line col-6 col-sm-8">
                            <div className="progress">
                                <div className="progress-bar background-all bg-primary" style={{ width: '90%' }} role="progressbar" aria-label="Basic example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 text-end color-gray">90%</div>
                    </div>
                    <div className="review-progress mb-10 row align-items-center">
                        <div className="col-3 color-all col-sm-2">4 Star</div>
                        <div className="progress-line col-6 col-sm-8">
                            <div className="progress">
                                <div className="progress-bar background-all bg-primary" style={{ width: '60%' }} role="progressbar" aria-label="Basic example" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 text-end color-gray">60%</div>
                    </div>
                    <div className="review-progress mb-10 row align-items-center">
                        <div className="col-3 color-all col-sm-2">3 Star</div>
                        <div className="progress-line col-6 col-sm-8">
                            <div className="progress">
                                <div className="progress-bar background-all bg-primary" style={{ width: '50%' }} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 text-end color-gray">50%</div>
                    </div>
                    <div className="review-progress mb-10 row align-items-center">
                        <div className="col-3 color-all col-sm-2">2 Star</div>
                        <div className="progress-line col-6 col-sm-8">
                            <div className="progress">
                                <div className="progress-bar background-all bg-primary" style={{ width: '20%' }} role="progressbar" aria-label="Basic example" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 text-end color-gray">20%</div>
                    </div>
                    <div className="review-progress mb-10 row align-items-center">
                        <div className="col-3 color-all col-sm-2">1 Star</div>
                        <div className="progress-line col-6 col-sm-8">
                            <div className="progress">
                                <div className="progress-bar background-all bg-primary" style={{ width: '10%' }} role="progressbar" aria-label="Basic example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="col-3 col-sm-2 text-end color-gray">10%</div>
                    </div>
                </div>
                <div className="review-box pb-10">
                    {/* <div className="review-list mb-30 border radius-md">
                        <div className="review-item p-30">
                            <div className="review-header flex-wrap mb-20">
                                <div className="author d-flex align-items-center justify-content-between gap-3">
                                    <div className="author-img">
                                        <a href="error-404.html" target="_self" title="Link" className="lazy-container ratio ratio-1-1 rounded-circle">
                                            <img className="lazyload" src="images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt="Avatar" />
                                        </a>
                                    </div>
                                    <div className="author-info">
                                        <h6 className="mb-1">
                                            <a href="error-404.html" target="_self" title="Link">Mark Jco</a>
                                        </h6>
                                        <div className="ratings mb-1">
                                            <div className="rate bg-img" data-bg-image="assets/images/rate-star.png">
                                                <div className="rating-icon bg-img" data-bg-image="assets/images/rate-star.png" />
                                            </div>
                                            <span className="ratings-total">(4.5)</span>
                                        </div>
                                        <span className="font-xsm icon-start">
                                            <span className="color-green">
                                                <i className="fas fa-badge-check" />
                                            </span>
                                            Verified User
                                        </span>
                                    </div>
                                </div>
                                <div className="more-info font-sm">
                                    <div className="icon-start">
                                        <i className="fal fa-map-marker-alt" />
                                        Los Angela's, USA
                                    </div>
                                    <div className="icon-start">
                                        <i className="fal fa-clock" />
                                        04 Days ago
                                    </div>
                                </div>
                            </div>
                            <h5 className="lc-1">Ana Studios was very logical and creative at the same time</h5>
                            <p>The client received excellent feedback on DePalma Studios’ designs due to
                                their website's improved look and feel. The team was very communicative and
                                collaborative, and they demonstrated a unique understanding of the client’s
                                requirements, providing very.
                            </p>
                        </div>
                    </div> */}
                    {Array.isArray(Data.data) && (
                        Data.data.map((item) => {
                            return (
                                <div className="review-list mb-30 border radius-md">
                                    <div className="review-item p-30">
                                        <div className="review-header flex-wrap mb-20">
                                            <div className="author d-flex align-items-center justify-content-between gap-3">

                                                <div className="author-info">
                                                    <h6 className="mb-1">
                                                        <a href="error-404.html" target="_self" title="Link">{item.user.name}</a>
                                                    </h6>
                                                    <div className="ratings mb-1">
                                                        <div className="rate bg-img color-all" style={{ fontSize: "10px", width: "100%", marginLeft: "3px", marginBottom: "1px" }} data-bg-image="assets/images/rate-star.png">
                                                            {

                                                                [...Array(item.rate)].map((_, index) => {  // Thay "item" bằng "_" để tránh xung đột
                                                                    return (
                                                                        <FontAwesomeIcon
                                                                            key={index}  // Thêm key cho mỗi phần tử
                                                                            icon={faStar}
                                                                            style={{ marginRight: "5px" }}
                                                                        />
                                                                    );
                                                                })

                                                            }
                                                        </div>
                                                    </div>
                                                    <span className="font-xsm icon-start color-all" >

                                                        <FontAwesomeIcon style={{ color: "#30C2EC", marginRight: "4px" }} icon={faUser} /> {item.role == "tea" ? ("Teacher") : ("Student")}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="more-info font-sm">
                                                <div className="icon-start color-all" >
                                                    <FontAwesomeIcon icon={faClock} style={{ marginRight: "8px" }} />
                                                    <span>{item.created_at}</span>
                                                </div>

                                            </div>
                                        </div>
                                        <p className='color-gray'>
                                            {item.content}
                                        </p>

                                        <ul className='d-flex  detail-image-review'>
                                            {
                                                item.images.length > 0 && (
                                                    item.images.map((item_image) => {
                                                        return (
                                                            <li><Image
                                                                width={200}
                                                                src={item_image}
                                                            /></li>
                                                        )
                                                    })
                                                )
                                            }
                                        </ul>
                                    </div>
                                    {/* <div className="review-reply bg-light border-top p-30">
                                <div className="review-header flex-wrap mb-20 d-flex align-items-center justify-content-between gap-3">
                                    <div className="author d-flex align-items-center gap-2">
                                        <div className="icon"><i className="fal fa-reply-all" /></div>
                                        <h6 className="mb-0">Reply from Ana Rita Pailo</h6>
                                    </div>
                                    <div className="more-info font-sm">
                                        <div className="icon-start"><i className="fal fa-clock" />04 Days ago</div>
                                    </div>
                                </div>
                                <div className="message">
                                    <p>Hi Thomas,</p>
                                    <p>I can see that we screwed up in our communication with you, and for that
                                        I sincerely apologize!</p>
                                    <p>I just re-read the email chain with Sven and I can see that we dropped
                                        the ball in of our explanation of how we work. I think there were
                                        several miscommunications that happened here, which I take full
                                        responsibility for.</p>
                                </div>
                            </div> */}
                                </div>
                            )
                        })
                    )}

                    {/* Pagination */}
                    <nav className="pagination-nav mb-30">
                        {Data.total != null && <Pagination align="center" defaultCurrent={1} total={parseInt(Data.total.count) * 10} onChange={handlePageChange} />}
                    </nav>
                </div>
                <Form
                    name="basic"
                    style={{ width: "100%" }}
                    wrapperCol={{
                        span: 24,
                    }}

                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handle_submit_review}
                >
                    <Form.Item name="rate" label="Rate">
                        <Rate />
                    </Form.Item>
                    <Form.Item name="content" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
                        <Input.TextArea rows={6} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 24,
                        }}
                    >


                        <Form.Item label="Upload Image">
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                            >
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                        </Form.Item>
                        <div style={{ textAlign: 'right',marginTop : "-100px" }}>
                            <Button className='background-color-All' type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </div>
                    </Form.Item>
                </Form>

            </div>,
        },
    ];
    let formattedPrice = 0
    if (DataDetailCourse != null) {
        formattedPrice = new Intl.NumberFormat('vi-VN').format(DataDetailCourse.price) + ' VNĐ';

    }
    return (
        DataDetailCourse != null && <div className="course-details-area pb-60">
            {/* Course title */}

            {/* course-description */}
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-8" data-aos="fade-up">
                        {/* course-details-tab */}
                        <div className="course-details-tab pt-5">

                            <div className="tab-content phisstab_detail_course">
                                <Tabs defaultActiveKey="1" items={items} onChange={handle_tabs_course_Detail} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" >
                        <aside className="widget-area bg-white shadow-md radius-md">
                            <div className="widget widget-enroll p-25" style={{
                                boxShadow: "#88a5bf7a 6px 2px 16px, #fffc -6px -2px 16px"
                            }}>
                                <figure className="course-img">
                                    <img className="lazyload" src={DataDetailCourse.img[0]} data-src="assets/images/course/pro-13.jpg" alt="course" />

                                </figure>
                                <div className="course-price mt-15" style={{ textAlign: "center" }}>
                                    <h4 className="color-all new-price" style={{ fontSize: "22px" }}>{DataDetailCourse.price}</h4>
                                    <h4 className="color-gray new-price prev-price" style={{ fontSize: "20px" }}>3.888 $</h4>

                                </div>
                                <div className="btn-groups mt-15">
                                    <button href="cart.html" className="background-color-All btn btn-lg btn-primary radius-sm w-100" title="Add to Cart" onClick={() => handle_register_course_detail(id)} target="_self">Register</button>
                                </div>

                                <ul className="toggle-list list-unstyled mt-20" id="toggleList" data-toggle-show={5}>
                                    <li className="icon-start">
                                        <span>
                                            <i className="fal fa-clock" />
                                            <span className="name">Start Time :</span>
                                        </span>
                                        <span className='color-gray' style={{ fontWeight: "600", fontSize: "15px" }}>{DataDetailCourse.time.startDisplay}</span>
                                    </li>
                                    <li className="icon-start">
                                        <span>
                                            <i className="fal fa-user" />
                                            <span className="name">Schedule :</span>
                                        </span>
                                        <span>
                                            {
                                                DataDetailCourse.Day.map((item) => {
                                                    return (
                                                        <span className='background-color-All' style={{ padding: "2px 8px 2px 8px", borderRadius: "10px", display: "inline-block", marginLeft: "7px", fontWeight: "600", fontSize: "9px" }} >{item}</span>
                                                    )
                                                })
                                            }
                                        </span>
                                    </li>
                                    <li className="icon-start">
                                        <span>
                                            <i className="fal fa-signal-alt-3" />
                                            <span className="name">Hours :</span>
                                        </span>
                                        <span>
                                            {DataDetailCourse.Hour.map((itemhour) => {
                                                return (
                                                    <span className='background-color-All' style={{ padding: "2px 4px 2px 4px", borderRadius: "8px", display: "inline-block", marginLeft: "7px", fontWeight: "600", fontSize: "9px" }} >{itemhour}</span>
                                                )
                                            })}
                                        </span>

                                    </li>
                                    <li className="icon-start">
                                        <span>
                                            <i className="fal fa-file-certificate" />
                                            <span className="name">Leasson:</span>
                                        </span>
                                        <span className='color-gray' style={{ display: "inline-block", marginLeft: "7px", fontWeight: "600", fontSize: "15px" }} >{DataDetailCourse.numberlesson}</span>
                                    </li>
                                    <li className="icon-start">
                                        <span>
                                            <i className="fal fa-globe" />
                                            <span className="name">Teacher:</span>
                                        </span>
                                        <span className='color-gray' style={{ display: "inline-block", marginLeft: "7px", fontWeight: "600", fontSize: "14px" }}>{DataDetailCourse.user.name}</span>
                                    </li>
                                </ul>

                                <div className="social-link rounded phicssdetailcoursesocial justify-content-center mt-20 pt-20 border-top">
                                    <a href="https://www.instagram.com/" target="_blank" title="instagram"><FontAwesomeIcon style={{ fontSize: "14px" }} className="icon" icon={faFacebookF} /></a>
                                    <a href="https://www.dribbble.com/" target="_blank" title="dribbble"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                                    <a href="https://www.twitter.com/" target="_blank" title="twitter"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                                    <a href="https://www.youtube.com/" target="_blank" title="youtube"><FontAwesomeIcon style={{ fontSize: "17px" }} className="icon" icon={faTelegram} /></a>
                                </div>
                            </div>
                        </aside>
                        {/* Spacer */}
                        <div className="pb-40" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail