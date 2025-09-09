import { useParams } from "react-router-dom";
import { Button, Form, Input, Row, Col, Card, DatePicker } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostAssignment } from "../../../../../service/Assignment";
import { AlertSuccess } from "../../../../../Components/Components/Alert";
import MyEditor from "../../../../../Components/Components/tinymce";
import handle_error from "../../../../../Components/helper/handle_error";

const { RangePicker } = DatePicker;

function AddAssignmentMycourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setcontent] = useState("");
  const handle_Submit_form_create_course = async (values) => {
    const newcustom = values.start_time.map((item) => {
      return {
        display: item.format("DD-MM-YYYY"),
        time: new Date(item),
      };
    });
    const time = {};
    time.start_time = newcustom[0].time;
    time.start_display = newcustom[0].display;
    time.end_time = newcustom[1].time;
    time.end_display = newcustom[1].display;
    values.time = time;
    values.description = content;
    values.course_id = id;
    const respond = await PostAssignment(values);
    if (respond.status == true) {
      AlertSuccess("Add success");
      navigate(`/Mycourse/Assignment/index/${id}`);
    }
    handle_error(respond, navigate);
  };

  return (
    <div className="shopping-area pt-100 pb-60">
      <div className="container text-center">
        <Card
          title="Add Your Assignment"
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
            layout="horizontal"
            key={"1"}
            onFinish={handle_Submit_form_create_course}
          >
            <Row gutter={32}>
              <Col span={24}>
                <Form.Item
                  label="Title"
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

              <Col span={24}>
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

              <Col span={24}>
                <Form.Item label="Description" name="description">
                  <MyEditor setcontent={setcontent} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  style={{ float: "right", padding: "20px", marginTop: "15px" }}
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
  );
}
export default AddAssignmentMycourse;
