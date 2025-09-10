import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Input, Row, Col, Card } from "antd";
import { useEffect, useState } from "react";
import { PostMaterial } from "../../../../../service/Material";
import { AlertSuccess } from "../../../../../components/components/Alert";
import handle_error from "../../../../../components/helper/handle_error";
function AddMaterial() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handle_Submit_form_create_course = async (values) => {
    values.course_id = id;
    const respond = await PostMaterial(values);
    if (respond.status == true) {
      AlertSuccess("Add Succced");
      setTimeout(() => {
        navigate(`/Mycourse/material/${id}`);
      }, 1000);
    }
    handle_error(respond, navigate);
  };

  return (
    <div className="shopping-area pt-100 pb-60">
      <div className="container text-center">
        <Card
          title="Add Your Material"
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
              <Col span={12}>
                <Form.Item
                  label="Position"
                  name="position"
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
export default AddMaterial;
