import { GetData,PostData } from "../Utils/request";

export const GetAllAnswers = async (id) => {
  const data = await GetData(`Answer/GetAll/${id}`)
  return data
}
export const GetDetailAnswer = async(id) => {
  const Request = await GetData(`Answer/GetDetail/${id}`)
  return Request
}

export const PostAnswers = async(option) => {
   const Request = await PostData(`Answer/Post`,option)
   return Request
}

