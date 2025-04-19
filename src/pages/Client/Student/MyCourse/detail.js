import { Card, Col, Row } from 'antd';
import {Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faGraduationCap, faBookmark ,faBook,faBell,faBars} from '@fortawesome/free-solid-svg-icons';
function DetailMyCourse() {
    const { id } = useParams();
    return (
        <div>
           
            <div className="shopping-area phicss_detail_Mycourse pt-100 pb-60">
                <div className="container ">
                    <Row gutter={[24,24]}>
                        <Col span={8}>
                        <Card title={<span><FontAwesomeIcon style={{marginRight : '7px'}} icon={faBars} /> Overview</span>} bordered={false}>
                            <Link  to={`/Mycourse/Classroom/${id}`}>  Overview of the detailed course curriculum </Link>
                            </Card>
                        </Col>
                        <Col span={8}>
                        <Card title={<span><FontAwesomeIcon style={{marginRight : '7px'}} icon={faGraduationCap} /> Class</span>} bordered={false}>

                             <Link to={`/Mycourse/Classroom/${id}`}> The members in your class </Link>

                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={<span><FontAwesomeIcon style={{marginRight : '7px'}} icon={faBookmark} /> Materials</span>} bordered={false}>

                            <Link to={`/Mycourse/Material/${id}`}> All the documents related to the course</Link>
                            </Card>
                        </Col>
                        <Col span={8}>
                        <Card title={<span><FontAwesomeIcon style={{marginRight : '7px'}} icon={faBell} /> Notification</span>} bordered={false}>
                            <Link to={`/Mycourse/Assignment/index/${id}`}>Announcements from the teacher</Link> 
                            </Card>
                        </Col>
                        <Col span={8}>
                        <Card title={<span><FontAwesomeIcon style={{marginRight : '7px'}} icon={faBook} /> Assignment</span>} bordered={false}>
                        <Link to={`/Mycourse/Assignment/index/${id}`}>
                            Assignment Of Course</Link>
                            </Card>
                        </Col>
                        <Col span={8}>
                        <Card title={<span><FontAwesomeIcon style={{marginRight : '7px'}} icon={faRocket} /> Quizz</span>} bordered={false}>
                               <Link to={`/Mycourse/quizz/${id}`}> Quiz to revise the knowledge acquired</Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default DetailMyCourse