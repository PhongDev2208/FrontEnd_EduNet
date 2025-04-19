import { GetData,PostData } from "../Utils/request";

export const GetAllAnswers = async (option = null,token) => {

  const data = await GetData(`Answer/Getall/?key=${option.key}`,token)
  return data
}
export const GetDetailAnswer = async(option = null,token) => {
  const Request = await GetData(`Answer/Getdetail/?key=${option.key}`,token)
  return Request
}

export const PostAnswers = async(option,token) => {
   const Request = await PostData(`Answer/post`,option,token)
   return Request
}

