import {
  Table,
  Card,
  Button,
  Flex,
  DatePicker,
  Input,
  Select,
  Collapse,
} from "antd";
import { GetAllMaterial } from "../../../../../service/Material";
import { faPenToSquare, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectRole } from "../../../../../redux/user";
import { useEffect, useState } from "react";
function Material() {
  const { id } = useParams();
  const role = useSelector(selectRole);
  const [DataMaterial, SetDataMaterial] = useState(null);
  const FetchAPI = async () => {
    const Respond = await GetAllMaterial(id);
    console.log(Respond);
    if (Respond.status == true) {
      SetDataMaterial(Respond.data);
    }
  };
  useEffect(() => {
    FetchAPI();
  }, []);
  return (
    <div className="shopping-area pt-100 pb-60">
      <div className="container ">
        {role == "tea" && (
          <Card
            bordered={true}
            style={{
              width: "100%",
              textAlign: "left",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Link to={`/Mycourse/material/add/${id}`}>
                {" "}
                <Button type="primary" style={{ marginRight: "15px" }}>
                  {" "}
                  Add Categories
                </Button>
              </Link>
              <Link to={`/Mycourse/material/addchild/${id}`}>
                {" "}
                <Button type="primary"> Add Child</Button>
              </Link>
            </div>
          </Card>
        )}

        {DataMaterial != null &&
          DataMaterial.map((item, indexparent) => {
            const newitem = item.Child.map((itemchild, index) => {
              return {
                key: index,
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{item.title}</div>
                    {role == "tea" && (
                      <div className="text-center ms-2">
                        <button
                          style={{ fontSize: "1px" }}
                          className="btn btn-primary text-center"
                          type="button"
                          aria-label="button"
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: "10px" }}
                            icon={faPenToSquare}
                          />
                        </button>

                        <button
                          style={{ fontSize: "1px" }}
                          className="btn btn-primary ms-2 text-center"
                          type="button"
                          aria-label="button"
                        >
                          <FontAwesomeIcon
                            style={{ fontSize: "10px" }}
                            icon={faLock}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                ),
                children: (
                  <div>
                    <div>
                      {" "}
                      {itemchild.file.map((itemlink, linkIndex) => {
                        console.log(itemlink);
                        return (
                          <a key={linkIndex} target="blank" href={itemlink}>
                            Link Material {index + 1}
                          </a>
                        );
                      })}
                      {itemchild.Link != null && (
                        <div>
                          {" "}
                          <a key={index} target="blank" href={itemchild.Link}>
                            Link Video
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ),
              };
            });

            return (
              <Card
                title={item.title}
                style={{
                  width: "100%",
                  textAlign: "left",
                  marginBottom: "50px",
                }}
                className="phicssmaterial"
              >
                <Collapse items={newitem} />
              </Card>
            );
          })}
      </div>
    </div>
  );
}
export default Material;
