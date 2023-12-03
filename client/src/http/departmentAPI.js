import { $authHost, $host } from "./index";

export const createDepartment = async department => {
  const { data } = await $authHost.post("api/department", department);
  console.log(data);
  return data;
};

export const fetchDepartment = async () => {
  const { data } = await $host.get("api/department");
  return data;
};