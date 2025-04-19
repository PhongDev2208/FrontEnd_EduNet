import { GetData,PostData } from "../Utils/request";

export const GetAllMaterial = async (path,option = null,token) => {
  const data = await GetData(`Material/${path}/?key=${option.key}`,token)
  return data
}

export const PostMaterial = async(path ,option,token) => {
   const Request = await PostData(`Material/${path}`,option,token)
   return Request
}