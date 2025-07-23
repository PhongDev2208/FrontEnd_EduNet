import { GetData , PostData , PatchData} from "../Utils/request";
export const GetAllCourse = async () => {
  const data = await GetData(`Course/GetAll`)
  return data
}

export const GetCourseTea = async () => {
  const data = await GetData(`Course/GetCourseTea`)
  return data
}

export const Getdetailcourse = async (key) => {
  const data = await GetData(`Course/Getdetailcourse/${key}`)
  return data
}

export const GetSchedule = async () => {
  const data = await GetData(`Course/GetSchedule/`)
  return data
}


export const PostCourse = async(option) => {
  const Request = await PostData(`Course/post`,option)
  return Request
}


export const EditCourse = async(option) => {
  const Request = await PatchData(`Course/edit`,option)
  return Request
}

