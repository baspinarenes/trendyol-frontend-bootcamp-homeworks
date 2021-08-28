import UserProvider from "./user-provider";
import axios from "axios";
import { jest } from "@jest/globals";

jest.mock("axios");


describe.only("UserProvider", () => {
  const userProvider = new UserProvider();
  it("should return posts", () => {
    axios.get.mockResolvedValue({
      data: [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
      ]
    });

    expect(userProvider.getPosts()).resolves.toEqual([
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ]);
  });

  it("should return error when error occurs while fetching data", () => {
    axios.get.mockResolvedValue();

    expect(userProvider.getPosts()).rejects.toThrow('Network Error!')
  });
});
