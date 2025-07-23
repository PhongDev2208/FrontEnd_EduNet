import { GetData,PostData,PatchData } from "../Utils/request";

export const GetMycourse_course = async () => {
  const data = await GetData(`stcourse/Getstudentcourse`)
  return data
}

export const GetMycourse_Student = async(id) => {
  const data = await GetData(`stcourse/GetStudent/${id}`)
  return data
}

export const GetScheduleStudent = async() => {
  const Request = await GetData(`stcourse/GetscheduleStudent`)
  return Request
}

export const PostStucourse = async(option) => {
   const Request = await PostData(`stcourse/registerstudencourse`,option)
   return Request
}

export const EditStatusCourse = async(option) => {
  const Request = await PatchData(`stcourse/editstatus`,option)
  return Request
}
