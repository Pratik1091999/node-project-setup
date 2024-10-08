const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(config.db.database_url, {
      dbName: config.db.database_name,
    });
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    console.log(`Database name: ${config.db.database_name}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
