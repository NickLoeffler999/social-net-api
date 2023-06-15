const { connect, connection } = require("mongoose");

// connect to database
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost/social-network-api";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = connection;
