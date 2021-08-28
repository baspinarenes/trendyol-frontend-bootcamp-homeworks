import UserProvider from "./user-provider"
import UserService from "./user-service"

jest.mock('./user-provider')

describe("UserService", () => {
  const userProvider = new UserProvider();
  const userService = new UserService(userProvider);

  it("should throw error if no posts", async () => {
    expect(userService.getPostsFromMostPostedUser()).rejects.toThrow('No posts found');
  });

  it("should return post titles", () => {
    userProvider.getPosts.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
    ]);

    expect(userService.getPostsTitles()).resolves.toEqual([
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "qui est esse"
    ]);
  });


  it("should have title attributes in posts", async () => {
    userProvider.getPosts.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
    ]);
    expect(userService.getPostsTitles()).resolves.not.toContain(undefined);
  });
});
