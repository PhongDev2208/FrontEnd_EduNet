import { GetData,PostData } from "../Utils/request";

export const GetAllReview = async (option = {key : ''},token) => {

  if(option.key == null){
    option.key = ''
   }
  const data = await GetData(`review/getall?key=${option.key}&&page=${option.page}&&limit=${option.limit}`)
  return data
}

export const PostReview = async(option,token) => {
   const Request = await PostData(`review/post`,option,token)
   return Request
}