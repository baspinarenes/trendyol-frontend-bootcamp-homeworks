import axios from "axios";

export default class UserProvider {
  constructor() {}

  async getPosts() {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return result.data;
    } catch (err) {
      throw new Error("Network Error!")
    }
  }
}