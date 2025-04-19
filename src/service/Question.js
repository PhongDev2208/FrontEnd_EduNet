import { GetData,PostData } from "../Utils/request";

export const GetAllQuestion = async (option = null,token) => {

  const data = await GetData(`question/getall/?key=${option.key}`,token)
  return data
}

export const PostQuestion = async(path,option,token) => {
   console.log(path,option,token)
   const Request = await PostData(`question/${path}`,option,token)
   return Request
}