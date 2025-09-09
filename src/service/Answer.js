import { GetData, PostData } from "../Utils/request";

export const GetAllAnswers = async (id) => {
  const data = await GetData(`answers/get-all/${id}`);
  return data;
};
export const GetDetailAnswer = async (id) => {
  const Request = await GetData(`answers/get-detail/${id}`);
  return Request;
};

export const PostAnswers = async (option) => {
  const Request = await PostData(`answers/post`, option);
  return Request;
};
