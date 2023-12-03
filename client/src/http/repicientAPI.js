import { $authHost, $host } from "./index";

export const createRecipient = async recipient => {
  const { data } = await $authHost.post("api/recipient", recipient);
  return data;
};

export const fetchRecipients = async () => {
  const { data } = await $host.get("api/recipient");
  return data;
};

// export const fetchRecipients = async (page, limit= 5) => {
//   const { data } = await $host.get("api/recipient", {params: {
//       page, limit
//     }});
//   return data;
// };


