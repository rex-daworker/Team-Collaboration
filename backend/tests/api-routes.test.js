const request = require("supertest");
const app = require("../app");

describe("API route scaffolds", () => {
  const notImplemented = { message: "Not implemented yet" };

  it("handles auth routes", async () => {
    const register = await request(app).post("/api/auth/register");
    const login = await request(app).post("/api/auth/login");

    expect(register.statusCode).toBe(501);
    expect(login.statusCode).toBe(501);
    expect(register.body.message).toBe(notImplemented.message);
    expect(login.body.message).toBe(notImplemented.message);
  });

  it("handles product routes", async () => {
    const list = await request(app).get("/api/products");
    const create = await request(app).post("/api/products");
    const update = await request(app).put("/api/products/123");
    const remove = await request(app).delete("/api/products/123");

    expect(list.statusCode).toBe(501);
    expect(create.statusCode).toBe(501);
    expect(update.statusCode).toBe(501);
    expect(remove.statusCode).toBe(501);
  });

  it("handles order routes", async () => {
    const create = await request(app).post("/api/orders");
    const customer = await request(app).get("/api/orders/customer");
    const seller = await request(app).get("/api/orders/seller");
    const status = await request(app).patch("/api/orders/123/status");

    expect(create.statusCode).toBe(501);
    expect(customer.statusCode).toBe(501);
    expect(seller.statusCode).toBe(501);
    expect(status.statusCode).toBe(501);
  });

  it("handles reservation routes", async () => {
    const create = await request(app).post("/api/reservations");
    const customer = await request(app).get("/api/reservations/customer");
    const seller = await request(app).get("/api/reservations/seller");
    const status = await request(app).patch("/api/reservations/123/status");

    expect(create.statusCode).toBe(501);
    expect(customer.statusCode).toBe(501);
    expect(seller.statusCode).toBe(501);
    expect(status.statusCode).toBe(501);
  });

  it("handles inventory routes", async () => {
    const getInventory = await request(app).get("/api/inventory/123");
    const updateInventory = await request(app).patch("/api/inventory/123");

    expect(getInventory.statusCode).toBe(501);
    expect(updateInventory.statusCode).toBe(501);
  });

  it("handles seller settings routes", async () => {
    const getSettings = await request(app).get("/api/seller/settings");
    const updateSettings = await request(app).put("/api/seller/settings");

    expect(getSettings.statusCode).toBe(501);
    expect(updateSettings.statusCode).toBe(501);
  });
});
