import { base_url } from ".";
import axios from "axios";

export async function getProducts() {
  let result;
  result = await axios(base_url + "/products").then((res) => {
    return res.data;
  });
return result
  
}
