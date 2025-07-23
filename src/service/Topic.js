import { GetData } from "../Utils/request";

export const GetAllTopic = async (id) => {

  const data = await GetData(`Topic/GetAll/${id}`)
  return data
}

