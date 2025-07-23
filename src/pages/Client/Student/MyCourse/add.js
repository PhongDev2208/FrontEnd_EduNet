import { Uploadlist } from "../../../../Components/helper/UploadImg"
import { PostCourse } from "../../../../service/Course"
import { GetAllCategories } from "../../../../service/Categories";
import { useNavigate } from "react-router-dom"
import { Button, Select, Form, Input, Row, Col, Card, Upload, DatePicker, Space } from 'antd';
import { useEffect, useState } from 'react';
import MyEditor from "../../../../Components/Components/tinymce"
import { AlertSuccess } from "../../../../Components/Components/Alert";
import handle_error from "../../../../Components/helper/handle_error";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

function AddMycourse() {
    const [fileList, setFileList] = useState([]);
    const [content, setcontent] = useState("");
    const [goal, setgoal] = useState("");
    const [AddDay, setAddDay] = useState([1])
    const [schedule, setschedule] = useState("");
    const [categories,setCategories] = useState([])
    const navigate = useNavigate()

    const FetchAPI = async() => {
        const Respond = await GetAllCategories("GetAll")
        if(Respond.status == true && Respond.data.length > 0){
            const CustomCategories = Respond.data.map((item) => {
                return ({
                    value : item._id,
                    label : item.name
                })
            })
            setCategories(CustomCategories)
        }
    }
    const Handle_data_schedule = async(e) => {
        const value = e.target.value; 
        setschedule(value); 
    }
    const Handle_Addday_Mycourse = (id) => {
        if (id == 1) {
            setAddDay([...AddDay, 1])
        }
        else if (AddDay.length > 1) {
            let newarry = [...AddDay]
            newarry.pop()
            setAddDay(newarry)
        }
    }
    const handle_Submit_form_create_course = async (values) => {
        const startEndRange = values.start_time.map((date) => {
            return (
                {
                    display: date.format("DD-MM-YYYY"),
                    time: new Date(date)
                }
            )
        })
        const daysOfWeek = AddDay.map((item,index) => {
               return (
                {
                    Day : parseInt(values[`day${index}`]) - 1 ,
                    hourstart : parseInt(values[`starttimeday${index}`]),
                    hourend : parseInt(values[`endtimeday${index}`])
                }
               )
        })
        const time = {

        }
        
        const schedulesplit = schedule.split("***")
        const newschedule = schedulesplit.map((item) => {
           const splititem = item.split("\n")
           let check = false;
           let tmp = {
            title : null,
            description : []
           }
           splititem.forEach((itemchild) => {
             if(check == false && itemchild != null && itemchild != "")
             {
                tmp.title = itemchild
                check = true
             }else if(itemchild != ""){
                tmp.description.push(itemchild)
             }
           })
           return tmp
        })
        time.start_time = startEndRange[0].time
        time.startDisplay = startEndRange[0].display
        time.end_time = startEndRange[1].time
        time.EndDisplay = startEndRange[1].display
        time.daysOfWeek = daysOfWeek
        const publicDate = {
            display: values.public.format("DD-MM-YYYY"),
            time: new Date(values.public)

        };
        values.time = time;
        values.public = publicDate;
        values.description = content
        values.goal = goal
        values.schedule = newschedule
        values.img = await Uploadlist(fileList);
        const respond = await PostCourse(values)
        if(respond.status == true){
              AlertSuccess("Add successed")
              navigate("/mycourse")
        }
        handle_error(respond,navigate)
    }
    const onChange_Image_add_mycourse = async ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    useEffect(() => {
        FetchAPI()
    })
    return (
        <div className="shopping-area pt-100 pb-60">
            <div className="container text-center">
                <Card title="Add Your Course"
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
                                    label="title"
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
                                    label="Numberlesson"
                                    name="numberlesson"
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
                                    label="Category_Id"
                                    name="categoryid"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                            <Select
                                                style={{ width: '100%' }}
                                                options={categories}
                                            />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Price"
                                    name="price"
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
                                    label="Public"
                                    name="public"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                    <DatePicker style={{ border: "2px solid #1677ff", width: "100%" }} />

                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Start End"
                                    name="start_time"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                    <RangePicker style={{ border: "2px solid #1677ff", width: "100%" }} />

                                </Form.Item>
                            </Col>



                            {AddDay.map((item, index) => (
                                <div key={index} style={{width : "100%" , display : "flex"}}>
                                    <Col span={12} key={`day-select-${index}`}>
                                        <Form.Item
                                            label="School day"
                                            name={`day${index}`}
                                            initialValue="2" // mặc định là Thứ 2
                                        >
                                            <Select
                                                style={{ width: '100%' }}
                                                options={[
                                                    { value: '2', label: 'Thứ 2' },
                                                    { value: '3', label: 'Thứ 3' },
                                                    { value: '4', label: 'Thứ 4' },
                                                    { value: '5', label: 'Thứ 5' },
                                                    { value: '6', label: 'Thứ 6' },
                                                    { value: '7', label: 'Thứ 7' },
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>

                                    <Col span={6}  key={`start-time-${index}`}> 
                                        <Form.Item
                                            label="Hour Start"
                                            name={`starttimeday${index}`}
                                            initialValue=""
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>

                                    <Col span={6} key={`end-time-${index}`}>
                                        <Form.Item
                                            label="Hour End"
                                            name={`endtimeday${index}`}
                                            initialValue=""
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </div>
                            ))}
                            <Col span={24} style={{ textAlign: "right" }}>
                                <Button onClick={() => Handle_Addday_Mycourse(1)}>Thêm ngày</Button>
                                <Button onClick={() => Handle_Addday_Mycourse(2)}>Xóa</Button>
                            </Col>

                            <Col span={12}>
                                <Form.Item
                                    label="Quantity"
                                    name="quantity"
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
                                <Form.Item label="Upload Image"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                    <Upload
                                        listType="picture-card"
                                        fileList={fileList}
                                        onChange={onChange_Image_add_mycourse}
                                    >
                                        {fileList.length < 5 && '+ Upload'}
                                    </Upload>
                                </Form.Item>
                            </Col>
                            <Col span={24} style={{ marginTop: "15px" }}>
                                <Form.Item label="Require And Description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                    <MyEditor setcontent={setcontent} />

                                </Form.Item>


                            </Col>
                            <Col span={24} style={{ marginTop: "15px" }}>
                                <Form.Item label="Objectives of the course"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                    <MyEditor setcontent={setgoal} />

                                </Form.Item>

                            </Col>
                            <Col span={24} style={{ marginTop: "15px" }}>
                                <Form.Item label="Schedule"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Data!',
                                        },
                                    ]}
                                >
                                      <TextArea onChange={Handle_data_schedule} rows={12} 
                                                style={{ height: 'auto', overflowY: 'auto' }}  // Thêm thuộc tính cuộn

                                    /> {/* Thêm thuộc tính rows để xác định số dòng hiển thị */}
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Button type="primary" style={{ float: 'right', padding: "20px", marginTop: "30px" }} htmlType="submit">
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

export default AddMycourse