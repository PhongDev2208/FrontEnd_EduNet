import { Pagination  } from 'antd';
import Seturl from "../helper/SetURL";
import GETURL from '../helper/GETURL';
function PaginationCustom({fetchAPI,total = 5}){
    const page = GETURL("page") || 1;
    const change_pagination = (e) => {
        Seturl({ title: "page", value: e })
        fetchAPI()
    }
  return (
    <Pagination onChange={change_pagination} style={{ margin: "30px auto", textAlign: "center" }}
    align="center" defaultCurrent={page} total={total * 10} />

  )
}


export default PaginationCustom