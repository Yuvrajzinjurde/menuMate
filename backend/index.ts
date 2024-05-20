import { startServer } from "./app/app";
import { connectDB } from "./app/connections/connetctToMongo";
import { validateEnv } from "./app/utility/env-validator";

validateEnv();
startServer();
// connectDB(process.env.MONGO_URI||"");
