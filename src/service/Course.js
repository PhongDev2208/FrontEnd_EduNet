import { GetData, PostData, PatchData } from "../utils/request";
export const GetAllCourse = async () => {
  const data = await GetData(`courses/get-all`);
  return data;
};

export const GetCourseTea = async () => {
  const data = await GetData(`courses/get-course-tea`);
  return data;
};

export const Getdetailcourse = async (key) => {
  const data = await GetData(`courses/get-detail-course/${key}`);
  return data;
};

export const GetSchedule = async () => {
  const data = await GetData(`courses/get-schedule/`);
  return data;
};

export const PostCourse = async (option) => {
  const Request = await PostData(`courses/post`, option);
  return Request;
};

export const EditCourse = async (option) => {
  const Request = await PatchData(`courses/edit`, option);
  return Request;
};
