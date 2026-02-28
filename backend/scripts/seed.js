require("dotenv").config();

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const connectDb = require("../config/db");

const User = require("../models/User");
const Product = require("../models/Product");
const Inventory = require("../models/Inventory");
const Order = require("../models/Order");
const Reservation = require("../models/Reservation");
const SellerSettings = require("../models/SellerSettings");

async function upsertUser(email, payload) {
  return User.findOneAndUpdate({ email }, payload, {
    upsert: true,
    returnDocument: "after",
    setDefaultsOnInsert: true
  });
}

async function seed() {
  await connectDb();

  const hashedPassword = await bcrypt.hash("Password123!", 10);

  const admin = await upsertUser("admin@example.com", {
    name: "Demo Admin",
    email: "admin@example.com",
    password: hashedPassword,
    role: "admin"
  });

  const seller = await upsertUser("seller@example.com", {
    name: "Demo Seller",
    email: "seller@example.com",
    password: hashedPassword,
    role: "seller"
  });

  const customer = await upsertUser("customer@example.com", {
    name: "Demo Customer",
    email: "customer@example.com",
    password: hashedPassword,
    role: "customer"
  });

  const product = await Product.findOneAndUpdate(
    { sellerId: seller._id, name: "Fresh Bread" },
    {
      sellerId: seller._id,
      name: "Fresh Bread",
      type: "product",
      price: 6.5,
      description: "Handmade bread loaf",
      category: "Bakery",
      isReservable: false
    },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
  );

  const service = await Product.findOneAndUpdate(
    { sellerId: seller._id, name: "Grooming Session" },
    {
      sellerId: seller._id,
      name: "Grooming Session",
      type: "service",
      price: 45,
      description: "One-hour pet grooming appointment",
      category: "Pet Service",
      durationMin: 60,
      isReservable: true
    },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
  );

  await Inventory.findOneAndUpdate(
    { productId: product._id },
    { productId: product._id, quantity: 40, lowStockAlert: 8 },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
  );

  await SellerSettings.findOneAndUpdate(
    { sellerId: seller._id },
    {
      sellerId: seller._id,
      businessName: "Demo Shop",
      openingHours: "Mon-Fri 09:00-18:00",
      pickupRules: "Please pick up within 30 minutes of slot time.",
      reservationRules: "Service reservations require 24-hour notice."
    },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
  );

  await Order.findOneAndUpdate(
    { customerId: customer._id, sellerId: seller._id },
    {
      customerId: customer._id,
      sellerId: seller._id,
      items: [{ productId: product._id, quantity: 2 }],
      pickupTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
      status: "pending"
    },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
  );

  await Reservation.findOneAndUpdate(
    { customerId: customer._id, sellerId: seller._id, serviceId: service._id },
    {
      customerId: customer._id,
      sellerId: seller._id,
      serviceId: service._id,
      reservationTime: new Date(Date.now() + 72 * 60 * 60 * 1000),
      partySize: 1,
      notes: "First appointment",
      status: "pending"
    },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
  );

  console.log("Seed complete.");
  console.log("Admin:", admin.email);
  console.log("Seller:", seller.email);
  console.log("Customer:", customer.email);
}

seed()
  .then(async () => {
    await mongoose.connection.close();
  })
  .catch(async (error) => {
    console.error("Seed failed:", error.message);
    await mongoose.connection.close();
    process.exit(1);
  });
