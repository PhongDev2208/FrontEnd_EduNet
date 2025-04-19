import { Card, Col, Row, Table, Button } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { GetAllTopic } from '../../../../../service/Topic';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectRole } from '../../../../../Redux/user';
import { useEffect, useState } from 'react';
import "../../../../../Styles/home/css/styleprivate.css"
function Quizz() {
    const { id } = useParams();
    const token = useSelector(selectUser)
    const role = useSelector(selectRole)

    const [DataTopic, SetDataTopic] = useState()
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Link',
            dataIndex: 'link',

        },
        {
            title: 'Result',
            dataIndex: 'result',

        },
    ];

    const fetchAPI = async () => {
        const Respond = await GetAllTopic({ key: id }, token)
        if (Respond.status === true) {
            const Newdata = Respond.data.map((item, index) => {
                return (
                    {
                        key: item.id ? item.id : `item-${index}`, stt: index + 1, title: item.title,
                        link: <Link to={`/Mycourse/quizz/practics/${item._id}`}><Button>Practics</Button></Link>,
                        result: <Link style={{ marginLeft: "7px" }} to={`/Mycourse/quizz/Answer/${item._id}`}><Button>View</Button></Link>

                    }
                )
            })
            SetDataTopic(Newdata)
        }
    }
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div>
          
            <div className="shopping-area pt-100 pb-60">
                <div className="container ">        <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <Card title={
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span>Luyện Tập</span>
                                {role === "tea" && (
                                    <Button type="primary">
                                        <Link style={{ textDecoration: "none" }} to={`/Mycourse/Quizz/add/${id}`}>
                                            Add
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        } bordered={false}>


                            <Table columns={columns} dataSource={DataTopic} />
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title="Example" bordered={false}>
                           No Data
                        </Card>
                    </Col>
                  
                </Row>
                </div>
            </div>
        </div>
    )
}

export default Quizz