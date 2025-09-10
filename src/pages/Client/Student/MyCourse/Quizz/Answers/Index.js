import { Card, Col, Row, Table, Button } from "antd";
import { useParams, Link } from "react-router-dom";
import { selectUser } from "../../../../../../redux/user";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllAnswers } from "../../../../../../service/Answer";

function Answer() {
  const [DataAnswers, SetDataAnswers] = useState([]);
  const { id } = useParams();
  const token = useSelector(selectUser);
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Result",
      dataIndex: "result",
    },
  ];
  const fetchAPI = async () => {
    const Respond = await GetAllAnswers(id);
    if (Respond.status === true && Respond.data.length > 0) {
      const Newdata = Respond.data.map((item, index) => {
        const date = new Date(parseInt(item.date));
        return {
          key: item.id ? item.id : `item-${index}`,
          stt: index + 1,
          date: date.toLocaleString(),
          result: (
            <Link
              style={{ marginLeft: "7px" }}
              to={`/Mycourse/quizz/Answer/detail/${item._id}`}
            >
              View
            </Link>
          ),
        };
      });
      SetDataAnswers(Newdata);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <div className="shopping-area pt-100 pb-100">
          <div className="container ">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Card title="History" bordered={false}>
                  <Table columns={columns} dataSource={DataAnswers} />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Answer;
