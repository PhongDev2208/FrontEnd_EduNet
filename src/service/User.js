import { GetData,PostData } from "../Utils/request";

export const Getdetail = async () => {
  const data = await GetData(`User/Getdetail`)
  return data
}

export const Poststudent = async(option) => {
   const Request = await PostData(`User/Post/student`,option)
   return Request
}

export const PostTeacher = async(option) => {
  const Request = await PostData(`User/Post/teacher`,option)
  return Request
}

export const PostLogin = async(option) => {
  const Request = await PostData(`User/login`,option)
  return Request
}

export const ConfirmOTP = async(option) => {
  const Request = await PostData(`User/confirmOTP`,option)
  return Request
}