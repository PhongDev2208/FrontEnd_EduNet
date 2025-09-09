import {
  Button,
  Card,
  Col,
  Row,
  Radio,
  Input,
  Space,
  Form,
  Checkbox,
} from "antd";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GetAllQuestion } from "../../../../../../service/Question";
import { PostAnswers } from "../../../../../../service/Answer";
import { selectUser } from "../../../../../../Redux/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AlertSuccess } from "../../../../../../Components/Components/Alert";
import handle_error from "../../../../../../Components/helper/handle_error";

function Practics() {
  const [DataQuestion, SetDataQuestion] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchAPI = async () => {
    const Respond = await GetAllQuestion(id);
    if (Respond.status === true) {
      SetDataQuestion(Respond.data);
    }
  };

  const handle_Mycourse_submit_quizz = async (e) => {
    const DataAnswers = {};
    const answers = Object.entries(e).map((item) => {
      const newobject = {
        question_id: item[0],
        results: [],
      };
      item.shift();
      if (Array.isArray(item[0])) {
        newobject.results = [...item[0]];
        newobject.results.sort((a, b) => a - b);
      } else {
        newobject.results = item;
      }
      return newobject;
    });
    DataAnswers.answers = answers;
    DataAnswers.topic_id = id;
    const Respond = await PostAnswers(DataAnswers);
    if (Respond.status == true) {
      AlertSuccess("Add successed");
      navigate(`/Mycourse/quizz/Answer/detail/${Respond.data}`);
    }
    handle_error(Respond, navigate);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  console.log(DataQuestion.length);
  return (
    <div>
      <div className="shopping-area pt-100 pb-100">
        <div className="container ">
          <Form name="basic" onFinish={handle_Mycourse_submit_quizz}>
            {DataQuestion.length > 0 &&
              DataQuestion.map((item, index) => {
                console.log(item.type);

                return (
                  <Row
                    gutter={[24, 24]}
                    key={item._id}
                    justify="center"
                    align="middle"
                    style={{ marginBottom: "50px" }}
                  >
                    <Col span={19}>
                      <Card title={`${item.question}`} bordered={false}>
                        <Form.Item
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                          name={item._id}
                        >
                          {item.type == "Single" ? (
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {item.answers.map(
                                (itemchildren, indexchildren) => {
                                  return (
                                    <Radio value={indexchildren + 1}>
                                      {itemchildren}
                                    </Radio>
                                  );
                                }
                              )}{" "}
                            </Radio.Group>
                          ) : (
                            <Checkbox.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              {item.answers.map(
                                (itemchildren, indexchildren) => {
                                  return (
                                    <Checkbox
                                      style={{ marginBottom: "15px" }}
                                      value={indexchildren + 1}
                                    >
                                      {itemchildren}
                                    </Checkbox>
                                  );
                                }
                              )}
                            </Checkbox.Group>
                          )}
                        </Form.Item>
                      </Card>
                    </Col>
                  </Row>
                );
              })}

            <Button
              type="primary"
              style={{ float: "right", marginRight: "135px", padding: "20px" }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Practics;
