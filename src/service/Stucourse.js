import { GetData, PostData, PatchData } from "../utils/request";

export const GetMycourse_course = async () => {
  const data = await GetData(`studentcourses/get-student-course`);
  return data;
};

export const GetMycourse_Student = async (id) => {
  const data = await GetData(`studentcourses/get-student/${id}`);
  return data;
};

export const GetScheduleStudent = async () => {
  const Request = await GetData(`studentcourses/get-schedule-student`);
  return Request;
};

export const PostStucourse = async (option) => {
  const Request = await PostData(
    `studentcourses/register-studen-course`,
    option
  );
  return Request;
};

export const EditStatusCourse = async (option) => {
  const Request = await PatchData(`studentcourses/edit-status`, option);
  return Request;
};
