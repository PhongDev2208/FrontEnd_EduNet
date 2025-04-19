import { GetData,PostData } from "../Utils/request";

export const GetAllUser = async (path,option = null,token) => {
  const data = await GetData(`user/${path}`,token)
  return data
}

export const PostUser = async(path,option,token) => {
   console.log(path)
   const Request = await PostData(`user/${path}`,option,token)
   return Request
}


