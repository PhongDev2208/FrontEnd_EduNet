import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../../../../../Redux/user";
import { Link, useParams } from "react-router-dom"
import { Card, Col, Row ,Table,Button} from 'antd';

import { GetAllSubmit } from '../../../../../service/submit';
import { useEffect, useState } from 'react';
function Checkdetail() {
  const { id, idchild } = useParams()
  const token = useSelector(selectUser)
  const [DataCheck,SetDatacheck] = useState(null)
  const FetchAPI = async () => {
    const Respond = await GetAllSubmit(`getdetail/${idchild}`, {}, token)
    if(Respond.status == true){
      SetDatacheck(Respond.data)
    }
  }
  useEffect(() => {
    FetchAPI()
  },[])
  return (
    <>
      {DataCheck != null &&  <div className="shopping-area pt-100 pb-60">
        <div className="container ">
          <Card title={"Name of Student : " + DataCheck.name} bordered={false}>
          <div dangerouslySetInnerHTML={{ __html: DataCheck.content }} />
          </Card>
        </div>
      </div>}
    </>
  )
}

export default Checkdetail