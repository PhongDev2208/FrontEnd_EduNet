import { useParams,useNavigate } from "react-router-dom";
import { Button, Form, Input, Row, Col, Card, Select, Upload, message } from 'antd';
import { useEffect, useState } from 'react';
import { Uploadlist } from "../../../../../Components/helper/UploadImg";
import { PostMaterial,GetAllMaterial } from "../../../../../service/Material";
import { useSelector } from 'react-redux';
import { selectUser } from "../../../../../Redux/user";
import Swal from 'sweetalert2';

function AddchildMaterial() {
    const { id } = useParams();
    const token = useSelector(selectUser);
    const [Parent,setParent] = useState()
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate()

    const FetchAPI = async() => {
         const respond = await GetAllMaterial("Getall",{key : id},token)
         if(respond.status == true){
            const newdata = respond.data.map((item) => {
                return (
                    {
                        value : item._id,
                        label : item.title
                    }
                )
            })
            setParent(newdata)
         }
    }
    const handle_Submit_form_create_course = async (values) => {
        values.file = await Uploadlist(fileList);

        const respond = await PostMaterial("PostChild", values, token);
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
    };

    const onChange_Image_add_material = async ({ fileList: newFileList, file }) => {
        const isPdf = file.type === 'application/pdf'; // Kiểm tra loại file
    if (!isPdf) {
        message.error('You can only upload PDF files!');
        setFileList([]); // Xóa danh sách nếu file không hợp lệ
    } else {
        setFileList(newFileList); // Cập nhật danh sách file nếu hợp lệ
    }
    };

    
    useEffect(() => {
        FetchAPI()
    },[])
    return (
        Parent != null &&  <div className="shopping-area pt-100 pb-60">
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
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    layout="horizontal"
                    key={"1"}
                    onFinish={handle_Submit_form_create_course}
                >
                    <Row gutter={32}>
                        <Col span={12}>
                            <Form.Item
                                label="Title"
                                name="title"
                                rules={[{ required: true, message: 'Please input your Data!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Position"
                                name="position"
                                rules={[{ required: true, message: 'Please input your Data!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Link Video"
                                name="Link"
                                rules={[{message: 'Please input your Data!' }]}
                            >
                                <Input placeholder="Can be left empty"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Parent"
                                name="resource_id"
                                rules={[{ required: true, message: 'Please input your Data!' }]}
                            >
                                <Select
                                    style={{ width: '100%' }}
                                    options={Parent}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Upload Link Material PDF"
                                rules={[{ required: true, message: 'Please input your Data!' }]}
                            >
                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange_Image_add_material}
                                >
                                    {fileList.length < 5 && '+ Upload'}
                                </Upload>
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
    );
}

export default AddchildMaterial;
