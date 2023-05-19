const { connect, connection } = require('mongoose');

//connects to database with a link
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmediaAssignment';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
