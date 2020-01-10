const mongoose = require('mongoose');

const connectDB = () => {
  // 'connect' method returns a promise
  const conn = mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(c => {
      console.log(`MongoDB Connected: ${c.connection.host}`);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = connectDB;
