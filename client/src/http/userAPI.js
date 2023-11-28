import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (
  email,
  password,
  last_name,
  first_name,
  sur_name,
  role
) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    last_name,
    first_name,
    sur_name,
    role
  });
  const user = jwtDecode(data.token);
  localStorage.setItem("token", data.token);
  localStorage.setItem("last_name", user.last_name);
  localStorage.setItem("first_name", user.first_name);
  localStorage.setItem("sur_name", user.sur_name);
  localStorage.setItem("role", user.role);
  return user;
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  const user = jwtDecode(data.token);
  localStorage.setItem("token", data.token);
  localStorage.setItem("last_name", user.last_name);
  localStorage.setItem("first_name", user.first_name);
  localStorage.setItem("sur_name", user.sur_name);
  localStorage.setItem("role", user.role);
  return user;
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  const user = jwtDecode(data.token);
  localStorage.setItem("token", data.token);
  return user;
};
