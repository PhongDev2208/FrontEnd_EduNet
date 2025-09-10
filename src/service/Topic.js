import { GetData } from "../utils/request";

export const GetAllTopic = async (id) => {
  const data = await GetData(`topics/get-all/${id}`);
  return data;
};
