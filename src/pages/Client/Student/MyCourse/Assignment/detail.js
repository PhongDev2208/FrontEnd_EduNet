import { Card, Input, Col, Row, Table, Button, Form } from 'antd';
import MyEditor from '../../../../../Components/Components/tinymce';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../../../../../Redux/user";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {GetAllAssignment, GetdetailAssignment} from "../../../../../service/Assignment"
import { PostSubmit } from '../../../../../service/submit';
import { useNavigate, Link } from "react-router-dom"

import Swal from 'sweetalert2';
import { AlertSuccess } from '../../../../../Components/Components/Alert';

function DetailAssignment() {
    const { id ,idas} = useParams()
    const token = useSelector(selectUser)
    const [content, setcontent] = useState("");
    const [newdata,setnewdata] = useState(null)
    const navigate = useNavigate()

    const FetchAPI = async() => {
        const Respond = await GetdetailAssignment(idas)
        console.log(Respond)
        if(Respond.status == true){
            setnewdata(Respond.data)
        }
    }
    const handle_Mycourse_submit_Assignment = async(data) => {
        data.content = content
        data.assignment_id = idas
        const respond = await PostSubmit(data)
        if(respond.status == true){
              AlertSuccess("Add Successed")
              navigate(`/Mycourse/Assignment/index/${id}`)
        }
    }
    useEffect(() => {
        FetchAPI()
    },[])
    return (
        newdata != null && <div className="shopping-area pt-100 pb-60">
        <div className="container ">
            <Card title="Require Assignment" style={{ marginBottom: "50px" }} bordered={false}>
            <div dangerouslySetInnerHTML={{ __html: newdata.description }} />
            </Card>
            <Form name="basic" onFinish={handle_Mycourse_submit_Assignment}>
                 <MyEditor setcontent={setcontent}/>
                <Button type="primary" style={{ float: 'right', padding: "20px" }} htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
    )
}

export default DetailAssignment