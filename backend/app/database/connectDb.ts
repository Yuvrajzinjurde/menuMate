import mongoose from "mongoose";

export const connectDB = (MONGO_URI: string) => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("CONNECTED TO DB");
    })
    .catch((e) => console.log("Error connecting database : ", e));
};
