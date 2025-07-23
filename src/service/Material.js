import { GetData,PostData } from "../Utils/request";

export const GetAllMaterial = async (id) => {
  const data = await GetData(`Material/Getall/${id}`)
  return data
}

export const PostMaterial = async(option) => {
   const Request = await PostData(`Material/Post`,option)
   return Request
}

export const Postchild = async(option) => {
  const Request = await PostData(`Material/PostChild`,option)
  return Request
}