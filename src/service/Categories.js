import { GetData } from "../Utils/request";

export const GetAllCategories = async () => {
  const data = await GetData(`categories/GetAll`)
  return data
}