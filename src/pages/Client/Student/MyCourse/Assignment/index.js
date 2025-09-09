import { Card, Col, Row, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { GetAllAssignment } from "../../../../../service/Assignment";
import { useSelector } from "react-redux";
import { selectRole } from "../../../../../Redux/user";
import { Link, useParams } from "react-router-dom";

function Assignment() {
  const { id } = useParams();
  const role = useSelector(selectRole);

  const [newdata, setnewdata] = useState();
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Start_time",
      dataIndex: "start_time",
    },
    {
      title: "End_time",
      dataIndex: "end_time",
    },
    {
      title: "Link",
      dataIndex: "link",
    },
    ...(role === "tea"
      ? [
          {
            title: "Check",
            dataIndex: "Check",
          },
        ]
      : []),
  ];
  const FetchAPI = async () => {
    const respond = await GetAllAssignment(id);
    if (respond.status == true && Array.isArray(respond.data)) {
      const newdata = respond.data.map((item, index) => {
        return {
          key: index + 1,
          stt: index + 1,
          title: item.title,
          start_time: item.time.start_display,
          end_time: item.time.end_display,
          Link: (
            <Button type="primary">
              <Link to={`/Mycourse/Assignment/detail/${id}/${item._id}`}>
                Open
              </Link>
            </Button>
          ),
          Check: role === "tea" && (
            <Button type="primary">
              <Link to={`/Mycourse/Assignment/check/${id}/${item._id}`}>
                Check
              </Link>
            </Button>
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
                {role == "tea" && (
                  <div style={{ textAlign: "right", marginBottom: "30px" }}>
                    <Button type="primary" style={{ marginRight: "10px" }}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/Mycourse/Assignment/add/${id}`}
                      >
                        Add
                      </Link>
                    </Button>
                  </div>
                )}
                <Table columns={columns} dataSource={newdata} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
