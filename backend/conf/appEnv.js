const dotenv = require("dotenv");
dotenv.config();

const APP_ENV = {
  PORT: process.env.PORT || 1234,
  DB_URI: process.env.DB_URI,
};

module.exports = APP_ENV;
