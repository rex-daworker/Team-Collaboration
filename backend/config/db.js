const mongoose = require("mongoose");

async function connectDb() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    if (process.env.NODE_ENV === "test") {
      return;
    }
    throw new Error("MONGODB_URI is not set");
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected");
}

module.exports = connectDb;
