import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectRole } from "../../../../../Redux/user";
import { PostQuestion } from "../../../../../service/Question";
import {
  Button,
  Select,
  Checkbox,
  Form,
  Input,
  Row,
  Col,
  Card,
  Upload,
  DatePicker,
  Space,
} from "antd";
import Swal from "sweetalert2";
import handle_error from "../../../../../Components/helper/handle_error";
import { AlertSuccess } from "../../../../../Components/Components/Alert";

const { TextArea } = Input;

function AddQuizz() {
  const [question, setQuestion] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const Handle_data_question = async (e) => {
    const value = e.target.value;
    setQuestion(value);
  };
  const handle_Submit_form_create_course = async (values) => {
    const splitQuestion = question.split("***");
    const customQuestion = splitQuestion.map((item) => {
      const newitem = item.split("\n");
      const newquestion = {};
      let check = false;
      let answers = [];
      let cnt = 1;
      newitem.forEach((itemchild, index) => {
        if (itemchild != "" && itemchild != null && check == false) {
          newquestion.question = itemchild;
          check = true;
        } else if (check == true) {
          if (itemchild[0] == "*") {
            const result = itemchild.slice(1);
            newquestion.correct_answers = cnt;
            answers.push(result);
          } else {
            answers.push(itemchild);
          }
          cnt++;
        }
      });
      newquestion.answers = answers;
      return newquestion;
    });
    values.course_id = id;
    values.question = customQuestion;
    const respond = await PostQuestion(values);
    if (respond.status == true) {
      AlertSuccess("Add successed");
      navigate(`/Mycourse/quizz/${id}`);
    }
    handle_error(respond, navigate);
  };
  return (
    <div className="shopping-area pt-100 pb-60">
      <div className="container">
        <Card
          title="Add Your Quizz"
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
                  label="Description"
                  name="description"
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
                  label="Question"
                  name="Question"
                  rules={[
                    {
                      message: "Please input your Data!",
                    },
                  ]}
                >
                  <TextArea
                    onChange={Handle_data_question}
                    rows={12}
                    style={{ height: "auto", overflowY: "auto" }} // Thêm thuộc tính cuộn
                  />{" "}
                  {/* Thêm thuộc tính rows để xác định số dòng hiển thị */}
                </Form.Item>
              </Col>

              <Col span={24}>
                <Button
                  type="primary"
                  style={{ float: "right", padding: "20px", marginTop: "30px" }}
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
export default AddQuizz;
