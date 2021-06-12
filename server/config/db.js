const mongoose = require("mongoose");
// MONGO_URI="mongodb+srv://admin:X2vsbd82GxSIsSBC@cluster0.q3eqt.mongodb.net/bookDB?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connected Successfully.");
  } catch (error) {
    console.log("MongoDB Connection Failed.");
    console.log(error)
    process.exit(1);
  }
};

module.exports = connectDB;