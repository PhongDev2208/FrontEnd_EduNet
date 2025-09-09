import { GetData, PostData } from "../Utils/request";

export const GetAllMaterial = async (id) => {
  const data = await GetData(`materials/get-all/${id}`);
  return data;
};

export const PostMaterial = async (option) => {
  const Request = await PostData(`materials/post`, option);
  return Request;
};

export const Postchild = async (option) => {
  const Request = await PostData(`materials/post-child`, option);
  return Request;
};
