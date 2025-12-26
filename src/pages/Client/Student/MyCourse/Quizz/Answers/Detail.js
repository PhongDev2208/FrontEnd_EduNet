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
import { useParams, Link } from "react-router-dom";
import { GetDetailAnswer } from "../../../../../../service/Answer";
import { selectUser } from "../../../../../../redux/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "../../../../../../styles/home/css/styleprivate.css";
function DetailAnswer() {
  const [DataAnswers, SetDataAnswers] = useState([]);
  const { id } = useParams();
  const token = useSelector(selectUser);
  const fetchAPI = async () => {
    const Respond = await GetDetailAnswer(id);
    if (Respond.status === true) {
      SetDataAnswers(Respond.data);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div>
      <div className="shopping-area pt-100 pb-100">
        <div className="container ">
          {DataAnswers.length > 0 &&
            DataAnswers.map((item, index) => {
              return (
                <Row
                  gutter={[24, 24]}
                  key={item._id}
                  justify="center"
                  align="middle"
                  style={{ marginBottom: "50px" }}
                >
                  <Col span={19}>
                    <Card
                      title={`Câu ${index + 1} : ${item.question}`}
                      bordered={false}
                    >
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
                            disabled
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {item.answers.map((itemchildren, indexchildren) => {
                              return item.correct_answers[0] !=
                                indexchildren + 1 &&
                                item.answersuser[0] != indexchildren + 1 ? (
                                <Radio>{itemchildren}</Radio>
                              ) : item.correct_answers[0] ==
                                  indexchildren + 1 &&
                                item.answersuser[0] == indexchildren + 1 ? (
                                <Radio className="activebuttonanswer">
                                  {itemchildren}
                                </Radio>
                              ) : (
                                <Radio
                                  className={
                                    item.correct_answers[0] == indexchildren + 1
                                      ? "activebuttonanswer"
                                      : "wrongbuttonanswer"
                                  }
                                >
                                  {itemchildren}
                                </Radio>
                              );
                            })}
                          </Radio.Group>
                        ) : (
                          <Checkbox.Group
                            disabled
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {item.answers.map((itemchildren, indexchildren) => {
                              const checkuser = item.answersuser.some(
                                (itemcheckuser) =>
                                  indexchildren + 1 == itemcheckuser
                              );
                              const checkquestion = item.correct_answers.some(
                                (itemcheckquestion) =>
                                  indexchildren + 1 == itemcheckquestion
                              );
                              return checkuser == false &&
                                checkquestion == false ? (
                                <Checkbox style={{ marginBottom: "15px" }}>
                                  {itemchildren}
                                </Checkbox>
                              ) : checkuser == true && checkquestion == true ? (
                                <Checkbox
                                  className="activebuttonanswer"
                                  style={{ marginBottom: "15px" }}
                                >
                                  {itemchildren}
                                </Checkbox>
                              ) : checkuser == true &&
                                checkquestion == false ? (
                                <Checkbox
                                  className="wrongbuttonanswer"
                                  style={{ marginBottom: "15px" }}
                                >
                                  {itemchildren}
                                </Checkbox>
                              ) : (
                                <Checkbox
                                  className="lackbuttonanswer"
                                  style={{ marginBottom: "15px" }}
                                >
                                  {itemchildren} thieu
                                </Checkbox>
                              );
                            })}
                          </Checkbox.Group>
                        )}
                      </Form.Item>
                    </Card>
                  </Col>
                </Row>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default DetailAnswer;
