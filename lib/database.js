import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log("Erro Connecting to MongoDB", err);
      else console.log("Connected to MongoDB");
    }
  );
};

export default connect;
