import mongoose from "mongoose";

export default async function connectDb() {
  try {
    await mongoose.connect("mongodb+srv://user1:yahiamo99@cluster0.ty6n13k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected", error);
  }
}
