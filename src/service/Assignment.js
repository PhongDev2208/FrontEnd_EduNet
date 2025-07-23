import { GetData,PostData } from "../Utils/request";

export const GetAllAssignment = async (id) => {

  const data = await GetData(`Assignment/Getall/${id}`)
  return data
}

export const GetdetailAssignment = async (id) => {

  const data = await GetData(`Assignment/GetDetail/${id}`)
  return data
}

export const PostAssignment = async(option) => {
   const Request = await PostData(`Assignment/Post`,option)
   return Request
}

