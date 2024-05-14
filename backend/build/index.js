"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const connectDb_1 = require("./app/database/connectDb");
const env_validator_1 = require("./app/utility/env-validator");
(0, env_validator_1.validateEnv)();
(0, app_1.startServer)();
(0, connectDb_1.connectDB)(process.env.MONGO_URI || "");
