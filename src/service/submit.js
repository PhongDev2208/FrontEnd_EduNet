import { GetData,PostData } from "../Utils/request";

export const GetAllSubmit = async(id) => {
    const Request = await GetData(`submit/getall/${id}`)
    return Request
 }
 
export const GetdetailSubmit = async(id) => {
    const Request = await GetData(`submit/getdetail/${id}`)
    return Request
}

export const PostSubmit = async(option) => {
    const Request = await PostData(`submit/Post`,option)
    return Request
 }

 