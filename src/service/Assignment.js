import { GetData,PostData } from "../Utils/request";

export const GetAllAssignment = async (path,option = null,token) => {

  const data = await GetData(`Assignment/${path}`,token)
  return data
}

export const PostAssignment = async(option,token) => {
   const Request = await PostData(`Assignment/Post`,option,token)
   return Request
}

