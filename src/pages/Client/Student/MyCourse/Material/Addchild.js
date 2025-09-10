import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Card,
  Select,
  Upload,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { Uploadlist } from "../../../../../components/helper/UploadImg";
import {
  PostMaterial,
  GetAllMaterial,
  Postchild,
} from "../../../../../service/Material";
import { AlertSuccess } from "../../../../../components/components/Alert";
import handle_error from "../../../../../components/helper/handle_error";

function AddchildMaterial() {
  const { id } = useParams();
  const [Parent, setParent] = useState();
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const FetchAPI = async () => {
    const respond = await GetAllMaterial(id);
    if (respond.status == true) {
      const newdata = respond.data.map((item) => {
        return {
          value: item._id,
          label: item.title,
        };
      });
      setParent(newdata);
    }
    handle_error(respond, navigate);
  };
  const handle_Submit_form_create_course = async (values) => {
    values.file = await Uploadlist(fileList);
    const respond = await Postchild(values);
    if (respond.status == true) {
      AlertSuccess("Add successed");
      setTimeout(() => {
        navigate(`/Mycourse/material/${id}`);
      }, 1000);
    }
    handle_error(respond, navigate);
  };

  const onChange_Image_add_material = async ({
    fileList: newFileList,
    file,
  }) => {
    const isPdf = file.type === "application/pdf";
    if (!isPdf) {
      message.error("You can only upload PDF files!");
      setFileList([]);
    } else {
      setFileList(newFileList);
    }
  };

  useEffect(() => {
    FetchAPI();
  }, []);
  return (
    Parent != null && (
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
                    rules={[
                      { required: true, message: "Please input your Data!" },
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
                      { required: true, message: "Please input your Data!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Link Video"
                    name="link"
                    rules={[{ message: "Please input your Data!" }]}
                  >
                    <Input placeholder="Can be left empty" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Parent"
                    name="resource_id"
                    rules={[
                      { required: true, message: "Please input your Data!" },
                    ]}
                  >
                    <Select style={{ width: "100%" }} options={Parent} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Upload Link Material PDF"
                    rules={[
                      { required: true, message: "Please input your Data!" },
                    ]}
                  >
                    <Upload
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange_Image_add_material}
                    >
                      {fileList.length < 5 && "+ Upload"}
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button
                    type="primary"
                    style={{
                      float: "right",
                      padding: "20px",
                      marginTop: "15px",
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

export default AddchildMaterial;
