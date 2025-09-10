import { Card, Col, Row, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { GetAllSubmit } from "../../../../../service/submit";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../../redux/user";
import { Link, useParams } from "react-router-dom";

function CheckAssignment() {
  const { id, idchild } = useParams();
  const [newdata, setnewdata] = useState();
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Submitted_at",
      dataIndex: "submitted_at",
    },
    {
      title: "Detail",
      dataIndex: "Detail",
    },
  ];
  const FetchAPI = async () => {
    const respond = await GetAllSubmit(idchild);
    if (respond.status == true) {
      const newdata = respond.data.map((item, index) => {
        return {
          key: index + 1,
          stt: index + 1,
          name: item.name,
          submitted_at: item.submitted_at,
          Detail: (
            <div style={{ marginLeft: "10px" }}>
              <Link to={`/Mycourse/Assignment/checkdetail/${id}/${item._id}`}>
                <Button>Link</Button>
              </Link>
            </div>
          ),
        };
      });
      setnewdata(newdata);
    }
  };
  useEffect(() => {
    FetchAPI();
  }, []);
  return (
    <div>
      <div className="shopping-area pt-100 pb-60">
        <div className="container ">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Card title="Your Assignment" bordered={false}>
                <Table columns={columns} dataSource={newdata} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CheckAssignment;
