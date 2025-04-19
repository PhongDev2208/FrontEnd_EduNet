import { Table, Card, Button, Flex, DatePicker, Input, Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare, faLock } from '@fortawesome/free-solid-svg-icons';
import { getCookie } from "../../../../Components/helper/cookie"
import { useNavigate, Link } from "react-router-dom"
import { GetMycourse_course } from '../../../../service/Stucourse';
import { GetAllCourse } from "../../../../service/Course"
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectRole } from '../../../../Redux/user';
import { useEffect, useState } from 'react';
import "../../../../Styles/home/css/styleprivate.css"
import Seturl from '../../../../Components/helper/SetURL';
import DeletedURL from '../../../../Components/helper/deleteURL';
const { RangePicker } = DatePicker;
const { Search } = Input;

function MyCourse() {
    const token = useSelector(selectUser)
    const role = useSelector(selectRole)
    const [DataStCr, setdatastCr] = useState([])
    const navigate = useNavigate()
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
        },
        {
            title: 'Name_Course',
            dataIndex: 'name_Course',
        },
        {
            title: 'Status of course',
            dataIndex: 'statusofcourse',
        },
        {
            title: 'Lesson',
            dataIndex: 'lesson',

        }, {
            title: 'Detail',
            dataIndex: 'detail',
            align: "center"

        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: "center"

        },
    ];
    const option = {
        key: null,
        status: null
    }

    const FetchAPI = async (type = null) => {
        let respond = {}
        const searchParams = new URLSearchParams(window.location.search);
        option.key = searchParams.get('key');
        option.status = searchParams.get('status');
        if (role == "tea") {
            respond = await GetAllCourse("GetCourseTea", option, token)
        }
        else {
            respond = await GetMycourse_course("GetCourse", option, token)
        }
        let newdata = []
        if (respond.status == true && respond.data.length > 0) {
            newdata = respond.data.map((item, index) => {
                return (
                    {
                        key: index,
                        image: <div className="course text-center">
                            <figure className="course-img text-center">
                                <img className="lazyload" src={item.img[0]} alt="course" />
                            </figure>
                        </div>,
                        name_Course: <div className="course-desc ">
                            <h6 className="mb-0">
                                <a className="course-title" target="_self" title="Link" href="course-details.html">{item.title}</a>
                            </h6>
                        </div>,
                        statusofcourse: <div className="price ms-2">
                            <Select
                                value={item.status_course}
                                style={{ width: '70%' }}
                                onChange={handle_Status_Change}
                                options={[
                                    { value: 0, label: 'Will Learn' },
                                    { value: 1, label: 'Current Learning' },
                                    { value: 2, label: 'Have Learned' },

                                ]}
                            />
                        </div>,
                        lesson: <div className="course-availability ms-3">
                            {item.numberlesson}
                        </div>,
                        detail: <div className="">
                            <Link to={role == "tea" ? (`/Mycourse/detail/${item._id}`) : (`/Mycourse/detail/${item.id}`)} className="btn text-center btn-sm btn-primary rounded-pill" >Detail</Link>
                        </div>,
                        action: role === "tea" && (
                            <div className="text-center ms-2">
                                <Link to={`/Mycourse/edit/${item._id}`}>
                                    <button className="btn btn-primary text-center" type="button" aria-label="button">
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </Link>

                                <button onClick={() => handle_lock_mycourse(item._id)} className="btn btn-primary ms-2 text-center" type="button" aria-label="button">
                                    <FontAwesomeIcon icon={faLock} />
                                </button>
                            </div>
                        )
                    }
                )
            })
        }
        setdatastCr(newdata)

    }
    const handle_Status_Change = (e) => {
        console.log(e)
    }
    const handle_lock_mycourse = (e) => {
        console.log(e)
    }
    const handle_status_mycourse = (e) => {
        if (e == 3) {
            DeletedURL()
        }
        else {
            Seturl({ title: 'status', value: e })
        }
        FetchAPI()
    }
    const handle_search_mycourse = (key) => {
        Seturl({ title: 'key', value: key })
        FetchAPI()
    }
    useEffect(() => {
        FetchAPI()
    }, [])
    return (
        <div>
        
            {/* Breadcrumb end */}
            {/* Wishlist-area Start */}

            <div className="shopping-area pt-90 pb-60">
                <div className="container text-center">
                    <Card style={{
                        width: '100%',
                        textAlign: "left",
                        marginBottom: "50px"
                    }}
                        title="Search" >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{width :"50%"}}>
                            <Button onClick={() => handle_status_mycourse(3)}>GetAll</Button>
                                <Button onClick={() => handle_status_mycourse(0)}>Will</Button>
                                <Button onClick={() => handle_status_mycourse(1)}>Current</Button>
                                <Button onClick={() => handle_status_mycourse(2)}>Already</Button>

                            </div>
                            <div style={{width : "80%", textAlign : "right"}}>
                            <Search style={{
                                width: '50%',
                            }} placeholder="input search text" onSearch={handle_search_mycourse} enterButton />
                            </div>

                        </div>
                    </Card>

                    <Card style={{
                        width: '100%',
                        textAlign: "left",
                        marginBottom: "50px"
                    }}
                        title="Your Course" >
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
                            <RangePicker style={{ border: "2px solid #1677ff" }} />
                             {role == "tea" && <Button type="primary" ><Link style={{ textDecoration: 'none' }} to="/Mycourse/Add">Add</Link></Button>}
                        </div>

                        {DataStCr.length > 0 ? (
                            <Table columns={columns} dataSource={DataStCr} />
                        ) : (<div>Bạn chưa đăng ký bất kì khóa học nào </div>)}
                    </Card>

                </div>
            </div>


        </div>
    )
}
export default MyCourse