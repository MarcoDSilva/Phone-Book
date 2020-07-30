import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = async () => {
  const res = await axios.get(baseURL);
  return res.data;
};

const create = async (newObj) => {
  const res = await axios.post(baseURL, newObj);
  return res.data;
};

const remove = (id) => {
  const toDelete = `${baseURL}/${id}`
  return axios.delete(toDelete)
};

export default { getAll, create, remove };
