import { useParams,useNavigate } from "react-router-dom";
import { Button, Form, Input, Row, Col, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PostMaterial } from "../../../../../service/Material";
import MyEditor from "../../../../../Components/Components/tinymce"
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../../../../../Redux/user";
import Swal from 'sweetalert2';

function AddMaterial() {
    const { id } = useParams()
    const token = useSelector(selectUser)
    const navigate = useNavigate()


    const handle_Submit_form_create_course = async (values) => {
        values.course_id = id
        const respond = await PostMaterial("Post",values,token)
        console.log(respond)
        if(respond.status == true){
            Swal.fire({
                icon: "success",
                title: "Add Success",
                showConfirmButton: false,
                timer: 1000
              });
           setTimeout(() => {
            navigate(`/Mycourse/material/${id}`)
           }, 1000);
        }
    }

  return (
    <div className="shopping-area pt-100 pb-60">
    <div className="container text-center">
        <Card title="Add Your Assignment"
            bordered={true}
            style={{
                width: '100%',
                textAlign: "left",
                marginBottom: "50px"
            }}>
            <Form
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}

                layout="horizontal"
                key={"1"}
                onFinish={handle_Submit_form_create_course}
            >
               <Row gutter={32}>
                            <Col span={12}>
                                <Form.Item
                                    label="Title"
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Position"
                                    name="position"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type="primary" style={{ float: 'right', padding: "20px", marginTop: "15px" }} htmlType="submit">
                                  Submit
                                </Button>
                            </Col>
                     </Row>
            </Form>
        </Card>
    </div>
</div>
  )
}
export default AddMaterial