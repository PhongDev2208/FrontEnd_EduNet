import { GetData, PostData } from "../utils/request";

export const GetAllQuestion = async (id) => {
  const data = await GetData(`questions/get-all/${id}`);
  return data;
};

export const PostQuestion = async (option) => {
  const Request = await PostData(`questions/post`, option);
  return Request;
};
