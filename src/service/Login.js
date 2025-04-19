import { GetData,PostData } from "../Utils/request";

export const GetAllAccount= async (option = {key : ''}) => {

  if(option.key == null){
    option.key = ''
   }
  const data = await GetData(`Course?key=${option.key}&&page=${option.page}&&limit=${option.limit}`)
  return data
}

export const PostAccount = async(option) => {
   const Request = await PostData(`login`,option)
   return Request
}