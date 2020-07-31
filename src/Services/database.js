import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = async () => {
  return await axios.get(baseURL).then(res => res.data);
};

const create = async (newObj) => {
  return await axios.post(baseURL, newObj).then(res => res.data);
};

const remove = (id) => {
  const toDelete = `${baseURL}/${id}`
  return axios.delete(toDelete)
};

const update = (id, updatedInfo) => {
  const toUpdate = `${baseURL}/${id}`
  return axios.put(toUpdate, updatedInfo).then(res => res.data)
}

export default { getAll, create, remove, update };
