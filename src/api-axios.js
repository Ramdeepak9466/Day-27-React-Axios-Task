import axios from "axios";
const baseurl = "https://66268b8c052332d553233e15.mockapi.io/residents/todo";
const resInstance = axios.create({
  baseURL: baseurl,
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    field: "housing",
  },
});

const getAllRes = async () => {
  const response = await resInstance.get("");
  return response.data;
};
const editRes = async (id, updatedRes) => {
  const response = await resInstance.put(`${id}`, updatedRes);
  return response.data;
};
const deleteRes = async (id) => {
  const response = await resInstance.delete(`${id}`);
  return response.data;
};
const addRes = async (addDataRes) => {
  const response = await resInstance.post("", addDataRes);
  return response.data;
};

export { getAllRes, editRes, deleteRes, addRes };
