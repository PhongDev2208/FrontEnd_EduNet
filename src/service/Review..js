import { GetData,PostData } from "../Utils/request";

export const GetAllReview = async (id) => {
  const data = await GetData(`review/GetAll/${id}`)
  return data
}

export const PostReview = async(option) => {
   const Request = await PostData(`review/Post`,option)
   return Request
}