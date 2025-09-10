import { GetData, PostData } from "../utils/request";

export const GetAllSubmit = async (id) => {
  const Request = await GetData(`submits/get-all/${id}`);
  return Request;
};

export const GetdetailSubmit = async (id) => {
  const Request = await GetData(`submits/get-detail/${id}`);
  return Request;
};

export const PostSubmit = async (option) => {
  const Request = await PostData(`submits/post`, option);
  return Request;
};
