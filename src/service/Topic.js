import { GetData,PostData } from "../Utils/request";

export const GetAllTopic = async (option = null,token) => {

  const data = await GetData(`topic/getall/?key=${option.key}`,token)
  return data
}

export const PostTopic = async(option,token) => {
   const Request = await PostData(`stcourse`,option,token)
   return Request
}