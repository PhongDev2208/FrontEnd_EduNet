import { GetData,PostData } from "../Utils/request";

export const PostSubmit = async(path,option,token) => {
    const Request = await PostData(`submit/${path}`,option,token)
    return Request
 }

 
export const GetAllSubmit = async(path,option,token) => {
    const Request = await GetData(`submit/${path}`,token)
    return Request
 }