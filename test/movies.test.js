const request = require("supertest");

const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
      /** Code your test here */
    });
  });

  describe("GET /api/movies/:id", () => {
    it("should return a specific movie when a valid ID", async () => {
      const response = await request(app).get("/api/movies/1");
  
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
    });
    
    it("should return 404 Not Found", async () => {
      const response = await request(app).get("/api/movies/0");
  
      expect(response.status).toEqual(404);
    });
  });