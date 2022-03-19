const dotenv = require("dotenv");
dotenv.config();

const APP_ENV = {
  PORT: process.env.PORT || 1234,
  DB_URI: process.env.DB_URI,
  ENVIRONMENT: process.env.ENVIRONMENT || "development",
};

module.exports = APP_ENV;
