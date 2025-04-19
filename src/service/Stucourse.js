import { GetData,PostData,PatchData } from "../Utils/request";

export const GetMycourse_course = async (path,option = {key : ''},token) => {
  if(option.key == null){
    option.key = ''
   }
  const data = await GetData(`stcourse/GetCourse?key=${option.key}`,token)
  return data
}

export const GetMycourse_Student = async(option = {key : ' '} , token) => {
  if(option.key == null){
    option.key = ''
   }
  const data = await GetData(`stcourse/GetStudent?key=${option.key}`,token)
  return data
}

export const PostStucourse = async(option,token) => {
   const Request = await PostData(`stcourse`,option,token)
   return Request
}

export const EditStatusCourse = async(option,token) => {
  const Request = await PatchData(`stcourse/editstatus`,option,token)
  return Request
}

export const GetScheduleStudent = async(option,token) => {
  const Request = await GetData(`stcourse/GetscheduleStudent`,token)
  return Request
}