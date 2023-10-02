import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should get en event information", async () => {
    expect(status).toBe(200)
  })
  expect(body).toEqual({
    id: 1,
    title: "Super Event",
    image: "image",
    date:"date"
  })
});