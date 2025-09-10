import { GetData, PostData } from "../utils/request";

export const Getdetail = async () => {
  const data = await GetData(`users/get-detail`);
  return data;
};

export const Poststudent = async (option) => {
  const Request = await PostData(`users/post/student`, option);
  return Request;
};

export const PostTeacher = async (option) => {
  const Request = await PostData(`users/post/teacher`, option);
  return Request;
};

export const PostLogin = async (option) => {
  const Request = await PostData(`users/login`, option);
  return Request;
};

export const ConfirmOTP = async (option) => {
  const Request = await PostData(`users/confirmOTP`, option);
  return Request;
};
