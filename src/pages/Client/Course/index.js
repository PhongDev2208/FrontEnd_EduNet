import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare, faClock ,faBookOpen,faMoneyBillWave,faCalendar} from '@fortawesome/free-solid-svg-icons';
import { GetAllCourse } from "../../../service/Course"
import { Input } from 'antd';
import { Link  } from 'react-router-dom';
import { Pagination } from 'antd';
import "../../../Styles/home/css/styleprivate.css"
import Seturl from "../../../Components/helper/SetURL"
import { Color } from "antd/es/color-picker";

const { Search } = Input;
function Course() {
    const [dataCouse, setdatacourse] = useState([]);
    const [datasugess, setdatasugess] = useState([]);
    const [inputsearch , setinput] = useState(null)
    const [currentpage, setcurrentpage] = useState({
        start : 1,
        total : 1,
    })
    const option = {
    }
    const sugess = {

    }
    const fetchAPI = async (type) => {
       switch (type){
        case 1 : 
           const searchParams = new URLSearchParams(window.location.search);
           option.key = searchParams.get('key');
           option.limit = 9;
           option.page = searchParams.get('page')
           const dataCFectch = await GetAllCourse("getall",option,null)
           console.log(dataCFectch.data)

           if(dataCFectch.data){
              setdatacourse(dataCFectch.data) 
               setcurrentpage({
                 start : dataCFectch.pagination.start,
                 total : dataCFectch.pagination.count
            })
           }
           break; 
        case 2 : 
           sugess.limit = 5;
           const DataSugess = await GetAllCourse("getall",sugess,null);
            setdatasugess(DataSugess.data) 
           break; 
    
       }
    }

    useEffect(() => {
        fetchAPI(1);
    },[])
    
    const onSearchinput = (value, _e, info) =>{
        Seturl({title : 'key' , value : value})
        Seturl({title : 'page' , value : 1})
        fetchAPI(1);
    }
    const onChangeinput = (e) => {
        setinput(e.target.value);
        sugess.key = e.target.value
        if(sugess.key.length > 0){
            fetchAPI(2); 
        }
        else{
            setdatasugess([])
        }
    }

    const handle_suggess_search = (e) => {
        setinput(e)
        onSearchinput(e)
    }
    const handle_pagination = (e) => {
        Seturl({title : "page" , value : e})
        fetchAPI(1)
    }
    return (
        <div className="course-area pt-60 pb-75">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-4 col-xl-3">
                        {/* Spacer */}
                        <div className="pb-40 d-none d-lg-block" />
                        <div className="widget-offcanvas offcanvas-lg offcanvas-start" tabIndex={-1} id="widgetOffcanvas" aria-labelledby="widgetOffcanvas">
                            <div className="offcanvas-header px-20">
                                <h4 className="offcanvas-title">Filter</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#widgetOffcanvas" aria-label="Close" />
                            </div>
                            <div className="offcanvas-body p-0">
                                <aside className="widget-area px-20" data-aos="fade-up">
                                    <div className="widget widget-categories py-20">
                                        <h5 className="title">
                                            <button className="accordion-button color-all" type="button" data-bs-toggle="collapse" data-bs-target="#categories">
                                                Categories
                                            </button>
                                        </h5>
                                        <div id="categories" className="collapse show">
                                            <div className="accordion-body mt-20 scroll-y">
                                                <ul className="list-group ">
                                                    {/* Add class .list-dropdown for dropdown-menu */}
                                                    <li className="list-item color-gray">
                                                        <a className="category-toggle" href="courses.html" title="link" target="_self">All<span className="qty"></span></a>
                                                    </li>
                                            
                                                    <li className="list-item">
                                                        <a href="courses.html" title="link" target="_self" className="category-toggle">Marketing<span className="qty"></span></a>
                                                    </li>
                                                    <li className="list-item">
                                                        <a href="courses.html" title="link" target="_self" className="category-toggle">Photography<span className="qty"></span></a>
                                                    </li>
                                                    <li className="list-item">
                                                        <a href="courses.html" title="link" target="_self" className="category-toggle">IT &amp; Software<span className="qty"></span></a>
                                                    </li>
                                                    <li className="list-item">
                                                        <a href="courses.html" title="link" target="_self" className="category-toggle">Music &amp; Media<span className="qty"></span></a>
                                                    </li>
                                                    <li className="list-item">
                                                        <a href="courses.html" title="link" target="_self" className="category-toggle">Life Science<span className="qty"></span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget-type py-20">
                                        <h5 className="title">
                                            <button className="accordion-button color-all" type="button" data-bs-toggle="collapse" data-bs-target="#topic" aria-expanded="true" aria-controls="topic">
                                                Day
                                            </button>
                                        </h5>
                                        <div id="topic" className="collapse show">
                                            <div className="accordion-body mt-20 scroll-y">
                                                <ul className="list-group custom-checkbox">
                                                    <li>
                                                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox1" defaultValue />
                                                        <label className="form-check-label" htmlFor="checkbox1"><span>MonDay</span><span className="qty"></span></label>
                                                    </li>
                                                    <li>
                                                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox2" defaultValue />
                                                        <label className="form-check-label" htmlFor="checkbox2"><span>Tuesday</span><span className="qty"></span></label>
                                                    </li>
                                                    <li>
                                                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox3" defaultValue />
                                                        <label className="form-check-label" htmlFor="checkbox3"><span>Wednesday</span><span className="qty"></span></label>
                                                    </li>
                                                    <li>
                                                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox4" defaultValue />
                                                        <label className="form-check-label" htmlFor="checkbox4"><span>Thursday</span><span className="qty"></span></label>
                                                    </li>
                                                    <li>
                                                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox4" defaultValue />
                                                        <label className="form-check-label" htmlFor="checkbox4"><span>Friday</span><span className="qty"></span></label>
                                                    </li>
                                                    <li>
                                                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox4" defaultValue />
                                                        <label className="form-check-label" htmlFor="checkbox4"><span>Saturday</span><span className="qty"></span></label>
                                                    </li>
                                                    <li>
                                                        <input className="background-color-All input-checkbox" type="checkbox" name="checkbox" id="checkbox4" defaultValue />
                                                        <label className="form-check-label" htmlFor="checkbox4"><span>Sunday</span><span className="qty"></span></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </aside>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xl-9">
                        {/* Spacer */}
                        <div className="pb-40" />
                        <div className="sort-area" data-aos="fade-up">
                            <div className="row d-flex align-items-center justify-content-between">
                               
                                <div className="col-3" style={{marginLeft : "-70px"}}>
                                    <ul className="sort-list list-unstyled mb-20 text-end" >
                                        <li className="item">
                                            <div className="sort-item d-flex align-items-center">
                                                <div className="me-2 color-all ">Sort By :</div>
                                                <select name="type" style={{border : "1px solid white"}} className="niceselect color-all right">
                                                    <option value="high">Trending</option>
                                                    <option value="low">Newest</option>
                                                    <option value="New">Popular</option>
                                                    <option value="Old">Used</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                               
                                <div className="col-5 buttoncourseseach" >
                                    <Search className=""  placeholder="input search text"  value={inputsearch} onChange={onChangeinput} onSearch={onSearchinput} enterButton />
                                    <div className="row course_suggess_search">
                                        {datasugess.length > 0 && (
                                            datasugess.map((item,index) => {
                                                return (
                                                    <div key={index} onClick={() => handle_suggess_search(item.title)} className="col-12 ps-4">{item.title}</div>                                        
                                                )
                                            })
                                        )}

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row" data-aos="fade-up">
                            {dataCouse != null && (
                                dataCouse.map((item, index) => {
                                    return (
                                        <div className="col-xl-4 col-sm-6" key={index}>
                                            <div className="course-default border radius-md mb-25">
                                                <figure className="course-img">
                                                    <a href="course-details.html" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                                                        <img className="lazyload" src={item.img} data-src="assets/images/course/pro-5.jpg" alt="course" />
                                                    </a>
                                                    <div className="hover-show ">
                                                        <Link to={`/course/detail/${item._id}`} style={{border : "1px solid white"}} className="background-color-All btn btn-md btn-primary rounded-pill" title="Enroll Now" target="_self">Detail</Link>
                                                    </div>
                                                </figure>
                                                <div className="course-details">
                                                    <div className="p-3">
                                                        <div href="course-details.html" target="_self" title="Design" style={{marginBottom : '0px !important' , marginTop : "-20px"}} className="color-all tag font-sm color-primary mb-1">{item.title}</div>
                                                        <h6 className="course-title lc-2 mb-0">
                                                            <a href="course-details.html" target="_self" title="Link">
                                                            Explore the details to help you gain a deeper understanding.
                                                            </a>
                                                        </h6>
                                                        <div className="authors mt-15">
                                                            <div className="">
                                                            <FontAwesomeIcon className="color-all" icon={faBookOpen} />
                                                                <span className="font-sm color-gray" style={{marginLeft : "5px"}}>
                                                                        Le Bao Hong Duc
                                                                </span>
                                                            </div>
                                                        <span className=" font-sm icon-start"><FontAwesomeIcon className="color-all" icon={faClock} /> <span className="color-gray" style={{display : "inline-block" , marginLeft : "1px"}}>{item.time.startDisplay}</span></span>
                                                        </div>
                                                    </div>
                                                    <div className="course-bottom-info px-3 py-2">
                                                    <span className=" font-sm icon-start"><FontAwesomeIcon className="color-all" icon={faMoneyBillWave} /> <span className="color-gray" style={{display : "inline-block" , marginLeft : "1px"}}>{item.price} $</span></span>

                                                    <span className=" font-sm icon-start"><FontAwesomeIcon className="color-all" icon={faCalendar} /> <span className="color-gray" style={{display : "inline-block" , marginLeft : "1px"}}>{item.numberlesson} Leasson</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )}

                        </div>
                        <Pagination current={currentpage.start} align="center" onChange={handle_pagination} total={currentpage.total * 10} />;
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Course