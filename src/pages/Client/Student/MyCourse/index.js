import { Table, Card, Button, Flex, DatePicker, Input, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { GetMycourse_course } from "../../../../service/Stucourse";
import { GetAllCourse, GetCourseTea } from "../../../../service/Course";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectRole } from "../../../../redux/user";
import { useEffect, useState } from "react";
import "../../../../styles/home/css/styleprivate.css";
import Seturl from "../../../../components/helper/SetURL";
import DeletedURL from "../../../../components/helper/deleteURL";
import handle_error from "../../../../components/helper/handle_error";
const { RangePicker } = DatePicker;
const { Search } = Input;

function MyCourse() {
  const role = useSelector(selectRole);
  const [DataStCr, setdatastCr] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Name_Course",
      dataIndex: "name_Course",
    },
    {
      title: "Status of course",
      dataIndex: "statusofcourse",
    },
    {
      title: "Lesson",
      dataIndex: "lesson",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
    },
  ];

  const FetchAPI = async (type = null) => {
    let respond = {};
    if (role == "tea") {
      respond = await GetCourseTea();
    } else {
      respond = await GetMycourse_course();
    }
    
    if (respond.status == true && Array.isArray(respond.data)) {
      let newdata = [];
      newdata = respond.data.map((item, index) => {
        return {
          key: index,
          image: (
            <div className="course text-center">
              <figure className="course-img text-center">
                <img className="lazyload" src={item.img[0]} alt="course" />
              </figure>
            </div>
          ),
          name_Course: (
            <div className="course-desc ">
              <h6 className="mb-0">
                <a
                  className="course-title"
                  target="_self"
                  title="Link"
                  href="course-details.html"
                >
                  {item.title}
                </a>
              </h6>
            </div>
          ),
          statusofcourse: (
            <div className="price ms-2">
              <Select
                value={item.status_course}
                style={{ width: "70%" }}
                onChange={handle_Status_Change}
                options={[
                  { value: 1, label: "Will Learn" },
                  { value: 2, label: "Current Learning" },
                  { value: 3, label: "Have Learned" },
                ]}
              />
            </div>
          ),
          lesson: (
            <div className="course-availability ms-3">{item.numberlesson}</div>
          ),
          detail: (
            <div className="">
              <Link
                to={
                  role == "tea"
                    ? `/Mycourse/detail/${item._id}`
                    : `/Mycourse/detail/${item.id}`
                }
                className="btn text-center btn-sm btn-primary rounded-pill"
              >
                Detail
              </Link>
            </div>
          ),
          action: role === "tea" && (
            <div className="text-center ms-2">
              <Link to={`/Mycourse/edit/${item._id}`}>
                <button
                  className="btn btn-primary text-center"
                  type="button"
                  aria-label="button"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </Link>

              <button
                onClick={() => handle_lock_mycourse(item._id)}
                className="btn btn-primary ms-2 text-center"
                type="button"
                aria-label="button"
              >
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
          ),
        };
      });
      setdatastCr(newdata);
    }
    handle_error(respond, navigate);
  };
  const handle_Status_Change = (e) => {};
  const handle_lock_mycourse = (e) => {};
  const handle_status_mycourse = (e) => {
    if (e == 4) {
      DeletedURL();
    } else {
      Seturl({ title: "status", value: e });
    }
    FetchAPI();
  };
  const handle_search_mycourse = (key) => {
    Seturl({ title: "key", value: key });
    FetchAPI();
  };
  useEffect(() => {
    FetchAPI();
  }, []);
  return (
    <div>
      <div className="shopping-area pt-90 pb-60">
        <div className="container text-center">
          <Card
            style={{
              width: "100%",
              textAlign: "left",
              marginBottom: "50px",
            }}
            title="Search"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "50%" }}>
                <Button onClick={() => handle_status_mycourse(4)}>
                  GetAll
                </Button>
                <Button onClick={() => handle_status_mycourse(1)}>Will</Button>
                <Button onClick={() => handle_status_mycourse(2)}>
                  Current
                </Button>
                <Button onClick={() => handle_status_mycourse(3)}>
                  Already
                </Button>
              </div>
              <div style={{ width: "80%", textAlign: "right" }}>
                <Search
                  style={{
                    width: "50%",
                  }}
                  placeholder="input search text"
                  onSearch={handle_search_mycourse}
                  enterButton
                />
              </div>
            </div>
          </Card>

          <Card
            style={{
              width: "100%",
              textAlign: "left",
              marginBottom: "50px",
            }}
            title="Your Course"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <RangePicker style={{ border: "2px solid #1677ff" }} />
              {role == "tea" && (
                <Button type="primary">
                  <Link style={{ textDecoration: "none" }} to="/Mycourse/Add">
                    Add
                  </Link>
                </Button>
              )}
            </div>

            {DataStCr.length > 0 ? (
              <Table
                columns={columns}
                dataSource={DataStCr}
                pagination={{ pageSize: 5 }}
              />
            ) : (
              <div>Bạn chưa đăng ký bất kì khóa học nào </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
export default MyCourse;
