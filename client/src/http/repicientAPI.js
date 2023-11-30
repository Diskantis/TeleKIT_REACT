import { $authHost, $host } from "./index";

export const createRecipient = async recipient => {
  const { data } = await $authHost.post("api/recipient", recipient);
  return data;
};

export const fetchRecipient = async () => {
  const { data } = await $host.get("api/recipient");
  return data;
};
