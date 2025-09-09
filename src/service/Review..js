import { GetData, PostData } from "../Utils/request";

export const GetAllReview = async (id) => {
  const data = await GetData(`reviews/get-all/${id}`);
  return data;
};

export const PostReview = async (option) => {
  const Request = await PostData(`reviews/post`, option);
  return Request;
};
