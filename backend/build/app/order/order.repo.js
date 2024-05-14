"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertOne = void 0;
const order_schema_1 = __importDefault(require("./order.schema"));
const insertOne = (order) => {
    const newOrder = new order_schema_1.default.orderSchema(order);
    newOrder.save();
    const newOrderStatus = new order_schema_1.default.orderStatus({
        orderId: newOrder._id,
        isPaid: false,
        isActive: true,
        isAssigned: false,
    });
    newOrderStatus.save();
    return newOrder;
};
exports.insertOne = insertOne;
exports.default = {
    insertOne: exports.insertOne,
};
