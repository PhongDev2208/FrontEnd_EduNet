import { Card, Input, Col, Row, Table, Button, Form } from 'antd';
import { GetMycourse_Student,EditStatusCourse } from "../../../../../service/Stucourse"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser,selectRole } from "../../../../../Redux/user";
import { useParams, Link,useNavigate } from "react-router-dom";
import handle_error from '../../../../../Components/helper/handle_error';

function ClassRoom() {
    const { id } = useParams()
    const token = useSelector(selectUser)
    const role = useSelector(selectRole)
    const navigate = useNavigate()
    const [Data_Mycourse_Student, Set_Data_Mycourse_student] = useState(null)
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            align: 'center', 
            width: 'auto',  
        },
        {
            title: 'Name',
            dataIndex: 'name',
            align: 'center',
            width: 'auto',
        },
        {
            title: 'Phone',
            dataIndex: 'Phone',
            align: 'center',
            width: 'auto',

        },
        {
            title: 'Email',
            dataIndex: 'email',
            align: 'center',
            width: 'auto',

        },
        {
            
                ...(role === "tea" ? { title: 'Status' } : {}),
                dataIndex: 'Status',
                align: 'center',
                width: 'auto',
            

        }
    ];
 
   const handle_status_mycourse =async (e) => {
        const respond = await EditStatusCourse({id : e})
        if(respond.status == true){
            fetchAPI()
        }
        handle_error(respond,navigate)
   }
    const fetchAPI = async () => {
        const Respond = await GetMycourse_Student(id );
        if (Respond.status == true && Array.isArray(Respond.data)) {
            const New_Data_Custom = Respond.data.map((item, index) => {
                return (
                    {
                        key: index,
                        stt: index + 1,
                        name: item.student ? (item.student.name) : ("NUll") ,
                        Phone: item.phone,
                        email: item.email,
                        Status :role === "tea" &&
                        ( item.status == 1 ? ( <Button className='custom-btn' onClick={() => handle_status_mycourse(item._id)}>Not reviewed</Button>) : ( <Button onClick={() => handle_status_mycourse(item._id)}>Reviewed</Button>)                    )
                     }
                )
            })
            Set_Data_Mycourse_student(New_Data_Custom)

        }
        handle_error(Respond,navigate)
    }

    useEffect(() => {
        fetchAPI()
    }, [])
    return (
        Data_Mycourse_Student != null ? (
            <div className="shopping-area pt-100 pb-60">
                <div className="container">
                    <Card title="List of course Student" style={{ marginBottom: "50px" }} bordered={false}>
                        <Table columns={columns} dataSource={Data_Mycourse_Student} />
                    </Card>
                </div>
            </div>
        ) : (
            <div className="shopping-area pt-100 pb-60">
                <div className="container">
                  Không có học sinh trong khóa học
                </div>
                </div>
        )
    );

}

export default ClassRoom