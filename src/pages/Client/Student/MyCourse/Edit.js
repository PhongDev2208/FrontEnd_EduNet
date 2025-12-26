import { Uploadlist } from "../../../../components/helper/UploadImg";
import { EditCourse, Getdetailcourse } from "../../../../service/Course";
import { selectUser } from "../../../../redux/user";
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Card,
  Upload,
  DatePicker,
  Select,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetAllCategories } from "../../../../service/Categories";
import MyEditor from "../../../../components/components/tinymce";
import { AlertSuccess } from "../../../../components/components/Alert";
import handle_error from "../../../../components/helper/handle_error";
const { TextArea } = Input;
const { RangePicker } = DatePicker;
function EditMycourse() {
  const token = useSelector(selectUser);
  const { id } = useParams();
  const [AddDay, setAddDay] = useState([1]);
  const [DataCourse, setDatacourse] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [content, setcontent] = useState("");
  const [goal, setgoal] = useState("");
  const [schedule, setschedule] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const FetchAPI = async () => {
    const Respond = await Getdetailcourse(id);
    if (Respond.status == true) {
      setDatacourse(Respond.data);
    }
    const RespondCategories = await GetAllCategories("get-all");
    if (RespondCategories.status == true && RespondCategories.data.length > 0) {
      const CustomCategories = RespondCategories.data.map((item) => {
        return {
          value: item._id,
          label: item.name,
        };
      });
      setCategories(CustomCategories);
    }
  };
  const Handle_data_schedule = async (e) => {
    const value = e.target.value;
    setschedule(value);
  };
  const Handle_Addday_Mycourse = (id) => {
    if (id == 1) {
      setAddDay([...AddDay, 1]);
    } else if (AddDay.length > 1) {
      let newarry = [...AddDay];
      newarry.pop();
      setAddDay(newarry);
    }
  };
  const handle_Submit_form_edit_course = async (values) => {
    const startEndRange = values.start_time.map((date) => {
      return {
        display: date.format("DD-MM-YYYY"),
        time: new Date(date),
      };
    });
    const days_of_week = AddDay.map((item, index) => {
      return {
        day: parseInt(values[`day${index}`]) - 1,
        hour_start: parseInt(values[`starttimeday${index}`]),
        hour_end: parseInt(values[`endtimeday${index}`]),
      };
    });
    const time = {};
    const schedulesplit = schedule.split("***");
    const newschedule = schedulesplit.map((item) => {
      const splititem = item.split("\n");
      let check = false;
      let tmp = {
        title: null,
        description: [],
      };
      splititem.forEach((itemchild) => {
        if (check == false && itemchild != null && itemchild != "") {
          tmp.title = itemchild;
          check = true;
        } else if (itemchild != "") {
          tmp.description.push(itemchild);
        }
      });
      return tmp;
    });
    time.start_time = startEndRange[0].time;
    time.start_display = startEndRange[0].display;
    time.end_time = startEndRange[1].time;
    time.end_display = startEndRange[1].display;
    time.days_of_week = days_of_week;
    const publicDate = {
      display: values.public.format("DD-MM-YYYY"),
      time: new Date(values.public),
    };
    values.id = id;
    values.time = time;
    values.public = publicDate;
    values.description = content;
    values.goal = goal;
    values.schedule = newschedule;
    values.img = await Uploadlist(fileList);
    const respond = await EditCourse(values);
    if (respond.status == true) {
      AlertSuccess("Add successed");
      navigate("/mycourse");
    }
    handle_error(respond, navigate);
  };
  const onChange_Image_add_mycourse = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  useEffect(() => {
    FetchAPI();
  }, []);

  return (
    DataCourse != null && (
      <div className="shopping-area pt-100 pb-60">
        <div className="container text-center">
          <Card
            title="Add Your Course"
            bordered={true}
            style={{
              width: "100%",
              textAlign: "left",
              marginBottom: "50px",
            }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                title: DataCourse.title,
                quantity: DataCourse.quantity,
                numberlesson: DataCourse.numberlesson,
                price: DataCourse.price,
              }}
              layout="horizontal"
              key={"1"}
              onFinish={handle_Submit_form_edit_course}
            >
              <Row gutter={32}>
                <Col span={12}>
                  <Form.Item
                    label="title"
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
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
                        message: "Please input your Data!",
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
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <Select style={{ width: "100%" }} options={categories} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
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
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <DatePicker
                      style={{ border: "2px solid #1677ff", width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Start End"
                    name="start_time"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <RangePicker
                      style={{ border: "2px solid #1677ff", width: "100%" }}
                    />
                  </Form.Item>
                </Col>

                {AddDay.map((item, index) => (
                  <div key={index} style={{ width: "100%", display: "flex" }}>
                    <Col span={12} key={`day-select-${index}`}>
                      <Form.Item
                        label="Ngày học"
                        name={`day${index}`}
                        initialValue="2" // mặc định là Thứ 2
                      >
                        <Select
                          style={{ width: "100%" }}
                          options={[
                            { value: "2", label: "Thứ 2" },
                            { value: "3", label: "Thứ 3" },
                            { value: "4", label: "Thứ 4" },
                            { value: "5", label: "Thứ 5" },
                            { value: "6", label: "Thứ 6" },
                            { value: "7", label: "Thứ 7" },
                          ]}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={6} key={`start-time-${index}`}>
                      <Form.Item
                        label="Giờ Bắt Đầu"
                        name={`starttimeday${index}`}
                        initialValue=""
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={6} key={`end-time-${index}`}>
                      <Form.Item
                        label="Giờ kết thúc"
                        name={`endtimeday${index}`}
                        initialValue=""
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </div>
                ))}
                <Col span={24} style={{ textAlign: "right" }}>
                  <Button onClick={() => Handle_Addday_Mycourse(1)}>
                    Thêm ngày
                  </Button>
                  <Button onClick={() => Handle_Addday_Mycourse(2)}>Xóa</Button>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Upload Image"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <Upload
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange_Image_add_mycourse}
                    >
                      {fileList.length < 5 && "+ Upload"}
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Form.Item
                    label="Require And Description"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <MyEditor setcontent={setcontent} />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Form.Item
                    label="Objectives of the course"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <MyEditor setcontent={setgoal} />
                  </Form.Item>
                </Col>
                <Col span={24} style={{ marginTop: "15px" }}>
                  <Form.Item
                    label="Schedule"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Data!",
                      },
                    ]}
                  >
                    <TextArea
                      onChange={Handle_data_schedule}
                      rows={12}
                      style={{ height: "auto", overflowY: "auto" }} // Thêm thuộc tính cuộn
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button
                    type="primary"
                    style={{
                      float: "right",
                      padding: "20px",
                      marginTop: "30px",
                    }}
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    )
  );
}

export default EditMycourse;
