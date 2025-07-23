import { GetData,PostData } from "../Utils/request";

export const GetAllQuestion = async (id) => {
  const data = await GetData(`question/GetAll/${id}`)
  return data
}

export const PostQuestion = async(option) => {
   const Request = await PostData(`question/post`,option)
   return Request
}