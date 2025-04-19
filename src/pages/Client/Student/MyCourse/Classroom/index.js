import { Card, Input, Col, Row, Table, Button, Form } from 'antd';
import { GetMycourse_Student,EditStatusCourse } from "../../../../../service/Stucourse"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser,selectRole } from "../../../../../Redux/user";
import { useParams, Link } from "react-router-dom";
import Swal from 'sweetalert2';

function ClassRoom() {
    const { id } = useParams()
    const token = useSelector(selectUser)
    const role = useSelector(selectRole)
    const [Data_Mycourse_Student, Set_Data_Mycourse_student] = useState(null)
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            align: 'center', // Căn giữa nội dung trong các cột
            width: 'auto',   // Để các cột tự động căn đều
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
        const respond = await EditStatusCourse({id : e},token)
        if(respond.status == true){
            fetchAPI()
        }else{
            Swal.fire({
                icon: "error",
                title: "There was an error",
                showConfirmButton: false,
                timer: 1500
              });
        }
   }
    const fetchAPI = async () => {
        const Respond = await GetMycourse_Student({ key: id }, token);
        console.log(Respond)
        if (Respond.status == true && Respond.data.length > 0) {
            const New_Data_Custom = Respond.data.map((item, index) => {
                return (
                    {
                        key: index,
                        stt: index + 1,
                        name: item.student ? (item.student.name) : ("NUll") ,
                        Phone: item.phone,
                        email: item.email,
                        Status :role === "tea" &&
                        ( item.status == 0 ? ( <Button className='custom-btn' onClick={() => handle_status_mycourse(item._id)}>Not reviewed</Button>) : ( <Button onClick={() => handle_status_mycourse(item._id)}>Reviewed</Button>)                    )
                     }
                )
            })
            Set_Data_Mycourse_student(New_Data_Custom)

        }
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