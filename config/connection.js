const { connect, connection } = require("mongoose");

// connect to database
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost/ecommerce_db";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = connection;
