import e from "express";
import mongoose from "mongoose";

// CRIANDO A CONEXAO COM O MONGO DB
async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL!);
    console.log(`MONGO DB CONNECTED: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error is: ${error}`);
    process.exit(1);
  }  //   await mongoose.connect('mongodb://127.0.0.1:27017/test'); //
}

export default connectDB
