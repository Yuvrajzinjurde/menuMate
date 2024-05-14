"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { MONGO_URI } = process.env;
const connectDB = (MONGO_URI) => {
    mongoose_1.default.connect(MONGO_URI).then(() => {
        console.log("CONNECTED TO DB");
    }).catch(e => console.log("Error connecting database : ", e));
};
exports.connectDB = connectDB;
