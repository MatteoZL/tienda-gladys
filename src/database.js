import mongoose from "mongoose";

const uri = "mongodb://unqeegwdkcdbk8cdk3dg:WL5qvSqV4zPMXdncwKgR@bvx1cb9mirgvajh-mongodb.services.clever-cloud.com:27017/bvx1cb9mirgvajh";
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export default async function connectDB() {
  await mongoose.connect(uri, options, () => {
    console.log("Database is connected");
  });
}
