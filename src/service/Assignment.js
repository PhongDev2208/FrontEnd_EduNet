import { GetData, PostData } from "../utils/request";

export const GetAllAssignment = async (id) => {
  const data = await GetData(`assignments/get-all/${id}`);
  return data;
};

export const GetdetailAssignment = async (id) => {
  const data = await GetData(`assignments/get-detail/${id}`);
  return data;
};

export const PostAssignment = async (option) => {
  const Request = await PostData(`assignments/post`, option);
  return Request;
};
