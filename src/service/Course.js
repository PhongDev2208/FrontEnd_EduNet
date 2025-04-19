import { GetData , PostData , PatchData} from "../Utils/request";

export const GetAllCourse = async (path,option = {key : ''},token = null) => {
  const data = await GetData(`Course/${path}?key=${option.key}&&page=${option.page}&&limit=${option.limit}&&status=${option.status}`,token)
  return data
}

export const PostCourse = async(option,token) => {
  const Request = await PostData(`Course/post`,option,token)
  return Request
}



export const EditCourse = async(option,token) => {
  console.log(option)
  const Request = await PatchData(`Course/edit`,option,token)
  return Request
}

