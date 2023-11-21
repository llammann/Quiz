import { base_url } from "./index";
import axios from "axios";

export async function getUser(id) {
  let result = await axios(base_url + "users/" + id).then((res) => {
    return res.data;
  });
  return result;
}

export async function getUsers() {
  let result;
  result = await axios(base_url + "users").then((res) => {
    return res.data;
  });
return result
  
}

export async function postUser(id, newUser) {
  let result = await axios
    .post(base_url + "users/" + id, newUser)
    .then((res) => {
      return res.data;
    });
  return result;
}
