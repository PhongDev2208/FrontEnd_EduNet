import { GetData } from "../Utils/request";

export const GetAllCategories = async () => {
  const data = await GetData(`categories/get-all`);
  return data;
};
