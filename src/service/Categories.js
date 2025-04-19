import { GetData } from "../Utils/request";

export const GetAllCategories = async (path) => {
  const data = await GetData(`categories/${path}`)
  return data
}